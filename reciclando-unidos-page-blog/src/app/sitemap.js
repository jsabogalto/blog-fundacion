import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fundacionreciclandounidos.com";

export default async function sitemap() {
  // 1. Páginas estáticas (las 7 que me diste + la home)
  const staticPages = [
    "",                          // home
    "/donar-computadores",
    "/solicitud-computadores",
    "/contacto",
    "/posts",
    "/nuevas-iniciativas"
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // 2. Posts dinámicos desde tu API
  let postPages = [];
  try {
    const res = await axios.get(`${API}/posts`, { params: { page: 1, limit: 1000 } });
    const posts = res.data?.posts ?? [];
    postPages = posts
      .filter((p) => p.slug)
      .map((post) => ({
        url: `${SITE_URL}/posts/${post.slug}`,
        lastModified: post.updatedAt || post.createdAt || new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (err) {
    // Si la API falla, al menos devolvemos las páginas estáticas
    console.error("Error generando sitemap de posts:", err);
  }

  return [...staticPages, ...postPages];
}