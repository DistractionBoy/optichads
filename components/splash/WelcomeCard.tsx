import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, divergentLinkButtonCSS } from "@/components/ui/button";
import Link from "next/link";

const WelcomeCard = () => (
  <div className="flex justify-center fixed w-full my-4 bottom-3 sm:bottom-6 md:bottom-12 z-10">
    <Link href="/home" className={divergentLinkButtonCSS}>
      ENTER GYM
    </Link>
  </div>
);

export default WelcomeCard;
