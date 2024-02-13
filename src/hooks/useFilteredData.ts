import { useQuery } from '@tanstack/react-query';
import useSupabase from './useSupabase';

interface useFilteredDataProps {
    column: string,
    value: string
}

const useFilteredData = ({ column, value }: useFilteredDataProps) => {
    const supabase = useSupabase()

    async function getData () {
        const { data } = await supabase
            .from('activities')
            .select()
            .eq(column, value);
        return data
    }

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["filtered-activities", column, value],
        queryFn: () => getData(),
    });

    return { data, refetch, isLoading }
}

export default useFilteredData
