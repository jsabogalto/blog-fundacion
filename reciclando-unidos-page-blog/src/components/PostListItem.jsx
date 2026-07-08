// Sin "use client": es solo presentación, funciona como Server Component.
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";

/**
 * PostListItem
 * variant="featured": tarjeta grande (columna izquierda/derecha del bloque),
 *   ocupa toda la altura de su celda de grid, solo imagen + título (sin "Leer más"),
 *   igual al post grande de la sección "Explore the latest from Elements magazine" de Aramco.
 * variant="compact" (por defecto): tarjeta pequeña, imagen + título + "Leer más".
 */
const PostListItem = ({ post, variant = "compact" }) => {
  if (!post || !post.slug) return null; // 👈 sin slug, no renderizamos (evita href="#")

  const { title, slug, img, category } = post;
  const href = `/posts/${slug}`;
  const isFeatured = variant === "featured";

  return (
    <article className={`group flex flex-col ${isFeatured ? "h-full" : ""}`}>
      <a
        href={href}
        className={`relative block w-full overflow-hidden rounded-2xl ${
          isFeatured ? "flex-1 min-h-[280px]" : "aspect-[420/260]"
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