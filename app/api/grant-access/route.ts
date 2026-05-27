import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    if (!token || typeof token !== 'string' || !UUID_REGEX.test(token)) {
      return NextResponse.json(
        { error: 'Invalid or missing token format', code: 'INVALID_TOKEN' },
        { status: 400 }
      );
    }

    // Call Supabase Edge Function
    const response = await fetch(`${SUPABASE_URL}/functions/v1/grant-access`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (!response.ok) {
      const ALLOWED_CODES = new Set([
        'TOKEN_EXPIRED',
        'INVALID_TOKEN',
        'TOKEN_NOT_FOUND',
        'TOKEN_REVOKED',
        'ACCESS_DENIED',
      ]);
      const code = data?.code ?? 'UNKNOWN_ERROR';
      const safeMessage = ALLOWED_CODES.has(code)
        ? data.error
        : 'Access check failed';
      console.error('Edge function error:', { status: response.status, data });
      return NextResponse.json(
        { error: safeMessage, code: ALLOWED_CODES.has(code) ? code : 'UNKNOWN_ERROR' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in grant-access API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}