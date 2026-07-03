"use client";

import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const API = process.env.NEXT_PUBLIC_API_URL;
const POSTS_PER_PAGE = 10;
const MAX_POSTS = 100;

const fetchPosts = async (pageParam, params) => {
  const res = await axios.get(`${API}/posts`, {
    params: { page: pageParam, limit: POSTS_PER_PAGE, ...params },
  });
  return res.data;
};

const PostList = ({ cat, initialHasMore = true, columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }) => {
  const searchParams = useSearchParams();
  // Prioriza la prop cat; añade el resto de filtros de la URL si los hubiera
  const urlParams = Object.fromEntries([...searchParams]);
  const queryParams = { ...urlParams, ...(cat ? { cat } : {}) };

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["posts", queryParams],
    queryFn: ({ pageParam }) => fetchPosts(pageParam, queryParams),
    initialPageParam: 2, // 👈 la página 1 ya la pintó el servidor
    enabled: initialHasMore,
    getNextPageParam: (lastPage, pages) => {
      const loaded = (pages.length + 1) * POSTS_PER_PAGE; // +1 por la pág. servidor
      if (loaded >= MAX_POSTS) return undefined;
      return lastPage.hasMore ? pages.length + 2 : undefined;
    },
  });

  const extraPosts = Array.from(
    new Map(
      (data?.pages ?? [])
        .flatMap((page) => page.posts ?? [])
        .filter(Boolean)
        .map((post) => [post._id, post])
    ).values()
  );

  if (status === "error")
    return <p className="py-8 text-center text-red-600">Algo salió mal al cargar más publicaciones.</p>;

  return (
    <InfiniteScroll
      dataLength={extraPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4 className="col-span-full py-8 text-center text-gray-500">Cargando más posts...</h4>}
      className={`mt-12 grid gap-x-8 gap-y-12 mx-auto max-w-[1400px] flex-col px-5 md:px-12 py-8 mb-12 ${columnsClassName}`}
      style={{ overflow: "visible" }}
    >
      {extraPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;