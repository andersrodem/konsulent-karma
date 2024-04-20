import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DialogPopover() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Hvorfor ha en svarteliste?</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hvorfor ha en svarteliste?</DialogTitle>
            <DialogDescription>
              <br />
              Å ha en svarteliste over konsulentselskaper som tilbyr internship
              til studenter, for så å si dem opp før arbeidsperioden begynner,
              er viktig for å beskytte studentenes fremtid og integritet. <br />
              <br />
              Når studenter aksepterer en internshipavtale, organiserer de ofte
              livet og hverdagen sitt rundt denne nye muligheten – fra å avslå
              andre jobbtilbud til å planlegge bosted nær arbeidsstedet. En
              siste-liten avlysning setter dem i en vanskelig og usikker
              situasjon, ofte med begrensede alternativer for erstatningsjobber.
              De økonomiske konsekvensene er store for enkelte, da slike
              inntekter er kritiske for mange studenter. <br />
              <br />
              Svartelisten fungerer som et viktig verktøy for å holde selskaper
              ansvarlige for deres handlinger og bidrar til å sikre et mer
              transparent og rettferdig arbeidsmarked for studenter.
              <br />
              <br />
              Vi ønsker å bidra til å fremme transparens og ansvarlighet i
              næringslivet. Ved å offentliggjøre informasjon om enkelte
              selskapers praksis, kan studenter gjøre mer informerte valg om
              hvor de ønsker å investere sin tid og karriereambisjoner. En slik
              liste sender også et klart signal til selskapene om at uetisk
              oppførsel har reelle konsekvenser, og motiverer dem til å forbedre
              sine forretningsmetoder.
              <br/><br/>
              Synes du det er litt mye? Har du innspill? Hjelp oss bli bedre! Vi kan finne bedre løsnigner sammen. <br/><br/>

              Kontakt oss:<br/>
              Anders Rodem: anders.rodem@gmail.com<br/>
              Mikkel Svartveit: konsulentkarma@mikkelsvartveit.com<br/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
