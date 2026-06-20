import { Award } from "@deemlol/next-icons";
import { Delete } from "@deemlol/next-icons";

const PostMenuActions = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Acciones</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <Award size={24} color="oklch(12.9% 0.042 264.695)" strokeWidth={1.5} />
        <span>Guardar</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <Delete size={24} color="oklch(12.9% 0.042 264.695)" strokeWidth={1.5} />
        <span>Eliminar</span>
      </div>
      
    </div>

  )
}

export default PostMenuActions