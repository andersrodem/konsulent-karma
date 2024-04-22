import Navbar from "@/components/ui/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/ui/Footer";

export default function HvorforSvarteliste() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-2xl pt-8 pb-32 px-4">
        <div className="pb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Hvorfor ha en svarteliste?</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hvorfor ha en svarteliste for konsulenthus?
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-4">
          <br />
          Å ha en svarteliste over konsulentselskaper som tilbyr internship til
          studenter, for så å si dem opp før arbeidsperioden begynner, er viktig
          for å beskytte studentenes fremtid og integritet. <br />
          <br />
          Når studenter aksepterer en internshipavtale, organiserer de ofte
          livet og hverdagen sitt rundt denne nye muligheten – fra å avslå andre
          jobbtilbud til å planlegge bosted nær arbeidsstedet. En siste-liten
          avlysning setter dem i en vanskelig og usikker situasjon, ofte med
          begrensede alternativer for erstatningsjobber. De økonomiske
          konsekvensene er store for enkelte, da slike inntekter er kritiske for
          mange studenter. <br />
          <br />
          Svartelisten fungerer som et viktig verktøy for å holde selskaper
          ansvarlige for deres handlinger og bidrar til å sikre et mer
          transparent og rettferdig arbeidsmarked for studenter.
          <br />
          <br />
          Vi ønsker å bidra til å fremme transparens og ansvarlighet i
          næringslivet. Ved å offentliggjøre informasjon om enkelte selskapers
          praksis, kan studenter gjøre mer informerte valg om hvor de ønsker å
          investere sin tid og karriereambisjoner. En slik liste sender også et
          klart signal til selskapene om at uetisk oppførsel har reelle
          konsekvenser, og motiverer dem til å forbedre sine forretningsmetoder.
          <br />
          <br />
          Synes du det er litt mye? Har du innspill? Hjelp oss bli bedre! Vi kan
          finne bedre løsninger sammen. <br />
          <br />
          <strong>Kontakt oss:</strong>
          <br />
          Anders Rodem: anders.rodem@gmail.com
          <br />
          Mikkel Svartveit: hei@mikkelsvartveit.com
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
}
