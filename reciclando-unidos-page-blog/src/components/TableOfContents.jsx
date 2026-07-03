"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="flex flex-col gap-1">
      <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
        En esta página
      </span>
      {items.map(({ id, text }) => (
        <Link
          key={id}
          href={`#${id}`}
          className={`border-l-2 py-1.5 pl-3 text-sm transition ${
            activeId === id
              ? "border-green-ru font-medium text-pine"
              : "border-transparent text-muted hover:text-pine"
          }`}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}