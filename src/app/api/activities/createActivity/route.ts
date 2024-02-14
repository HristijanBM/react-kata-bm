import { supabase } from "@/src/lib/initSupabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { categoryId, data, items } = await request.json()
    // next: store activity and try to get id from it to store in activities_items
    const createActivity = async () => {
        const { data: resObj } = await supabase
            .from('activities')
            .insert({...data, categoryId})
        return resObj
    }

    try {
        const response = await createActivity();
        console.log(response, 'resp')
        // await supabase.from('activities_items').insert({
        //     itemId, activityId: da})

        return NextResponse.json({ status: 201, msg: 'ok' });
    } catch (error) {
        console.error('Error fetching data from Supabase');
        return NextResponse.error();
    }
}
