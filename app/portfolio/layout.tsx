import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <html lang="en">
      <body className={cn("antialiased")}>{children}</body>
    </html>
  );
}
