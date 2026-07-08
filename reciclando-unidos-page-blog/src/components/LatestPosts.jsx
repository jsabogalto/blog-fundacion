import axios from "axios";
import { ArrowRight } from "lucide-react";
import PostListItem from "./PostListItem";
import SpanTextComponent from "./SpanTextComponent";

const API = process.env.NEXT_PUBLIC_API_URL;

async function getLatestPosts(limit, cat) {
  try {
    const res = await axios.get(`${API}/posts`, {
      params: {
        page: 1,
        limit,
        ...(cat ? { cat } : {}),
      },
    });
    return res.data?.posts ?? [];
  } catch {
    return [];
  }
}

// Agrupa el arreglo de posts en grupos de `size` (por defecto 3:
// 1 destacado + 2 compactos, igual que el bloque de Aramco).
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function LatestPosts({
  limit = 9,
  cat,
  title,
  desc,
  link,
  linkText = "Ver todo",
  bgClassName,
  spanTitle,
  spanTextColor
}) {
  const posts = (await getLatestPosts(limit, cat)).slice(0, limit);

  if (posts.length === 0) return null;

  const groups = chunk(posts, 3);

  return (
    <section className={`w-full ${bgClassName || ""}`}>
      <div className="max-w-layer px-5 sections-py md:px-12 mx-auto">
        <SpanTextComponent title={spanTitle} textColor={spanTextColor}/>
        {/* ===== Encabezado: título + CTA a la derecha, estilo Aramco ===== */}
        {title && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="subtitle max-w-xl">{title}</h2>
              {desc && <p className="mt-3 max-w-[60ch] paragraph">{desc}</p>}
            </div>

            {link && (
              <a
                href={link}
                className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-green-ru"
              >
                <span className="text-xs uppercase tracking-[0.12em] sm:text-sm">
                  {linkText}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-green-ru/40 transition duration-300 group-hover:bg-green-ru group-hover:text-white">
                  <ArrowRight size={16} />
                </span>
              </a>
            )}
          </div>
        )}

        {/* ===== Grupos de posts: 1 destacado + 2 compactos, alternando lado ===== */}
        <div className="mt-10 flex flex-col gap-12 md:gap-16">
          {groups.map((group, gi) => {
            const reverse = gi % 2 === 1; // alterna: par = destacado a la izq., impar = a la der.
            const [featured, ...rest] = group;

            // Grupo incompleto (sobran 1 o 2 posts al final): grilla simple, sin destacado.
            if (group.length < 3) {
              return (
                <div
                  key={gi}
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {group.map((post) => (
                    <PostListItem key={post._id} post={post} variant="compact" />
                  ))}
                </div>
              );
            }

            return (
              <div key={gi}>
                {/* Móvil: apilado simple, todos con el mismo tamaño */}
                <div className="flex flex-col gap-10 md:hidden">
                  {group.map((post) => (
                    <PostListItem key={post._id} post={post} variant="compact" />
                  ))}
                </div>

                {/* Desktop: destacada grande + 2 compactas, alternando de lado */}
                <div
                  className="hidden md:grid md:grid-cols-2 md:gap-8"
                  style={{
                    gridTemplateAreas: reverse
                      ? `"small1 feature" "small2 feature"`
                      : `"feature small1" "feature small2"`,
                  }}
                >
                  <div style={{ gridArea: "feature" }} className="h-full">
                    <PostListItem post={featured} variant="featured" />
                  </div>
                  <div style={{ gridArea: "small1" }}>
                    <PostListItem post={rest[0]} variant="compact" />
                  </div>
                  <div style={{ gridArea: "small2" }}>
                    <PostListItem post={rest[1]} variant="compact" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;