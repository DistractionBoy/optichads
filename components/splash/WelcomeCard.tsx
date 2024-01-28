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
      </CardHeader>
      <CardContent>
        <CardDescription>
          Step inside and work those glutes, bro.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-1 space-x-4">
        <Link href="/home" className="w-full">
          <Button className="w-full">ENTER GYM</Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
);

export default WelcomeCard;
