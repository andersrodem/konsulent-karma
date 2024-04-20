import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { konsulenthusType } from "@/types/types";
import { Badge } from "@/components/ui/badge";

// boilerplate
export default function KonsulenthusCard({
  arbeidsgiver,
  type,
  detaljer,
  links,
  dato_for_oppsigelse,
}: konsulenthusType) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{arbeidsgiver}</CardTitle>
          <div></div>
          <div className="space-x-2">
            <small className="text-sm font-medium leading-none ">
              Har sagt opp:
            </small>

            {type.map((item, index) => (
              <Badge key={index} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
          <div className="space-x-2">
            <small className="text-sm font-medium leading-none ">Dato:</small>
            <Badge variant="outline">{dato_for_oppsigelse}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div>
            <p>{detaljer}</p>
          </div>
          <div className="pt-4 -mb-1">
            <small className="text-sm font-medium leading-none ">Linker:</small>
          </div>
          <ul className="mb-6 ml-6 list-disc">
            {links.map((link, index) => (
              <li key={index} className="mt-2">
                <a href={link} className="text-blue-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
