// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

// Define the list of paths that require authentication
const protectedPaths = ['/dashboard', '/profile', '/job-board'];

export async function middleware(req: NextRequest) {
  // Check if the request is to a protected path
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    const res = NextResponse.next();

    // Use Supabase helper to get the user
    const supabase = createMiddlewareClient({ req, res });
    const { data: { user } } = await supabase.auth.getUser();

    // If no user is found, redirect to the login page
    if (!user) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/login';
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Allow the request to proceed if authenticated or not on a protected path
  return NextResponse.next();
}

// Configure paths where middleware should run
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/job-board/:path*'],
};
