'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Activities from './components/activities';
import { Button, Input } from "@/src/components";
import { useData, useSupabase } from '@/src/hooks';
import { baseInputs } from '../../../inputData';
import SelectActivity from './components/select-activity-type';

export default function Activity() {
    const supabase = useSupabase()
    const { register, handleSubmit, reset } = useForm();
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
    const { data, refetch, isLoading } = useData({ column: 'type', value: selectedValue })

    const onSubmit = async (data: any) => {
        await supabase.from('activities').insert(data)
        setSelectedValue(undefined)
        reset();
        refetch();
    }

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
        refetch();
    };

    return (
        <div>
            <h3>Add new Activity</h3>
            <div className="flex flex-col w-full items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="activityType" className="block text-sm font-medium leading-6 text-gray-900">
                            Activity Type
                        </label>
                        <select
                            {...register('type')}
                            id="activityType"
                            name="activityType"
                            className="mt-2 block w-full rounded-md border-0 p-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue="learning"
                        >
                            <option value="exercise">Exercise</option>
                            <option value="learning">Learning</option>
                            <option value="food">Food</option>
                        </select>
                    </div>
                    {baseInputs.map(({ name, type, placeholder, label }, i) => (
                        <Input
                            key={i}
                            type={type}
                            label={label}
                            placeholder={placeholder}
                            {...register(name, { required: true })}
                        />
                    ))}
                    <Button type="submit" />
                </form>
            </div>

            <SelectActivity onChange={onChange} />
            <Activities data={data} isLoading={isLoading} />
        </div>
    )
}
