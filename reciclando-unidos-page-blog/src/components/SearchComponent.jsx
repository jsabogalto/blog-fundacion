"use client";

import { Search } from "@deemlol/next-icons";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchComponent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    const query = e.target.value.trim();

    // Conservamos los params actuales (p. ej. ?cat=...) y solo tocamos "search".
    const params = new URLSearchParams(searchParams.toString());

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search"); // input vacío → quitamos el filtro
    }

    router.push(`/posts?${params.toString()}`);
  };

  return (
    <div className="bg-white/20 px-4 shadow-lg shadow-black/5 ring-1 ring-gray-200 backdrop-blur-xl backdrop-saturate-150 flex items-center p-2 rounded-lg gap-2">
      <Search size={20} color="#b6b6b6" strokeWidth={2} />
      <input
        type="text"
        placeholder="buscar..."
        onKeyDown={handleKeyPress}
        defaultValue={searchParams.get("search") ?? ""}
        className="text-md"
      />
    </div>
  );
};

export default SearchComponent;