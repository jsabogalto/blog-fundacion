import axios from "axios";
import PostListItem from "./PostListItem";

const API = process.env.NEXT_PUBLIC_API_URL;

async function getLatestPosts(limit, cat) {
  try {
    const res = await axios.get(`${API}/posts`, {
      params: {
        page: 1,
        limit,
        ...(cat ? { cat } : {}),
      },
    });
    return res.data?.posts ?? [];
  } catch {
    return [];
  }
}

async function LatestPosts({
  limit = 5,
  cat,
  title,
  desc,
  columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  bgClassName,
}) {
  const posts = (await getLatestPosts(limit, cat)).slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className={`w-full ${bgClassName}`}>
      <div className="max-w-layer px-5 py-12 md:px-12 mx-auto">
        {title && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-16">
            <h2 className="subtitle">
              {title}
            </h2>
            <p className="max-w-[60ch] paragraph md:pt-2">
              {desc}
            </p>
          </div>
        )}
        <div className={`mx-auto grid gap-x-8 mt-10 gap-y-12 ${columnsClassName}`}>
          {posts.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </div>


      </div>
    </section>
  );
}

export default LatestPosts;