import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TipsUs() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>Nylig arbeidsløs? Tips oss!</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fikk du uventet sparken? Tips oss anonymt</DialogTitle>
            <DialogDescription>
              Det er kjipt når du får en jobb tidlig på høsten og plutselig
              mister den rett før oppstart. Hjelp andre studenter være forberedt
              til de skal søke!
            </DialogDescription>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button type="submit">Send inn</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
