// Server Component: renderiza TODOS los posts en el HTML, sin límite fijo.

import axios from "axios";
import PostListItem from "@/components/PostListItem";
import SectionImageComponent from "@/components/SectionImageComponent";

const API = process.env.NEXT_PUBLIC_API_URL;
const IMG_BASE = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

// Salvaguarda alta (no un límite "real"): evita pedir infinito por error.
// Súbela si algún día superas este número.
const SAFETY_CAP = 300;

const CATEGORIES = {
  proyectos: {
    title: "Proyectos",
    description: "Conoce los proyectos sociales y ambientales de Reciclando Unidos.",
    image: "1777396020675.jpeg",
  },
  educacion: {
    title: "Educación Tecnológica",
    description: "Aprende sobre el manejo responsable de residuos electrónicos y el acceso digital.",
    image: "fondo-educacion.webp",
  },
  "reciclaje-electronico": {
    title: "Reciclaje Electrónico",
    description: "Cómo reciclamos tus dispositivos de forma responsable con gestores autorizados.",
    image: "reciclaje-electronico.webp",
  },
  "donar-computadores": {
    // 👇 ángulo editorial, ya no compite con la landing /
    title: "Artículos sobre Donación de Computadores",
    description: "Guías y consejos para donar tus computadores y darles una segunda vida.",
    image: "bgdonar-computadores.webp",
  },
  cursos: {
    title: "Cursos",
    description: "Formación tecnológica para la comunidad y nueva vida a los equipos donados.",
    image: "bg-cursos.webp",
  },
};

const DEFAULT_CATEGORY = {
  // title corto y con keyword; la descripción larga va en `description`
  title: "Blog",
  description:
    "Publicaciones, proyectos y cursos de Reciclando Unidos. Conoce cómo donar computadores y darles una segunda vida.",
  image: "1777396020675.jpeg",
};

const FALLBACK_OG = "/imagepublic.jpg"; // 1200×630 del layout, por si una categoría no trae imagen

export async function generateMetadata({ searchParams }) {
  const { cat } = await searchParams;
  const data = (cat && CATEGORIES[cat]) || DEFAULT_CATEGORY;
  const canonical = cat && CATEGORIES[cat] ? `/posts?cat=${cat}` : "/posts";

  const ogImage = data.image ? `${IMG_BASE}/${data.image}` : FALLBACK_OG;

  return {
    title: data.title, // string → la plantilla añade la marca (queda bien por ser cortos)
    description: data.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: data.title,
      description: data.description,
      url: canonical,
      locale: "es_CO",
      siteName: "Fundación Reciclando Unidos",
      images: [{ url: ogImage, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [ogImage],
    },
  };
}

// Trae TODOS los posts recorriendo páginas hasta que el backend diga "no hay más".
// Así funciona aunque tu API tope el limit por petición (p. ej. máx 10 o 20).
async function getAllPosts(cat) {
  const all = [];
  let page = 1;
  const PER_REQUEST = 50; // cuántos pedir por llamada (ajústalo al máximo que acepte tu API)

  while (all.length < SAFETY_CAP) {
    const res = await axios.get(`${API}/posts`, {
      params: { page, limit: PER_REQUEST, ...(cat ? { cat } : {}) },
    });

    const batch = res.data?.posts ?? [];
    all.push(...batch);

    // Paramos si el backend dice que no hay más, o si devolvió menos de lo pedido.
    const hasMore = res.data?.hasMore;
    if (!hasMore || batch.length === 0 || batch.length < PER_REQUEST) break;

    page += 1;
  }

  return all;
}

// ───────────── Página (Server Component) ─────────────
const PostListPage = async ({ searchParams }) => {
  const { cat } = await searchParams;
  const data = (cat && CATEGORIES[cat]) || DEFAULT_CATEGORY;

  const rawPosts = await getAllPosts(cat);

  // Deduplicamos por _id por si alguna página se solapa.
  const posts = Array.from(
    new Map(rawPosts.filter(Boolean).map((p) => [p._id, p])).values()
  );

  return (
    <div className="flex flex-col overflow-x-clip">
      {/* HERO */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <SectionImageComponent
          src={data.image}
          w={1000}
          h={1000}
          alt={`${data.title} - Fundación Reciclando Unidos`}
          title={data.title}
          subtitle={data.description}
          srcButton={"/"}
          textButton={"Descubre la fundación"}
        />
      </div>

      {/* LISTA: TODOS los posts, renderizados en servidor (HTML indexable) */}
      <div className="mx-auto w-full max-w-[1400px] px-8 py-8 md:px-12">
        {posts.length === 0 ? (
          <p className="py-8 text-center text-gray-500">No hay publicaciones todavía.</p>
        ) : (
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-3">
            {posts.map((post) => (
              <PostListItem key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostListPage;