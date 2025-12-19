import PostCard from "../../../../components/PoseCard";
import { PostResponse } from "../../../../lib/posts";

async function fetchDetailPost(id: string): Promise<PostResponse> {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${BASE_API}posts/${id}`);
  const post: PostResponse = await data.json();
  return post;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchDetailPost(slug);
  console.log(post);
  return (
    <div className="p-4">
      <PostCard
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    </div>
  );
}
