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
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');

    const response = await fetch('/api/send/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    const result = await response.json();
    alert(result.message);
  };

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
              Det er kjipt når du får en jobb tidlig på høsten og plutselig mister den rett før oppstart. Hjelp andre studenter være forberedt til de skal søke!
            </DialogDescription>
            <form className="grid w-full max-w-sm items-center gap-1.5" onSubmit={handleSubmit}>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
              <Label htmlFor="message">Your message</Label>
              <Textarea name="message" id="message" placeholder="Type your message here." />
              <Button type="submit">Send inn</Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
