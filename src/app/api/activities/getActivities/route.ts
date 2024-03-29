import { supabase } from "@/src/lib/initSupabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { column, value } = await request.json()
    try {
        if (column && value) {
            const { data } = await supabase
            .from('activities')
            .select()
            .eq(column, value);
            return NextResponse.json(data);
        }

        const { data } = await supabase
            .from('activities')
            .select()

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from Supabase');
        return NextResponse.error();
    }
}
