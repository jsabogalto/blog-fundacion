import axios from "axios";
import { ArrowRight } from "lucide-react";
import PostListItem from "./PostListItem";
import SpanTextComponent from "./SpanTextComponent";

const API = process.env.NEXT_PUBLIC_API_URL;

async function getLatestPosts(limit, cat) {
  try {
    const res = await axios.get(`${API}/posts`, {
      params: { page: 1, limit, ...(cat ? { cat } : {}) },
    });
    return res.data?.posts ?? [];
  } catch {
    return [];
  }
}

/**
 * LatestPosts — bloque "Historias destacadas" estilo FIFA:
 * - 1 post DESTACADO grande a la izquierda (alto fijo en desktop + sticky)
 * - El RESTO en lista vertical a la derecha (thumbnail lateral + eyebrow + título),
 *   separados por hairlines
 * - Móvil: destacado arriba full-width, lista debajo apilada
 */
async function LatestPosts({
  limit = 6,
  cat,
  title,
  desc,
  link,
  linkText = "Ver todo",
  bgClassName,
  spanTitle,
  spanTextColor,
}) {
  const posts = (await getLatestPosts(limit, cat)).slice(0, limit);
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className={`w-full ${bgClassName || ""}`}>
      <div className="max-w-layer mx-auto px-5 py-8 md:px-12">

        {/* ===== Encabezado: título + CTA a la derecha ===== */}
        {(title || link) && (
          <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              {title && <h2 className="subtitle max-w-xl">{title}</h2>}
              {desc && <p className="mt-3 max-w-[60ch] paragraph">{desc}</p>}
            </div>
          </div>
        )}

        {/* ===== Cuerpo: destacado (izq, sticky) + lista (der) ===== */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Destacado: sticky en desktop.
              self-start es necesario para que el sticky funcione (evita stretch). */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <PostListItem post={featured} variant="featured" />
          </div>

          {/* Lista de compactos con hairlines entre ítems */}
          {rest.length > 0 && (
            <ul className="flex flex-col divide-y divide-stone-200">
              {rest.map((post) => (
                <li key={post._id} className="py-4 first:pt-0 last:pb-0">
                  <PostListItem post={post} variant="list" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;