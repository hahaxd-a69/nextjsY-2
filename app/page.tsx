import { Button } from "@/components/ui/button";
import { Angry } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant="destructive">
        <Angry />
      </Button>
    </div>
  );
}
