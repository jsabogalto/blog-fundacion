import { Search } from "@deemlol/next-icons";
import { useSearchParams, useRouter, usePathname } from "next/navigation";


const SearchComponent = () => {

  const searchParams = useSearchParams();
  const location = usePathname()
  const navigate = useRouter()

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      
      if (location.pathname === "/posts") {
        searchParams({ ...Object.fromEntries(searchParams), search: query});
      } else {
        navigate.push(`/posts?search=${query}`);
      }
    }
  }
  return (
    <div className="bg-white/20 px-4 shadow-lg shadow-black/5 ring-1 ring-gray-200 backdrop-blur-xl backdrop-saturate-150 flex items-center p-2 rounded-lg gap-2" >
        <Search size={20} color="#b6b6b6" strokeWidth={2} />
        <input 
          type="text" 
          placeholder="buscar..."
          onKeyDown={handleKeyPress}  
          className="text-md"
        />
    </div>
  )
}


export default SearchComponent