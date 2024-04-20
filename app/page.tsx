"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import konsulenthus from "@/data/konsulenthus.json";
import { konsulenthusType } from "@/types/types";
import KonsulenthusCard from "@/components/ui/KonsulenthusCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import DialogPopover from "@/components/ui/DialogPopover";
import TipsUs from "@/components/ui/TipsUs";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKonsulenthus = konsulenthus.filter((item: konsulenthusType) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="px-5">
      <div className="py-5 md:pr-10 md:px-5 flex justify-between space-x-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          KonsulentKarma
        </h3>
        <TipsUs />
      </div>
      <div className="flex flex-col mx-auto max-w-[90%] md:max-w-[50%] md:text-center md:pt-48 pt-12 ">
        {" "}
        <div className="pb-3">
          <Badge variant="outline">Svartelisten for konsulentselskaper</Badge>
        </div>
        <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl w-full">
          Redd for å miste internshippet eller jobben?
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-5">
          Disse selskapene har kansellert internships, graduate programs eller
          nyansettelser i siste liten. Finn den jobben du vil ha, men vær litt
          ekstra forsiktig med å signere med disse.
        </p>
        <div className="pt-4">
          <DialogPopover />
        </div>
      </div>
      <div className="mx-auto pt-36">
        <div className="w-full md:max-w-96 mx-auto px-5">
          <Input
            type="text"
            placeholder="Søk på konsulenthus..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="pt-3 flex flex-col justify-center">
          <small className="text-sm text-center font-bold leading-none">
            {filteredKonsulenthus.length === 0
              ? "Ingen treff 🥳"
              : `${filteredKonsulenthus.length} ${
                  filteredKonsulenthus.length === 1 ? "resultat" : "resultater"
                }`}
          </small>
        </div>
      </div>
      <div className="pt-6 lg:w-4/5 mx-auto px-4 w-full">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Svartelistede konsulenthus
</h2>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
  {filteredKonsulenthus.length === 0 ? (
    <div className="col-span-full pt-36  w-full text-center ">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Ingen treff! Trygg for nå 🚀
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-4">
      Burde det vært et selskap her? Send det inn på knappen i toppen av siden!
    </p>
    </div>
  ) : (
    filteredKonsulenthus.map((item: konsulenthusType) => (
      <KonsulenthusCard key={item.arbeidsgiver} {...item} />
    ))
  )}
</div>
      </div>
      <div className="pt-96">
        <p>.</p>
      </div>
    </div>
  );
}
