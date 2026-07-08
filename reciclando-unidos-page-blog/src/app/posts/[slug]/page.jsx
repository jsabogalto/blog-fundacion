import LinkComponent from "@/components/LinkComponent";
import { notFound } from "next/navigation";
import SectionImageComponent from "@/components/SectionImageComponent";
import TableOfContents from "@/components/TableOfContents";

const API = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

async function getPost(slug) {
  try {
    const res = await fetch(`${API}/posts/${slug}`, { next: { revalidate: 60 } });
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

const decodeEntities = (str) =>
  str
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&aacute;/gi, "á").replace(/&eacute;/gi, "é")
    .replace(/&iacute;/gi, "í").replace(/&oacute;/gi, "ó")
    .replace(/&uacute;/gi, "ú").replace(/&ntilde;/gi, "ñ")
    // entidades numéricas genéricas (&#160; etc.)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));

const slugify = (str) =>
  decodeEntities(str)                     // 👈 primero decodifica el &nbsp;
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")      // quita acentos
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");                // ahora sí, espacios reales → guiones

function processContent(html) {
  if (!html) return { html: "", toc: [] };

  const toc = [];
  const usedIds = new Set();

  // 1. Inyecta ids en los h2 y construye el toc (igual que antes)
  let processed = html.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gis,
    (match, attrs, inner) => {
      const text = decodeEntities(inner.replace(/<[^>]*>/g, "")).trim();
      if (!text) return match;

      const base = slugify(text);
      let unique = base;
      let n = 2;
      while (usedIds.has(unique)) unique = `${base}-${n++}`;
      usedIds.add(unique);

      toc.push({ id: unique, text });

      if (/\bid=/.test(attrs)) return match;
      return `<h2${attrs} id="${unique}">${inner}</h2>`;
    }
  );

  // 2. Decodifica el &nbsp; en TODO el HTML (solo esta entidad,
  //    porque &amp; &lt; &gt; deben quedar escapadas para render correcto)
  processed = processed.replace(/&nbsp;/gi, " ");

  return { html: processed, toc };
}
// ───────────── SEO ─────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) return { title: "Publicación no encontrada" };

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
      locale: "es_CO",
      siteName: "Fundación Reciclando Unidos",
      images: data.img
        ? [{ url: data.img, width: 1200, height: 630, alt: data.title }]
        : [],
      publishedTime: data.createdAt,
      modifiedTime: data.updatedAt || data.createdAt,
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

// ───────────── Página ─────────────
const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data) notFound();

  // Procesa el HTML: inyecta ids en los h2 y construye el índice
  const { html: contentHtml, toc } = processContent(data.content);

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.fundacionreciclandounidos.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.desc || undefined,
    image: data.img ? [data.img] : undefined,
    datePublished: data.createdAt,
    dateModified: data.updatedAt || data.createdAt,
    // 👇 corregido: @type debe ser un tipo de Schema.org (Organization/Person),
    // no el nombre. Antes decía { "@type": "Fundación Reciclando Unidos" },
    // lo cual es JSON-LD inválido y Google lo ignora silenciosamente.
    author: {
      "@type": "Organization",
      name: "Fundación Reciclando Unidos",
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

  const publishedLabel = formatDate(data.createdAt);

  return (
    <article className="flex flex-col overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────── HERO full-bleed ───────────── */}
      <header className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        {data.img && (
          <SectionImageComponent
            src={data.img}
            w={3024}
            h={4032}
            alt={data.title}
            title={data.title}
          />
        )}
      </header>

      {/* ───────────── CONTENIDO: 3 columnas ───────────── */}
      <div className="mx-auto w-full max-w-layer px-5 py-8 md:px-12 md:py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
          {/* IZQUIERDA: índice sticky con scroll-spy */}
          <aside className="hidden lg:block lg:w-56 lg:shrink-0">
            <div className="sticky top-28">
              <TableOfContents items={toc} />
            </div>
          </aside>

          {/* CENTRO: artículo */}
          <div className="order-1 min-w-0 flex-1">
            {/* Meta: fecha + línea acento, estilo Aramco */}
            {publishedLabel && (
              <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                <span className="h-px w-8 bg-gradient-to-r from-[#139fa7] to-[#6dd063]" />
                <time dateTime={data.createdAt}>{publishedLabel}</time>
              </div>
            )}

            {data.desc && (
              <p className="paragraph font-light">
                {data.desc}
              </p>
            )}

            <div
              className="prose post-body prose-lg mt-8 max-w-none break-words
                [--tw-prose-bullets:var(--color-emerald-500)] [--tw-prose-counters:var(--color-emerald-600)]

                prose-headings:tracking-tight

                prose-h1:text-[#053215] prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:font-medium prose-h1:leading-tight prose-h1:mb-6

                prose-h2:scroll-mt-28 prose-h2:text-2xl md:prose-h2:text-4xl
                prose-h2:font-medium prose-h2:leading-tight prose-h2:tracking-tight prose-h2:mt-14 prose-h2:mb-5
                prose-h2:bg-gradient-to-r prose-h2:from-[#139fa7] prose-h2:to-[#6dd063]
                prose-h2:bg-clip-text prose-h2:text-transparent

                prose-h3:scroll-mt-28 prose-h3:text-[#053215] prose-h3:text-xl md:prose-h3:text-2xl
                prose-h3:font-medium prose-h3:mt-10 prose-h3:mb-3

                [&_p]:!text-sm md:[&_p]:!text-xl [&_p]:tracking-tight [&_p]:font-light

                prose-a:bg-gradient-to-r prose-h2:from-[#139fa7] prose-h2:to-[#6dd063]
                prose-a:bg-clip-text prose-h2:text-transparent
                [&_u:has(a)]:no-underline
                prose-strong:text-gray-900 prose-strong:font-semibold

                prose-blockquote:border-l-4 prose-blockquote:border-[#25D366] prose-blockquote:bg-emerald-50/60
                prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:py-1 prose-blockquote:px-5
                prose-blockquote:font-normal prose-blockquote:text-gray-600

                prose-ul:my-6 prose-ol:my-6 prose-li:my-1.5 prose-li:pl-1
                [&_ul]:!ps-10 [&_ol]:!ps-10 [&_ul]:!ms-2 [&_ol]:!ms-2
                [&_li]:!text-sm md:[&_li]:!text-xl [&_li]:tracking-tight [&_li]:text-gray-600 [&_li]:font-light

                prose-hr:my-12 prose-hr:border-gray-100

                prose-code:rounded-md prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5
                prose-code:font-medium prose-code:text-[#25D366]
                prose-code:before:content-none prose-code:after:content-none
                prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-sm

                [&_p:has(img)]:my-10 [&_p:has(img)]:w-full
                [&_img]:!my-0 [&_img]:w-full [&_img]:h-56 md:[&_img]:h-100 [&_img]:rounded-2xl
                [&_img]:object-cover [&_img]:shadow-sm"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* CTA final, estilo Aramco: línea acento + texto + link con flecha */}
            <div className="mt-16 border-t border-gray-100 pt-10">
              <span className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                <span className="h-px w-8 bg-gradient-to-r from-[#139fa7] to-[#6dd063]" />
                ¿Tienes computadores en desuso?
              </span>
              <p className="paragraph mb-5 max-w-[55ch] font-light text-gray-600">
                Recogemos tus equipos gratis en Bogotá y Cundinamarca y te damos tu certificado de donación.
              </p>
              <LinkComponent
                link={"/"}
                text={"Agendar recolección gratuita"}
                className="text-[#25D366]"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePostPage;