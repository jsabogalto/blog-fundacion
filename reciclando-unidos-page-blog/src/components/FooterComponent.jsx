"use client";
import ImageComponent from './ImageComponent';
import { Linkedin } from '@thesvg/react';
import { Facebook } from '@thesvg/react';
import { Instagram } from '@thesvg/react';
import { Tiktok } from '@thesvg/react';
import { Show, UserButton, useAuth } from "@clerk/nextjs";
import { span } from 'motion/react-client';


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
            { label: "Dona tu computador", href: "/donar-computadores" },
        ],
    },
    {
        title: "Educación",
        links: [{ label: "Cursos", href: "/renovacion-equipos" }],
    },
];

const socials = [
    { icon: <Linkedin className="h-8 w-8" />, href: "https://www.linkedin.com/company/fundaci%C3%B3n-reciclando-unidos/", label: "LinkedIn" },
    { icon: <Instagram className="h-8 w-8" />, href: "https://www.instagram.com/fundacionreciclandounidos/", label: "Instagram" },
    { icon: <Tiktok className="h-8 w-8 fill-black text-black" />, href: "https://www.tiktok.com/@reciclandounidos?is_from_webapp=1&sender_device=pc", label: "Tiktok" }
]


export default function FooterComponent() {
    return (
        <footer id="contacto" className="w-full bg-white border-t border-gray-200">
            <div className="mx-auto px-8 py-14 md:py-20 max-w-[1400px] lg:gap-12 md:px-12">
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
                        <p className="mt-6 text-sm md:text-base text-gray-600">
                            NIT: 901930206-9
                        </p>
                        <div className="mt-6 flex items-center gap-5">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="text-gray-800"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columnas de enlaces */}
                    {linkColumns.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                {col.title}
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm md:text-base text-text-primary"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-14 pt-8 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600">
                        © 2026 Fundacion Reciclando Unidos, Todos los derechos reservados.
                    </p>
                    <div className="mt-12 flex flex-col items-center gap-6 px-5">
                        <Show when="signed-out">
                            {/* Log in con circulito de flecha ↗ (como la referencia) */}
                            <a
                                href="/sign-in"
                                className="flex items-center gap-3 text-base font-medium text-slate-900"
                            >
                                Log in
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