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
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{arbeidsgiver}</CardTitle>

          <div className="space-x-2 ">
            <small className="text-sm font-medium leading-none">
              Har sagt opp:
            </small>

            {type.map((item, index) => (
              <Badge key={index} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          {" "}
          <div>
            <p>{detaljer}</p>
          </div>
          {links.length > 0 && (
            <div className="pt-4 -mb-1">
            </div>
          )}
          <ul className="ml-6 list-disc">
            {links.map((link, index) => (
              <li key={index} className="mt-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <div className="space-x-2 opacity-50">
            <small className="text-sm font-medium leading-none ">Dato:</small>
            <Badge variant="outline">{dato_for_oppsigelse}</Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
