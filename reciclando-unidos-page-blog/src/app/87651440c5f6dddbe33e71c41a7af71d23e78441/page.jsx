"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/nextjs";
import { toast } from 'react-toastify';
import axios from "axios";
import Upload from "@/components/Upload";
import SectionImageComponent from "@/components/SectionImageComponent";
import { revalidatePosts } from "@/app/actions/revalidate";


const QuillEditor = dynamic(() => import("../../components/QuillEditor"), {
  ssr: false,
  loading: () => <p className="flex-1 rounded-xl bg-gray-200 shadow-md p-4">Cargando editor...</p>
});

const API = process.env.NEXT_PUBLIC_API_URL;

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const { getToken } = useAuth();
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      const res = await axios.post(`${API}/posts`, newPost, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    },
    onSuccess: async (data) => {
      toast.success("Publicación creada exitosamente.");
      await revalidatePosts();              // ← refresca home, donar-computadores, sitemap...
      router.push(`/posts/${data.slug}`);   // y recién ahí navegas
    },
    onError: (error) => {
      toast.error(error.response?.data || error.message);
    }
  });

  if (!isLoaded) return <div>Cargando...</div>;
  if (isLoaded && !isSignedIn) {
    return <div>Solo usuarios Administradores pueden crear publicaciones.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación — imagen obligatoria
    if (!cover) {
      toast.warn("Debes agregar una imagen de portada antes de publicar.");
      return;
    }

    //Validación — esperar a que termine de subir
    if (progress > 0 && progress < 100) {
      toast.warn("Espera a que termine de subir la imagen.");
      return;
    }

    const formData = new FormData(e.target);
    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      desc: formData.get("desc"),
      category: formData.get("category"),
      content: value,
    };
    mutation.mutate(data);
  };

  //Lógica centralizada del estado del botón
  const isUploading = progress > 0 && progress < 100;
  const isDisabled = mutation.isPending || isUploading || !cover;

  //Texto del botón según el estado
  const buttonText = () => {
    if (isUploading) return `subiendo imagen... ${progress}%`;
    if (mutation.isPending) return "publicando...";
    
    return "publicar";
  };

  return (
    <div>
      <SectionImageComponent src={"/holasoyportada.webp"} w={3024} h={3057} alt={"prueba"} title={"Escribir publicacion"} subtitle={"Escribir buen contenido para generar mas vistas a la pagina de la Fundacion."} className={"object-[center_40%] md:object-[center_30%]"} />
      <div className="mx-auto w-full max-w-[1400px] gap-14 px-10">
        {/* min-h en lugar de h: el contenedor llena la pantalla pero puede crecer
            y deja que la página haga scroll vertical cuando el contenido se acumula */}
        <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col gap-6 mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">

            {/* area de portada con feedback visual */}
            <div className="flex flex-col gap-2">
              <Upload type="image" setProgress={setProgress} setData={setCover}>
                <button
                  type="button"
                  className={`w-max p-2 shadow-md rounded-xl text-sm bg-white
                ${cover ? "text-emerald-600 border border-emerald-400" : "text-gray-500"}
              `}
                >
                  {cover ? "✓ Imagen de portada cargada" : "Agregar imagen de portada *"}
                </button>
              </Upload>

              {/*Barra de progreso visible mientras sube */}
              {isUploading && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              {/*Preview de la imagen de portada */}
              {cover && (
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}${cover.filePath}`}
                  alt="Portada"
                  className="w-48 h-28 object-cover rounded-xl"
                />
              )}
            </div>

            <input
              type="text"
              placeholder="Titulo."
              className="text-4xl font-semibold bg-transparent outline-none"
              name="title"
            />
            <div className="flex items-center gap-4">
              <label className="text-sm">Categoria:</label>
              <select name="category" className="p-2 rounded-xl bg-gray-200">
                <option value="general">General</option>
                <option value="proyectos">Proyectos</option>
                <option value="cursos">Cursos</option>
                <option value="reciclaje-electronico">Reciclaje Electronico</option>
                <option value="donar-computadores">Donar computadores</option>
                <option value="educacion">Educacion</option>
              </select>
            </div>
            <textarea
              name="desc"
              placeholder="Una corta descripcion"
              className="p-4 rounded-xl bg-gray-200 shadow-md"
            />
            <div className="flex flex-1 min-h-[300px]">
              <div className="flex flex-col gap-2 mr-2">
                <Upload type="image" setProgress={setProgress} setData={setImg}>
                  🌆
                </Upload>
              </div>
              <QuillEditor value={value} onChange={setValue} />
            </div>

            <button
              disabled={isDisabled}
              className="bg-emerald-600 text-white px-4 py-2 w-36 rounded-full font-medium mt-4 p-2 
                     disabled:bg-emerald-200 disabled:cursor-not-allowed
                     transition-colors duration-200"
            >
              {buttonText()}
            </button>

          </form>
        </div>
      </div>

    </div>

  );
};

export default Write;
