"use client";
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
import { sendEmail } from "@/app/actions";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function NyligArbeidslos() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await sendEmail(event.target.message.value);
    setEmailSent(true);
  };

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
                <BreadcrumbPage>Nylig arbeidsledig? Tips oss!</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Fikk du uventet sparken? Tips oss anonymt
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-4">
          Det er kjipt når du får en jobb tidlig på høsten og plutselig mister
          den rett før oppstart. Hjelp andre studenter være forberedt til de
          skal søke!
        </p>
        {emailSent ? (
          <p>Ditt tips er sendt inn!</p>
        ) : (
          <form
            className="grid w-full max-w-sm items-center gap-1.5"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
            <Label htmlFor="message">Your message</Label>
            <Textarea
              name="message"
              id="message"
              placeholder="Type your message here."
            />
            <Button type="submit">Send inn</Button>
          </form>
        )}
        <Footer />
      </div>
    </div>
  );
}
