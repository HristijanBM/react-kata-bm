import { supabase } from "@/src/lib/initSupabase";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data } = await supabase
            .from('categories')
            .select()
            return NextResponse.json(data);

    } catch (error) {
        console.error('Error fetching data from Supabase');
        return NextResponse.error();
    }
}
