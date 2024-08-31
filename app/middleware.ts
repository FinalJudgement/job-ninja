import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log(`Middleware triggered for path: ${req.nextUrl.pathname}`); // Add this line for debugging
  
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there is no session, redirect to login
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('No session, redirecting to /login'); // Add this line for debugging
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/job-board/:path*'], // Protect both dashboard and job-board routes
};
