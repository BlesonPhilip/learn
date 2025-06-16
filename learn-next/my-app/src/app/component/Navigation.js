"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="mt-4 space-x-4">
      <Link
        href="/"
        className={`px-3 py-2 rounded ${
          pathname == "/" ? "bg-green-500 text-white" : "text-blue-500"
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`px-3 py-2 rounded ${
          pathname == "/about" ? "bg-green-500 text-white" : "text-blue-500"
        }`}
      >
        About
      </Link>
      <Link
        href="/dashboard/setting"
        className={`px-3 py-2 rounded ${
          pathname == "/dashboard/setting"
            ? "bg-green-500 text-white"
            : "text-blue-500"
        }`}
      >
        Dashboard
      </Link>
    </nav>
  );
}
