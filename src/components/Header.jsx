"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-5 xl:py-8 bg-zinc-900 text-white z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden xl:flex items-center gap-5">
          <Nav />
          <Link href={"/contact"}>
            <Button className="">Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
