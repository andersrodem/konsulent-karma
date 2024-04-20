"use client";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
  return (
    <div className="py-5 px-2 md:pr-10 md:px-5 items-center flex flex-wrap justify-between space-x-4">
      <Link href="/">
        <h3 className="pl-2 scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight">
          konsulentkarma.no
        </h3>
      </Link>
      <Button asChild variant={"outline"}>
        <Link href="/nylig-arbeidsledig">
          Nylig arbeidsledig? 
        </Link>
      </Button>{" "}
    </div>
  );
}
