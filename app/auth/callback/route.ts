import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Error exchanging code for session:", error.message);
      return NextResponse.redirect(`${origin}/signup?error=auth`);
    }
  }

  if (redirectTo) {
    console.log(`code: ${code}`);
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/dashboard`);
}
