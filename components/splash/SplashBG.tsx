import Image from "next/image";

import mobile360 from "@/public/images/splash/360x800.png";
import mobile375 from "@/public/images/splash/375x667.png";
import mobile430 from "@/public/images/splash/430x932.png";
import tablet from "@/public/images/splash/1024x1366.png";
import desktop from "@/public/images/splash/1728x1170.png";
import ultrawide from "@/public/images/splash/3440x1440.png";
import veryLarge from "@/public/images/splash/3840x2160.png";
import superUltrawide from "@/public/images/splash/5120x1440.png";

const SplashBG = () => (
  <div className="inset-0">
    <Image
      priority
      alt=""
      src={mobile360}
      fill
      className="block xxs:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={mobile375}
      fill
      className="hidden xxs:block xs:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={mobile430}
      fill
      className="hidden xs:block sm:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={tablet}
      fill
      className="hidden sm:block lg:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={desktop}
      fill
      className="hidden lg:block ultrawide:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={ultrawide}
      fill
      className="hidden ultrawide:block verylarge:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={veryLarge}
      fill
      className="hidden verylarge:block superUltrawide:hidden object-cover"
    />
    <Image
      priority
      alt=""
      src={superUltrawide}
      fill
      className="hidden superUltrawide:block object-cover"
    />
  </div>
);

export default SplashBG;
