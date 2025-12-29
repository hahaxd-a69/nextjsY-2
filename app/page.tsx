import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-700">
      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg" variant="secondary">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
