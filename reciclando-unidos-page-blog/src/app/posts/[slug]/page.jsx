// SIN "use client": este archivo es un Server Component.
// Next.js renderiza el HTML completo en el servidor -> Google lo indexa.
import ImageComponent from "../../../components/ImageComponent";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Linkedin, Gmail } from "@thesvg/react";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";

// En el servidor conviene una variable NO pública (API_URL).
// Dejo el fallback a la pública para no romper tu setup actual.
const API = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

// Fetch en el servidor. ISR: revalida cada 60s (cambia el número a gusto).
async function getPost(slug) {
  try {
    const res = await fetch(`${API}/posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// ───────────── SEO: título, descripción y Open Graph por post ─────────────
// Next deduplica el fetch, así que esto NO genera una segunda petición.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) {
    return { title: "Publicación no encontrada" };
  }

  // Fallback de descripción: usa desc, o recorta el contenido sin etiquetas HTML.
  const description =
    data.desc ||
    (data.content
      ? data.content.replace(/<[^>]*>/g, "").slice(0, 155).trim()
      : "Artículo de la Fundación Reciclando Unidos.");

  return {
    title: data.title,
    description,
    alternates: { canonical: `/posts/${slug}` },
    openGraph: {
      type: "article",
      title: data.title,
      description,
      url: `/posts/${slug}`,
      images: data.img
        ? [{ url: data.img, width: 1200, height: 630, alt: data.title }]
        : [],
      publishedTime: data.createdAt,
      modifiedTime: data.updatedAt || data.createdAt, // 👈 frescura
      authors: data.user?.username ? [data.user.username] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description,
      images: data.img ? [data.img] : [],
    },
  };
}

// ───────────── Página (Server Component asíncrono) ─────────────
const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  const data = await getPost(slug);

  // 404 real (status 404) -> bueno para SEO, renderiza tu app/not-found.
  if (!data) notFound();

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fundacionreciclandounidos.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.desc || undefined,
    image: data.img ? [data.img] : undefined,
    datePublished: data.createdAt,
    dateModified: data.updatedAt || data.createdAt,
    author: {
      "@type": "Person",
      name: data.user?.username || "Fundación Reciclando Unidos",
    },
    publisher: {
      "@type": "Organization",
      name: "Fundación Reciclando Unidos",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icono-reciclano-unidos.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/posts/${slug}`,
    },
  };

  const FAQ_SECTIONS = [{
  id: "donar",
  eyebrow: "Donar computadores",
  title: "Donar computadores usados: dale una segunda vida a tu equipo",
  intro:
    "¿Tienes un computador usado guardado sin usar? Dónalo y conviértelo en una herramienta de estudio y trabajo para quien más lo necesita. Aquí resolvemos las dudas más comunes para que donar sea fácil y seguro.",
  items: [
    {
      q: "¿Dónde puedo donar computadores usados en Colombia?",
      a: "Puedes donar tus computadores usados a la Fundación Reciclando Unidos, una organización sin ánimo de lucro en Colombia que repara y reacondiciona tecnología para entregarla a quienes más la necesitan. Recibimos tanto equipos de escritorio como portátiles, sin importar su antigüedad.",
    },
    {
      q: "¿Cómo dono mi computador usado?",
      a: "Donar tu computador usado es muy sencillo: nos cuentas qué equipo tienes, coordinamos la entrega o la recogida y nosotros nos encargamos del resto. Revisamos cada dispositivo, lo reparamos cuando es posible y lo entregamos a quien lo necesita; lo que no sirve, lo reciclamos de forma responsable.",
    },
    {
      q: "¿Qué computadores usados puedo donar?",
      a: "Puedes donar computadores de escritorio, portátiles, monitores y componentes, además de otros aparatos electrónicos. No importa si el equipo está algo viejo o lento: muchos se reacondicionan para volver a usarse y otros aportan piezas para reparar más dispositivos. Cada donación suma.",
    },
    {
      q: "¿Puedo donar computadores usados que ya no funcionan?",
      a: "Sí. Aunque tu computador usado no encienda o esté dañado, aún puede ser útil: aprovechamos sus piezas para reacondicionar otros equipos y reciclamos el resto de forma adecuada. Donar un equipo que ya no funciona siempre es mejor que dejarlo guardado acumulando polvo o botarlo a la basura.",
    },
    {
      q: "¿Recogen los computadores usados a domicilio?",
      a: "Sí, coordinamos la recogida de tus equipos para que donar sea lo más cómodo posible para ti. Cuéntanos cuántos computadores usados quieres donar y tu ubicación, y organizamos juntos la mejor forma de recibirlos.",
    },
    {
      q: "¿Necesito borrar mis datos antes de donar mi computador usado?",
      a: "Te recomendamos respaldar y borrar tu información antes de donar, por tu tranquilidad. De todas formas, antes de reacondicionar o reciclar cualquier equipo nos aseguramos de que los datos del dispositivo queden inaccesibles. Tu privacidad es parte importante del proceso.",
    },
    {
      q: "¿Qué pasa con mi computador usado después de donarlo?",
      a: "Después de donarlo, revisamos tu computador usado y le damos el mejor destino posible: si funciona o se puede reparar, lo reacondicionamos y lo entregamos a estudiantes, niños o comunidades con pocos recursos; si no, lo reciclamos por materiales. Así, tu equipo se transforma en impacto educativo, social y ambiental.",
    },
    {
      q: "¿Las empresas pueden donar computadores usados en grandes cantidades?",
      a: "Claro. Recibimos donaciones de computadores usados de empresas que renuevan su tecnología, dentro de sus programas de responsabilidad social. Coordinamos la recogida de varios equipos a la vez y les damos un destino útil y trazable, en lugar de que terminen almacenados o como basura electrónica.",
    },
    {
      q: "¿Donar computadores usados tiene algún costo?",
      a: "Donar no tiene costo para ti: solo necesitas contactarnos y coordinar la entrega o recogida de tus equipos. Tú liberas espacio y te despides de tu computador usado de la forma más responsable, y nosotros nos encargamos de aprovecharlo al máximo.",
    },
    {
      q: "¿Por qué donar mi computador usado en vez de venderlo o guardarlo?",
      a: "Donar tu computador usado le da un propósito real: en vez de venderlo por unos pocos pesos o dejarlo guardado sin uso, se convierte en una oportunidad de estudio y trabajo para alguien más. Además, evitas que termine como residuo contaminante. Es la opción que más beneficia a todos: a ti, a quien lo recibe y al medio ambiente.",
    },
  ],
}]
  return (
    // overflow-x-clip: contiene el hero full-bleed SIN romper el sticky
    <article className="flex flex-col overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ───────────── HERO full-bleed (ocupa todo el ancho) ───────────── */}
      <header className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        {data.img && (
          <ImageComponent
            src={data.img}
            alt={data.title}
            width={1920}
            height={900}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-[480px] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center text-white">
          {data.category && (
            <Link
              href={`/posts/?cat=${data.category}`}
              className="mb-6 rounded border border-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              {data.category}
            </Link>
          )}

          <h1 className="title">
            {data.title}
          </h1>

          <p className="mt-6 text-sm tracking-wide text-white">
            {data.user?.username && <span>Por {data.user.username}</span>}
            {data.user?.username && data.createdAt && (
              <span className="mx-3 text-white">|</span>
            )}
            {data.createdAt && <span>{formatDate(data.createdAt)}</span>}
          </p>
        </div>
      </header>

      {/* ───────────── CONTENIDO (limitado a 1400px) ───────────── */}
      <div className="mx-auto w-full max-w-[1400px] px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:gap-12 md:px-4">
          {/* ASIDE: 1/3, sticky, izquierda en md. En móvil va debajo (order-2). */}
          <aside className="order-2 flex flex-col gap-8 md:order-1 md:w-1/5 md:sticky md:top-24 md:self-start">
            {/* Autor */}
            <div className="flex flex-col items-center gap-4">
              <span>Autor</span>
              <div className="flex gap-8 justify-center items-center py-8 border-t border-gray-200">
                {data.user?.img && (
                  <img
                    src={data.user.img}
                    alt={data.user.username || "Autor"}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                )}
                <span className="font-semibold text-black">
                  {data.user?.username}
                </span>
              </div>
              <div className="flex flex-col gap-8">
                {data.user?.profile && (
                  <span className="text-sm text-gray-500 text-center">
                    {data.user.profile}
                  </span>
                )}
              </div>
            </div>

            {/* Compartir */}
            {(data.user?.linkedIn || data.user?.email) && (
              <div className="flex items-center justify-center gap-4 text-gray-600">
                {data.user?.linkedIn && (
                  <a
                    href={data.user.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition hover:text-emerald-700"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
                {data.user?.email && (
                  <a
                    href={`mailto:${data.user.email}`}
                    aria-label="Email"
                    className="transition hover:text-emerald-700"
                  >
                    <Gmail className="h-6 w-6" />
                  </a>
                )}
              </div>
            )}

            {/* Categorías */}
            <div className="flex flex-col gap-4 border-t border-gray-200 pt-6">
              <span className="font-medium text-gray-700">Categorías</span>
              <Link href="/posts?cat=proyectos" className="text-sm text-gray-700 hover:underline">Proyectos</Link>
              <Link href="/posts?cat=educacion" className="text-sm text-gray-700 hover:underline">Educación</Link>
              <Link href="/posts?cat=reciclaje-electronico" className="text-sm text-gray-700 hover:underline">Reciclaje Electrónico</Link>
              <Link href="/posts?cat=donar-computadores" className="text-sm text-gray-700 hover:underline">Donar computadores</Link>
              <Link href="/posts?cat=cursos" className="text-sm text-gray-700 hover:underline">Cursos</Link>
            </div>
          </aside>

          {/* ARTÍCULO: 2/3, derecha en md. min-w-0 evita desbordes en móvil. */}
          <div className="order-1 min-w-0 md:order-2 md:w-2/3 md:border-l border-gray-200 md:pl-8">
            {data.desc && (
              <p className="mb-10 text-lg leading-relaxed text-gray-700">
                {data.desc}
              </p>
            )}
            <div
              className="prose post-body prose-lg prose-emerald max-w-none break-words
                [--tw-prose-bullets:var(--color-emerald-500)] [--tw-prose-counters:var(--color-emerald-600)]
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-900
                prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-6
                prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-8
                prose-a:font-medium prose-a:text-[#25D366] prose-a:no-underline
                [&_u:has(a)]:no-underline
                hover:prose-a:text-emerald-700
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-[#25D366] prose-blockquote:bg-emerald-50/60
                prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:py-1 prose-blockquote:px-5
                prose-blockquote:font-normal prose-blockquote:text-gray-600
                prose-ul:my-6 prose-ul:px-4 prose-ol:my-6 prose-ol:px-4 prose-li:my-1.5 [&_ul]:!ps-10 [&_ol]:!ps-10 [&_ul]:!ms-2 [&_ol]:!ms-2 prose-li:pl-1
                prose-hr:my-12 prose-hr:border-gray-100
                prose-code:rounded-md prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5
                prose-code:font-medium prose-code:text-[#25D366]
                prose-code:before:content-none prose-code:after:content-none
                prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-sm
                [&_p:has(img)]:inline-block [&_p:has(img)]:align-top [&_p:has(img)]:my-2
                [&_p:has(img)]:w-full md:[&_p:has(img)]:w-[calc(50%-0.5rem)] md:[&_p:has(img)]:px-1 
                [&_img]:!my-0 [&_img]:w-full [&_img]:h-56 md:[&_img]:h-72
                [&_img]:object-cover [&_img]:shadow-sm"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-14">
        <h2 className="subtitle text-center">Articulos relacionados</h2>
        <LatestPosts limit={6} />
      </div>
      <FaqSeo sections={FAQ_SECTIONS} />
    </article>
  );
};

export default SinglePostPage;
