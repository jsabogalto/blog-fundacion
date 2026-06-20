// Sin "use client": es solo presentación, funciona como Server Component.
import ImageComponent from "./ImageComponent";

const ACCENT = {
  link: "text-emerald-700 hover:text-emerald-800",
};

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

const PostListItem = ({ post }) => {
  if (!post || !post.slug) return null; // 👈 sin slug, no renderizamos (evita href="#")

  const { title, slug, img, desc, category, createdAt } = post;
  const href = `/posts/${slug}`;

  return (
    <article className="group flex flex-col">
      <a href={href} className="relative block aspect-[420/260] w-full overflow-hidden">
        {img && (
          <ImageComponent
            src={img}
            alt={title ? `${title} - Reciclando Unidos` : "Publicación de Reciclando Unidos"}
            width={600}
            height={372}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {category && (
          <span className="absolute left-4 top-4 z-10 rounded border border-white/70 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {category}
          </span>
        )}
      </a>

      <div className="px-8 mt-4">
        <h2 className="mt-4 text-2xl font-semibold leading-snug text-gray-900">
          <a href={href} className="line-clamp-3 hover:underline">
            {title}
          </a>
        </h2>

        <div className="mt-2 text-sm text-gray-500">
          {createdAt && <time dateTime={createdAt}>{formatDate(createdAt)}</time>}
        </div>

        {desc && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{desc}</p>
        )}

        <a href={href} className={`mt-4 inline-block text-sm font-semibold ${ACCENT.link}`}>
          Leer más &gt;
        </a>
      </div>
    </article>
  );
};

export default PostListItem;