'use client'
import { Database } from '@/lib/schema'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Button, Input } from "@/components";
import { useEffect, useState } from "react";
import { exercisesInputs } from '../inputData';
import { IExerciseType } from '@/types/ExerciseTypes';

const initialState = {
    title: '',
    duration: '',
    note: '',
    intensity: '',
    type: ''
};

export default function ExercisesCategory() {
    const supabase = createPagesBrowserClient<Database>()
    const [formData, setFormData] = useState(initialState);
    const [exercises, setExercises] = useState<IExerciseType[] | null>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const resetForm = () => {
        setFormData(initialState)
    }

    const onSubmit = async () => {
        await supabase.from('exercises').insert(formData)
        resetForm();
    }

    useEffect(() => {
        async function getExercises () {
            const { data } = await supabase.from('exercises').select()
            setExercises(data);
        }
        getExercises()
    }, [])

    return (
        <div>
            <h1>Exercises</h1>
            <h3>Add new workout</h3>
            <div className="flex flex-col w-full items-center">
                {exercisesInputs.map(({ name, type, placeholder, label }, i) => (
                    <Input
                        key={i}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={formData[name as keyof typeof formData]}
                    />
                ))}
                <Button onClick={onSubmit} />
            </div>
            <div className="mt-5">
                <h2 className='mb-5 font-bold text-green-500'>All Workouts 👍</h2>
                {exercises?.map((exercise, i) => (
                    <div key={i}>
                        <h4>{exercise.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
