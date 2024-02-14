import { supabase } from "@/src/lib/initSupabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { categoryId } = await request.json();
    try {
        if (categoryId === undefined) return;

        const { data } = await supabase
            .from('items')
            .select()
            .eq('categoryId', categoryId)

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from Supabase');
        return NextResponse.error();
    }
}
