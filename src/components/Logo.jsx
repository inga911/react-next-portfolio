"use client";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl">
        I.<span className="text-pink-700">B.</span>
      </h1>
    </Link>
  );
}

export default Logo;
