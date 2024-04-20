import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { konsulenthusType } from "@/types/types";

// boilerplate
export default function KonsulenthusCard({arbeidsgiver}: konsulenthusType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{arbeidsgiver}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
