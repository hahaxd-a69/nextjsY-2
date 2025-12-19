import { PostResponse } from "../../lib/posts";
import PostCard from "../../components/PoseCard";
import Link from "next/link";

async function fetchPosts() {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${BASE_API}posts`);
  const posts: PostResponse[] = await data.json();
  return posts;
}

export default async function Dashboard() {
  const posts = await fetchPosts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/dashboard/blog/${post.id}`}
          className="block"
        >
          <PostCard
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
