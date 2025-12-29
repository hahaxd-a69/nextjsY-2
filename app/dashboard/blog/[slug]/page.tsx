import { fetchPostById } from "@/lib/data/fetchPosts";
import PostCard from "@/components/PoseCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPostById(slug);

  return (
    <div>
      <div className="mb-6">
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            ← Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <PostCard
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
          detailed
        />

        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-semibold text-lg mb-4">Post Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Post ID:</span>
              <span className="ml-2 font-medium">{post.id}</span>
            </div>
            <div>
              <span className="text-gray-500">User ID:</span>
              <span className="ml-2 font-medium">{post.userId}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-500">Full Content:</span>
              <p className="mt-2 text-gray-700">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
