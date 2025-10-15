import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { haUrl, haToken } = body;

    if (!haUrl || !haToken) {
      return NextResponse.json({ success: false, message: 'Home Assistant URL and Token are required.' }, { status: 400 });
    }

    const response = await fetch(`${haUrl}/api/states`, {
      headers: {
        'Authorization': `Bearer ${haToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Connection successful!' });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, message: `Connection failed: ${response.status} - ${errorText}` }, { status: response.status });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, message: `Connection failed: ${error.message}` }, { status: 500 });
  }
}