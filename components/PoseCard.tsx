import { PostResponse } from "@/lib/types/posts";
import { cn } from "@/lib/utils";

interface PostCardProps extends PostResponse {
  detailed?: boolean;
  className?: string;
}

export default function PostCard({
  userId = 0,
  id = 0,
  title = "Default Title",
  body = "Default description for the post card component.",
  detailed = false,
  className = "",
}: PostCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300",
        detailed && "border-2 border-blue-100",
        className
      )}
    >
      <div className="mb-4">
        <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          Post #{id}
        </span>
        <span className="text-xs font-medium ml-2 px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
          User #{userId}
        </span>
      </div>

      <h2
        className={cn(
          "font-bold mb-3",
          detailed ? "text-2xl" : "text-xl line-clamp-1"
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          "text-gray-700 mb-4",
          detailed ? "text-base" : "text-sm line-clamp-3"
        )}
      >
        {body}
      </p>

      {detailed && (
        <div className="mt-6 pt-4 border-t">
          <h4 className="font-semibold text-sm text-gray-500 mb-2">Metadata</h4>
          <div className="text-sm text-gray-600">
            <p>Post ID: {id}</p>
            <p>Author: User {userId}</p>
          </div>
        </div>
      )}
    </div>
  );
}
