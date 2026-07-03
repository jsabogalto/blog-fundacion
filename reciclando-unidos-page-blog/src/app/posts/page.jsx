// Server Component: renderiza TODOS los posts en el HTML, sin límite fijo.

import axios from "axios";
import PostListItem from "@/components/PostListItem";
import SectionImageComponent from "@/components/SectionImageComponent";
import HeadSectionComponent from "@/components/HeadSectionComponent";

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
    className: "bg-green-ru/20 p-8 rounded-3xl",
    titleCard: "Gracias al apoyo de la sociedad y la empresa privada podemos dar vida a nuestros proyectos",
    textCard: "Hemos donado computadores a colegios, fundaciones, jardines, estudiantes universitarios y estudiantes en zonas rurales. Gracias al contacto con personas de otras ciudades que confían en nosotros, logramos hacer llegar tecnología a zonas alejadas donde más se necesita.",
  },
  educacion: {
    title: "Educación Tecnológica",
    description: "Aprende sobre el manejo responsable de residuos electrónicos y el acceso digital.",
    image: "fondo-educacion.webp",
    className: "bg-green-ru/20 p-8 rounded-3xl",
    titleCard: "Formamos a la comunidad para cerrar la brecha digital y aprovechar la tecnología",
    textCard: "Compartimos conocimiento sobre el uso responsable de la tecnología, el manejo adecuado de los residuos electrónicos y el acceso digital. Con cada curso y taller buscamos que más personas aprovechen las herramientas que hoy transforman la educación.",
  },
  "reciclaje-electronico": {
    title: "Reciclaje Electrónico en Bogotá",
    description: "Cómo reciclamos tus computadores y dispositivos de forma responsable con gestores autorizados en Bogotá y Cundinamarca.",
    image: "/bg-recicly.jpeg",
    className: "bg-green-ru/20 p-8 rounded-3xl",
    titleCard: "Reciclamos tus dispositivos de forma responsable en Bogotá y Cundinamarca",
    textCard: "Los equipos que no pueden reacondicionarse los gestionamos con aliados autorizados para su disposición final. Así evitamos que los residuos electrónicos contaminen y garantizamos que cada componente se aproveche o se trate de manera segura para el planeta.",
  },
  "donar-computadores": {
    title: "Artículos sobre Donar Computadores en Bogotá",
    description: "Guías y consejos para donar tus computadores usados en Bogotá y Cundinamarca, y darles una segunda vida con impacto social.",
    image: "bgdonar-computadores.webp",
    className: "bg-green-ru/20 p-8 rounded-3xl",
    titleCard: "Todo lo que necesitas saber para donar tus computadores en Bogotá",
    textCard: "Reunimos guías y consejos prácticos para donar tus computadores usados de forma fácil y gratuita. Descubre cómo darle una segunda vida a tus equipos, obtener tu certificado de donación y generar un impacto social real en tu ciudad.",
  },
  cursos: {
    title: "Cursos",
    description: "Formación tecnológica para la comunidad y nueva vida a los equipos donados.",
    image: "bg-cursos.webp",
    className: "bg-green-ru/20 p-8 rounded-3xl",
    titleCard: "Cursos que forman talento y dan nueva vida a los equipos donados",
    textCard: "Ofrecemos formación tecnológica a la comunidad mientras nuestros voluntarios reacondicionan los computadores donados. Cada curso es una oportunidad para aprender, adquirir experiencia práctica y dar el primer paso hacia el sector tecnológico.",
  },
};

const DEFAULT_CATEGORY = {
  // title corto y con keyword; la descripción larga va en `description`
  title: "Blog",
  description:
    "Publicaciones, proyectos y cursos de Reciclando Unidos. Conoce cómo donar computadores y darles una segunda vida.",
  image: "/microprocesador.webp",
  className: "bg-green-ru/20 p-8 rounded-3xl",
  titleCard: "Historias, guías y noticias sobre cómo transformamos la tecnología en oportunidades",
  textCard: "En nuestro blog compartimos todo lo que hacemos: proyectos de donación, cursos de formación, consejos para donar tus computadores y buenas prácticas de reciclaje electrónico. Cada publicación refleja cómo, con el apoyo de la sociedad y la empresa privada, damos una segunda vida a la tecnología y llevamos oportunidades a quienes más lo necesitan.",
};
const FALLBACK_OG = "https://ik.imagekit.io/2g4mlp2dp/microprocesador.webp?updatedAt=1783028887845"; // 1200×630 del layout, por si una categoría no trae imagen

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
async function getAllPosts({ cat, search }) {
  const all = [];
  let page = 1;
  const PER_REQUEST = 50;

  while (all.length < SAFETY_CAP) {
    const res = await axios.get(`${API}/posts`, {
      params: {
        page,
        limit: PER_REQUEST,
        ...(cat ? { cat } : {}),
        ...(search ? { search } : {}), // 👈 ahora sí se envía
      },
    });

    const batch = res.data?.posts ?? [];
    all.push(...batch);

    const hasMore = res.data?.hasMore;
    if (!hasMore || batch.length === 0 || batch.length < PER_REQUEST) break;

    page += 1;
  }

  return all;
}

const normalize = (s = "") =>
  s.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function postMatchesSearch(post, search) {
  if (!search) return true;

  const words = normalize(search).split(/\s+/).filter(Boolean);

  // ⚠️ Junta TODOS los campos de texto que devuelva tu post.
  // Ajusta esta lista a los nombres reales de tu schema.
  const haystack = normalize(
    [post.title, post.desc, post.description, post.content, post.excerpt, post.slug, post.category]
      .filter(Boolean)
      .join(" ")
  );

  return words.every((w) => haystack.includes(w));
}

const PostListPage = async ({ searchParams }) => {
  const { cat, search } = await searchParams;
  const data = (cat && CATEGORIES[cat]) || DEFAULT_CATEGORY;

  const rawPosts = await getAllPosts({ cat, search });

  // Deduplicamos por _id
  const deduped = Array.from(
    new Map(rawPosts.filter(Boolean).map((p) => [p._id, p])).values()
  );

  // Filtro estricto: solo los que realmente contienen la búsqueda
  const posts = search
    ? deduped.filter((p) => postMatchesSearch(p, search))
    : deduped;

  return (
    <div className="flex flex-col overflow-x-clip">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <SectionImageComponent
          src={data.image}
          w={1000}
          h={1000}
          alt={`${data.title} - Fundación Reciclando Unidos`}
          title={data.title}
        />
      </div>

      <div className="mx-auto w-full max-w-layer px-5 py-14 md:px-12">

        <HeadSectionComponent title={data.titleCard} text={data.textCard} classNameHeadSection={data.className} />

        {posts.length === 0 ? (
          <p className="py-8 text-center text-gray-500">
            {search
              ? `No se encontró ninguna publicación para “${search}”.`
              : "No hay publicaciones todavía."}
          </p>
        ) : (
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-3 pt-12">
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