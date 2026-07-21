// Sin "use client": es solo presentación, funciona como Server Component.
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";

/**
 * PostListItem
 * variant="featured": tarjeta grande (columna destacada del bloque FIFA),
 *   con alto fijo en desktop (lg:h-[560px]), imagen + eyebrow + título.
 * variant="list": fila horizontal (thumbnail lateral + eyebrow + título),
 *   para la columna derecha del bloque "Historias destacadas" estilo FIFA.
 * variant="compact" (por defecto): tarjeta pequeña, imagen + título + "Leer más".
 */
const PostListItem = ({ post, variant = "compact" }) => {
  if (!post || !post.slug) return null; // sin slug, no renderizamos (evita href="#")

  const { title, slug, img, category } = post;
  const href = `/posts/${slug}`;
  const isFeatured = variant === "featured";
  const isList = variant === "list";

  // ===== Variante LIST: fila horizontal estilo FIFA =====
  if (isList) {
    return (
      <article className="group">
        <a
          href={href}
          className="grid grid-cols-[104px_1fr] items-center gap-4 sm:grid-cols-[128px_1fr]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
            {img && (
              <ImageComponent
                src={img}
                alt={title ? `${title} - Fundación Reciclando Unidos` : "Publicación de Reciclando Unidos"}
                width={256}
                height={192}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>

          <div>
            {category && (
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-green-ru">
                {category}
              </span>
            )}
            <h3 className="line-clamp-2 text-sm font-medium leading-snug text-stone-800 transition-colors group-hover:text-green-ru sm:text-base">
              {title}
            </h3>
          </div>
        </a>
      </article>
    );
  }

  // ===== Variantes FEATURED y COMPACT (tu markup original) =====
  return (
    <article className={`group flex flex-col ${isFeatured ? "h-full" : ""}`}>
      <a
        href={href}
        className={`relative block w-full overflow-hidden ${
          isFeatured
            ? "aspect-[3/4] lg:aspect-auto lg:h-[560px]"
            : "aspect-[420/260]"
        }`}
      >
        {img && (
          <ImageComponent
            src={img}
            alt={title ? `${title} - Reciclando Unidos` : "Publicación de Reciclando Unidos"}
            width={isFeatured ? 800 : 600}
            height={isFeatured ? 1000 : 372}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {category && (
          <span className="absolute left-4 top-4 z-10 rounded border border-white/70 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {category}
          </span>
        )}
      </a>

      <div className="mt-4">
        <h2 className={isFeatured ? "title-posts-item text-xl md:text-2xl" : "title-posts-item"}>
          <a href={href} className="line-clamp-3 hover:underline">
            {title}
          </a>
        </h2>

        {!isFeatured && (
          <div className="pt-3">
            <LinkComponent link={href} text="Leer más" className="text-green-ru" />
          </div>
        )}
      </div>
    </article>
  );
};

export default PostListItem;