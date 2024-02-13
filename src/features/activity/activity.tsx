'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Activities from './components/activities';
import { Button, Input } from "@/src/components";
import { useData, useSupabase } from '@/src/hooks';
import { addActivityFormSelectInputOptions, baseInputs, filterActivitiesByTypeSelectInputOptions } from '../../../inputData';
import SelectActivity from './components/select-activity-type';

export default function Activity() {
    const supabase = useSupabase()
    const { register, handleSubmit, reset } = useForm();
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

    const { data, refetch, isLoading } = useData({ column: 'type', value: selectedValue })

    const onSubmit = async (data: any) => {
        console.log(data, 'data')
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
                    <SelectActivity 
                        {...register('type')} 
                        label='Select activity type'
                        options={addActivityFormSelectInputOptions}
                    />
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

            <SelectActivity 
                onChange={onChange}
                label='Search by activity type'
                options={filterActivitiesByTypeSelectInputOptions}
            />
            <Activities data={data} isLoading={isLoading} />
        </div>
    )
}
