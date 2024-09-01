import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container m-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Job Ninja</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Jobs
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {isSupabaseConnected && <AuthButton />}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#4338ca] to-[#6d28d9] py-24">
          <div className="container m-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6">
            <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
              Unlock Your Career Potential
            </h1>
            <p className="max-w-md text-center text-lg text-white">
              Explore job opportunities, build your resume, and prepare for
              interviews with our comprehensive career platform.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#4338ca] shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#4338ca] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container m-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-10">
            <Link
              href="/portfolio"
              className="group relative overflow-hidden rounded-lg bg-muted/50 transition-all hover:scale-105"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Profile"
                className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-2xl font-bold">Profile</h3>
                <p className="mt-2 text-sm">
                  Showcase your skills and experience to potential employers.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-muted/50 transition-all hover:scale-105"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Job Dashboard"
                className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-2xl font-bold">Job Dashboard</h3>
                <p className="mt-2 text-sm">
                  Explore job opportunities and apply with ease.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-muted/50 transition-all hover:scale-105"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Resume Analysis"
                className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-2xl font-bold">Resume Analysis</h3>
                <p className="mt-2 text-sm">
                  Get personalized feedback to improve your resume.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group relative overflow-hidden rounded-lg bg-muted/50 transition-all hover:scale-105"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Job Prep"
                className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-2xl font-bold">Job Prep</h3>
                <p className="mt-2 text-sm">
                  Prepare for interviews and land your dream job.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Job Ninja</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline hover:underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="https://drive.google.com/file/d/1LF-iiydHJjTAsAehskuajxeraBdHfufU/view?usp=sharing"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
