import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PostResponse } from "@/lib/types/posts";
import { truncateText } from "@/lib/utils";

interface CardsProps extends PostResponse {
  className?: string;
}

export default function Cards({
  userId,
  id,
  title,
  body,
  className = "",
}: CardsProps) {
  return (
    <Card className={`w-full overflow-hidden ${className}`}>
      <CardHeader>
        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-2">
          {truncateText(body, 100)}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">User #{userId}</span>
        <Button variant="ghost" size="sm">
          Read →
        </Button>
      </CardFooter>
    </Card>
  );
}
