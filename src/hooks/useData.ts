import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface useDataProps {
    column?: string
    value?: string
    categoryId?: string
}

const useData = ({ column = "", value = "", categoryId = "" }: useDataProps) => {
    async function getData () {
        let items;
        const { data: activities } = await axios.post('/api/activities/getActivities', {
            column, value
        })
        const { data: categories } = await axios.get('/api/activities/getCategories')

        if (categoryId !== "") {
            const { data } = await axios.post('/api/activities/getItems', { categoryId })
            items = data
        }

        return {
            activities,
            categories,
            items
        }
    }

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["filtered-activities", column, value],
        queryFn: () => getData(),
    });

    return { data, refetch, isLoading }
}

export default useData
