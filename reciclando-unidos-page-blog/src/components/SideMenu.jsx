import SearchComponent from "./SearchComponent";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const CATEGORIES = [
  { label: "Cursos", slug: "cursos" },
  { label: "Desarrollo", slug: "development" },
  { label: "Bases de datos", slug: "databases" },
  { label: "SEO", slug: "seo" },
  { label: "Marketing", slug: "marketing" },
];

const SideMenu = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", e.target.value);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="sticky top-24 h-max">
      <h3 className="mb-4 text-sm font-medium text-neutral-900">Buscar</h3>
      <SearchComponent />

      <h3 className="mb-4 mt-8 text-sm font-medium text-neutral-900">Ordenar</h3>
      <div className="flex flex-col gap-2 text-sm">
        {[
          { value: "newest", label: "Nuevas publicaciones" },
          { value: "oldest", label: "Antiguas publicaciones" },
        ].map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="sort"
              value={opt.value}
              checked={searchParams.get("sort") === opt.value}
              onChange={handleFilterChange}
              className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-emerald-600 bg-white checked:bg-emerald-800"
            />
            {opt.label}
          </label>
        ))}
      </div>

      <h3 className="mb-4 mt-8 text-sm font-medium text-neutral-900">Categorías</h3>
      <div className="flex flex-col gap-2 text-sm">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/posts?cat=${cat.slug}`}
            className="text-neutral-700 underline-offset-2 hover:text-emerald-700 hover:underline"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;