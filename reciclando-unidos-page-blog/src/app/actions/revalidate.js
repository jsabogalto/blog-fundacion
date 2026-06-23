"use server";
import { revalidatePath } from "next/cache";

export async function revalidatePosts() {
  revalidatePath("/");                    // home
  revalidatePath("/donar-computadores");  // y cualquier página que use tu componente
  revalidatePath("/posts");               // el listado de posts
  revalidatePath("/sitemap.xml");  
   revalidatePath("/sitemap.js");  
  revalidatePath("/donaciones-que-recibimos");
  revalidatePath("/centro-educativo");  
  revalidatePath("/renovacion-equipos");       // ¡también refresca el sitemap!
}