"use client";
import ImageComponent from './ImageComponent';
import { Linkedin } from '@thesvg/react';
import { ArrowUpRight } from 'lucide-react';
import { Show, UserButton, useAuth } from "@clerk/nextjs";


const linkColumns = [
    {
        title: "Links",
        links: [
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/posts" },
            { label: "Elegibilidad", href: "/solicitud-computadores" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { label: "Contacto y dirección", href: "/contacto" },
            { label: "Teléfono: 313 541 0348", href: "tel:+573135410348" },
            { label: "Correo: ambiental@fundacionreciclandounidos.com", href: "mailto:ambiental@fundacionreciclandounidos.com" },
        ],
    },
    {
        title: "Educación",
        links: [{ label: "Cursos", href: "/nuevas-iniciativas" }],
    },
];

const socials = [
    { icon:  <Linkedin className="h-4 w-4 [&_path]:fill-current" />, href: "https://www.linkedin.com/company/fundaci%C3%B3n-reciclando-unidos/", label: "LinkedIn" },
]


export default function FooterComponent() {
    return (
        <footer id="contacto" className="relative w-full bg-gray-100 border-t border-gray-200">
            {/* Filete acento degradado, mismo lenguaje visual del resto del sitio */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-ru " />

            <div className="mx-auto px-5 py-14 md:py-20 max-w-layer lg:gap-12 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 ">
                    {/* Marca */}
                    <div className="max-w-md">
                        <ImageComponent
                            src={"/footer_image_profile.png.png"}
                            width={50}
                            height={50}
                            className="h-8 w-8 object-contain"
                            alt="logo reciclando unidos"
                        />
                        <h2 className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
                            Somos una fundación sin ánimo de lucro dedicada a reparar, reacondicionar y donar tecnología a las comunidades con menos oportunidades.
                            <br />
                            Recibimos todo el material electronico, nos encargamos de la disposicion final y aprovechamiento tecnologico.
                        </h2>
                        <p className="mt-6 text-xs uppercase tracking-[0.12em] text-gray-500">
                            NIT: 901930206-9
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors duration-300 hover:border-pine hover:bg-pine hover:text-white"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columnas de enlaces */}
                    {linkColumns.map((col) => (
                        <div key={col.title}>
                            <span className="mb-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                                <span className="h-px w-6 bg-gradient-ru" />
                                {col.title}
                            </span>
                            <ul className="mt-1 space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-200 hover:text-pine md:text-base"
                                        >
                                            {link.label}
                                            <span className="h-px w-0 bg-pine transition-all duration-300 group-hover:w-3" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-14 pt-8 border-t border-gray-200">
                    <p className="text-center text-xs uppercase tracking-[0.12em] text-gray-500">
                        © 2026 Fundación Reciclando Unidos, todos los derechos reservados.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-6 px-5">
                        <Show when="signed-out">
                            {/* Log in con círculo de flecha ↗, estilo Aramco */}
                            <a
                                href="/sign-in"
                                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-slate-900 transition-colors duration-300 hover:text-pine"
                            >
                                Log in
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-900 transition-all duration-300 group-hover:border-pine group-hover:bg-pine group-hover:text-white">
                                    <ArrowUpRight size={16} />
                                </span>
                            </a>
                        </Show>

                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                    </div>
                </div>
            </div>
        </footer>
    );
}