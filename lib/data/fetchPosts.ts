import { PostResponse } from "../types/posts";

const BASE_API =
  process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com";

export async function fetchAllPosts(): Promise<PostResponse[]> {
  try {
    const response = await fetch(`${BASE_API}/posts`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchPostById(id: string): Promise<PostResponse> {
  try {
    const response = await fetch(`${BASE_API}/posts/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch post ${id}: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}

export async function fetchPostsByUserId(
  userId: number
): Promise<PostResponse[]> {
  try {
    const response = await fetch(`${BASE_API}/posts?userId=${userId}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts for user ${userId}: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    return [];
  }
}
