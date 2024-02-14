'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import Activities from './components/activities';
import { Button, Input } from "@/src/components";
import { useData } from '@/src/hooks';
import { baseInputs } from '../../../inputData';
import SelectActivity from './components/select-activity-type';

export default function Activity() {
    const { register, handleSubmit, reset, control, getValues } = useForm();
    const [selectedValues, setSelectedValues] = useState({
        filterActivitiesSelected: '',
        categoryId: ''
    });
    console.log(getValues(), 'getValues')

    const { data, refetch, isLoading } = useData({
        column: 'categoryId',
        value: selectedValues.filterActivitiesSelected,
        categoryId: selectedValues.categoryId
    })

    const onSubmit = async (data: any) => {
        axios.post('/api/activities/createActivity', data)
        setSelectedValues({ ...selectedValues, filterActivitiesSelected: '' })
        reset();
        refetch();
    }

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValues(
            prevState => ({ ...prevState, [e.target.name]: e.target.value })
        );
        refetch();
    };

    const { fields, append, remove } = useFieldArray({
        name: 'items',
        control,
    });

    useEffect(() => {
        fields.length && fields.forEach(() => remove(0));

        data?.items?.forEach((item) => {
            append({
                id: item.id,
                name: item.name,
                checked: false,
            });
        });
    }, [selectedValues.categoryId]);

    const handleCheckboxChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        fields[index].checked = event.target.checked;
    };

    return (
        <div>
            <h3>Add new Activity</h3>
            <div className="flex flex-col w-full items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectActivity
                        {...register('categoryId')}
                        name="categoryId"
                        onChange={onChange}
                        label='Select activity type'
                        options={data?.categories}
                    />
                    {baseInputs.map(({ name, type, placeholder, label }, i) => (
                        <Input
                            key={i}
                            type={type}
                            label={label}
                            placeholder={placeholder}
                            {...register(`data.${name}`, { required: true })}
                        />
                    ))}
                    {fields.map((item, index) => (
                        <div key={index} className='my-2'>
                            <input
                                type="checkbox"
                                checked={fields[index].checked}
                                {...register(`items.${index}.checked`)}
                                onChange={(e) => handleCheckboxChange(index, e)}
                            />
                            <label htmlFor={`items.${index}.checked`}>{item.name}</label>
                            <button type="button" onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <Button type="submit" />
                </form>
            </div>

            {/* <SelectActivity
                name="filterActivitiesSelected"
                onChange={onChange}
                label='Search by activity type'
                options={data?.categories}
            /> */}
            <Activities data={data?.activities} isLoading={isLoading} />
        </div>
    )
}
