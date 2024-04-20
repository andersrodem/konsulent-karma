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
}: konsulenthusType) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{arbeidsgiver}</CardTitle>
          <div className="space-x-2">
            {type.map((item, index) => (
              <Badge key={index} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p>{detaljer}</p>
        </CardContent>
      </Card>
    </div>
  );
}

{
  /* <Card>
<CardHeader>
  <CardTitle>{arbeidsgiver}</CardTitle>
  {type.map((item, index) => (
    <Badge key={index} variant="outline">{item}</Badge>
  ))}

</CardHeader>
<CardContent>
  <p>Card Content</p>
</CardContent>
<CardFooter>
  <p>Card Footer</p>
</CardFooter>
</Card> */
}
