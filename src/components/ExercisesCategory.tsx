'use client'
import { useForm } from 'react-hook-form';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useQuery } from '@tanstack/react-query';

import { Database } from '@/src/lib/schema'
import { Button, Input } from "@/src/components";
import { exercisesInputs } from '../../inputData';

export default function ExercisesCategory() {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
    const supabase = createPagesBrowserClient<Database>()

    const onSubmit = async (data: any) => {
        await supabase.from('exercises').insert(data)
        reset();
        refetch();
    }

    async function getExercises () {
        const { data } = await supabase.from('exercises').select()
        return data
    }

    const { data: allExercises, refetch } = useQuery({
        queryKey: ["allExercises"],
        queryFn: () => getExercises(),
    });

    return (
        <div>
            <h1>Exercises</h1>
            <h3>Add new workout</h3>
            <div className="flex flex-col w-full items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {exercisesInputs.map(({ name, type, placeholder, label }, i) => (
                        <Input
                            key={i}
                            type={type}
                            placeholder={placeholder}
                            {...register(name, { required: true })}
                        />
                    ))}
                    <Button type="submit" />
                </form>
            </div>
            <div className="mt-5">
                <h2 className='mb-5 font-bold text-green-500'>All Workouts 👍</h2>
                {allExercises?.map((exercise, i) => (
                    <div key={i}>
                        <h4>{exercise.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
