'use client'

import { useFilteredData } from '@/src/hooks';
import { useForm, Controller } from 'react-hook-form';

export default function FilteredActivities() {
    const { register, handleSubmit, getValues, control } = useForm();

    const { data, refetch } = useFilteredData({ column: 'type', value: getValues("value") || 'learning' })
    const onSubmit = (data: any) => {
        console.log(getValues(), 'getvalues')
        refetch()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name='value'
                    render={({ field: { value, onChange, onBlur } }) => (
                        <select value={value} onChange={onChange} onBlur={onSubmit}>
                            <option value="exercise">Exercise</option>
                            <option value="learning">Learning</option>
                            <option value="food">Food</option>
                        </select>
                    )}
                />
                {/* <select
                    className="mt-2 block w-full rounded-md border-0 p-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="learning"
                    onChange={onSubmit}
                    {...register('value')}
                >
                    <option value="exercise">Exercise</option>
                    <option value="learning">Learning</option>
                    <option value="food">Food</option>
                </select> */}
            </form>
            <h2 className='mb-5 font-bold text-green-500'>Activities 👍</h2>
            <div className="flex flex-wrap mt-5">
                {data?.map((activity, i) => (
                    <div key={i} className='p-4 m-5 border border-1 border-green-200'>
                        <h4>Title: {activity.title}</h4>
                        <p>Type: {activity.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
