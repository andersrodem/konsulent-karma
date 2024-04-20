import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import konsulenthus from "@/data/konsulenthus.json";
import { konsulenthusType } from "@/types/types";
import KonsulenthusCard from "@/components/ui/KonsulenthusCard";

export default function Home() {
  return (
    <div className="px-5">
      <div className="py-5 md:pr-10 px-5 flex justify-between space-x-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          KonsulentKarma
        </h3>
        <Button>Blitt sagt opp?</Button>
      </div>
      <div className="flex flex-col justify-center mx-auto items-center max-w-[90%] md:max-w-[60%] md:text-center pt-48">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Redd for å miste internshippet/jobben?
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Disse selskapene har kansellert internships, graduate program eller
          nyansettelser i siste liten.
        </p>
      </div>
      <div className="mx-auto pt-16">
        <div className="w-full md:max-w-96 mx-auto px-5">
          <Input type="" id="" placeholder="Konsulentselskap AS" className="" />
        </div>
        <div className="pt-2 flex flex-col justify-center">
          <small className="text-sm text-center font-bold leading-none">
            XX resultater
          </small>
        </div>
      </div>
      <div className="pt-40">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Konsulenthus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
          {konsulenthus.map((konsulenthus: konsulenthusType) => (
            <KonsulenthusCard
              key={konsulenthus.arbeidsgiver}
              {...konsulenthus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
