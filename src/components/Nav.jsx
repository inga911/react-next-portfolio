"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/app/plugins/navigationPathLinks";

function Nav() {
  const pathName = usePathname();

  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName && "text-pink-700 border-b-2 border-pink-700"
          } capitalize hover:text-pink-700 transition-all`}
        >
          {link.path !== "/contact" && link.name}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
