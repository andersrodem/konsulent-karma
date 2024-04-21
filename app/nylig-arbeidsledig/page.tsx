"use client";
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

    const email = event.target.email.value;
    const company = event.target.company.value;
    const date = event.target.date.value;
    const message = event.target.message.value;

    const emailText = `
E-post: ${email}
Selskap: ${company}
Dato: ${date}
Beskrivelse: ${message}
`;

    await sendEmail(emailText);
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
            className="grid w-full pt-8 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <Label htmlFor="email">Din e-post (valgfritt)</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="dittnavn@gmail.com"
              />
            </div>

            <div>
              <Label htmlFor="company">Hvem skulle du jobbe hos?</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Karma Consulting AS"
              />
            </div>

            <div>
              <Label htmlFor="date">Når ble du sagt opp?</Label>
              <Input
                type="text"
                name="date"
                id="date"
                placeholder="April 2023"
              />
            </div>

            <div>
              <Label htmlFor="message">Beskrivelse</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Skriv kort om hva som skjedde"
              />
            </div>

            <Button type="submit">Send inn</Button>
          </form>
        )}
        <Footer />
      </div>
    </div>
  );
}
