import axios from "axios";
import PostListItem from "./PostListItem";

const API = process.env.NEXT_PUBLIC_API_URL;

async function getLatestPosts(limit) {
  try {
    const res = await axios.get(`${API}/posts`, {
      params: { page: 1, limit },
    });
    return res.data?.posts ?? [];
  } catch {
    return [];
  }
}

async function LatestPosts({ limit = 5, columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }) {
  const posts = (await getLatestPosts(limit)).slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <div className={`mx-auto max-w-[1400px] grid gap-x-8 gap-y-12 px-8 md:px-12 py-12 mb-8 ${columnsClassName}`}>
        
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default LatestPosts; 