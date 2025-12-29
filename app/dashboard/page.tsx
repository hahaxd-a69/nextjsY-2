import { fetchAllPosts } from "@/lib/data/fetchPosts";
import CardClientList from "@/components/CardClientList";

export default async function Dashboard() {
  const postsPromise = fetchAllPosts();

  return (
    <div className="p-4 md:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Blog Dashboard</h1>
        <p className="text-gray-600 mt-2">Browse all blog posts</p>
      </div>

      <CardClientList fetchPost={postsPromise} />
    </div>
  );
}
