"use client";

import { Image } from "@imagekit/react";

/**
 * ImageComponent
 * ------------------------------------------------------------------
 * Wrapper sobre <Image> de @imagekit/react.
 *
 * Clave para que se vea bien en celular Y en PC: el prop `sizes`.
 * Sin `sizes`, el navegador no sabe qué tan ancho se va a mostrar
 * realmente la imagen en cada pantalla, y aunque la librería genera
 * un `srcSet` responsive automáticamente (esto ya viene activado por
 * defecto), puede terminar eligiendo una versión más pesada de la
 * necesaria en móvil o una de menor resolución en desktop.
 *
 * `sizes` le dice al navegador, por breakpoint, qué porcentaje del
 * viewport ocupa la imagen -> así elige el candidato correcto del
 * srcSet generado automáticamente.
 *
 * Puedes pasar un `sizes` distinto por componente si sabes exactamente
 * cuánto ocupa ahí (por ejemplo, en una card de 1/4 de ancho en desktop
 * conviene pasar algo como "(max-width: 768px) 100vw, 25vw").
 */
const ImageComponent = ({
  src,
  width,
  height,
  className,
  alt = "",
  priority,
  // Valor por defecto razonable para la mayoría de usos del sitio:
  // pantalla completa en móvil, mitad en tablet, un tercio en desktop.
  // Sobrescríbelo si el contexto exacto de la imagen es distinto.
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  responsive = true,
}) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      responsive={responsive}
      className={className}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      lqip={{ active: true, quality: 20 }}
      transformation={[{ width, height }]}
    />
  );
};

export default ImageComponent;