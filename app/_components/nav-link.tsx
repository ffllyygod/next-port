// app/_components/nav-link.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalize(path: string) {
  // remove trailing slash except root
  return path !== "/" && path.endsWith("/")
    ? path.slice(0, -1)
    : path;
}

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = normalize(usePathname());
  const target = normalize(href);

  const isActive =
    pathname === target ||
    (target !== "/" && pathname.startsWith(target + "/"));

  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105
        ${
          isActive
            ? "text-white border-b border-purple-400"
            : "text-gray-300 hover:text-white"
        }`}
    >
      {children}
    </Link>
  );
}
