import { NextResponse } from 'next/server';
import getPages from '@scripts/content/getPages';

export async function GET(request: Request) {
    const pages = await getPages();
    return NextResponse.json({ pages })
}