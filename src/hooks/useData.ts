import { useQuery } from '@tanstack/react-query';
import useSupabase from './useSupabase';

const useData = () => {
    const supabase = useSupabase()

    async function getData () {
        const { data } = await supabase.from('activities').select()
        return data
    }

    const { data, refetch } = useQuery({
        queryKey: ["activity"],
        queryFn: () => getData(),
    });

    return { data, refetch }
}

export default useData
