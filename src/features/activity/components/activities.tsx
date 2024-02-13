interface FilteredActivitiesProps {
    data: {
        duration: string;
        id: number;
        intensity: string | null;
        note: string | null;
        title: string;
        type: string;
    }[] | null | undefined
    isLoading: boolean
}

export default function Activities({ data, isLoading }: FilteredActivitiesProps) {
    return (
        <div className='mt-5'>
            <h2 className='mb-5 font-bold text-green-500'>Activities 👍</h2>
            <div className="flex flex-wrap mt-5">
                {isLoading ? <p>Loading ...</p>: data?.map((activity, i) => (
                    <div key={i} className='p-4 m-5 border border-1 border-green-200'>
                        <h4>Title: {activity.title}</h4>
                        <p>Type: {activity.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
