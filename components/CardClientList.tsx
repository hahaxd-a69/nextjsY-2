import { PostResponse } from "@/lib/types/posts";
import { use } from "react";
import Cards from "./Cards";
import Link from "next/link";

interface CardClientListProps {
  fetchPost: Promise<PostResponse[]>;
}

export default function CardClientList({ fetchPost }: CardClientListProps) {
  const posts = use(fetchPost);

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/dashboard/blog/${post.id}`}
          className="block transition-transform hover:scale-[1.02]"
        >
          <Cards
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </div>
  );
}
