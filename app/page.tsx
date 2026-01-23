"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg" variant="secondary">
            Go to Dashboard
          </Button>
        </Link>
        <Link
          href="/photos"
          className="font-semibold italic text-sky-600 underline"
        >
          Go to photos
        </Link>
      </div>
    </div>
  );
}
