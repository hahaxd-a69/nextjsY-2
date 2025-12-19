import { PostResponse } from "../lib/posts";

export default function PostCard({
  userId = 0,
  id = 0,
  title = "default title",
  body = "default description",
}: PostResponse) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2 line-clamp-1">{title}</h2>
      <p className="text-gray-700 mb-4 line-clamp-3">{body}</p>
      <span className="text-sm text-gray-500">
        User ID: {userId} | Post ID: {id}
      </span>
    </div>
  );
}
