"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/app/plugins/navigationPathLinks";
import Logo from "./Logo";

function MobileNav() {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-pink-700" />
      </SheetTrigger>
      <SheetContent className="">
        <div className="text-center mt-32 mb-40">
          <Logo />
          <div className="flex flex-col justify-center items-center gap-8 mt-20">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  link.path === pathName &&
                  "text-pink-700 border-b-2 border-pink-700"
                } text-xl capitalize hover:text-pink-700 transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
