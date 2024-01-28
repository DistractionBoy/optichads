import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WelcomeCard = () => (
  <div className="flex justify-center md:justify-end fixed w-full bottom-3 sm:bottom-6 md:bottom-12 md:right-12 z-10">
    <Card>
      <CardHeader>
        <CardTitle>Degens Welcome</CardTitle>
        <CardDescription>
          Step inside and work those glutes, bro.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex space-x-4">
        {/* <Button variant="secondary" className="w-full">
          MINT THIS
        </Button> */}

        <Link href="/home">
          <Button className="w-full">ENTER GYM</Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
);

export default WelcomeCard;
