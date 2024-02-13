import { useQuery } from '@tanstack/react-query';
import useSupabase from './useSupabase';

interface useDataProps {
    column?: "duration" | "id" | "intensity" | "note" | "title" | "type" | undefined
    value?: string
}

const useData = ({ column, value }: useDataProps) => {
    const supabase = useSupabase()

    async function getData () {
        if(column && value) {
            const { data } = await supabase
            .from('activities')
            .select()
            .eq(column, value);
            return data
        }

        const { data } = await supabase
            .from('activities')
            .select()
        return data
    }

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["filtered-activities", column, value],
        queryFn: () => getData(),
    });

    return { data, refetch, isLoading }
}

export default useData
