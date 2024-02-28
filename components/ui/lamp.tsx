import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colorFrom = (chain: string | undefined) =>
  cn(
    "",
    chain === "optimism"
      ? "from-[#FB0420] via-transparent to-transparent"
      : chain === "base"
        ? "from-blue-500 via-transparent to-transparent"
        : "from-indigo-500 via-transparent to-transparent"
  );

const colorTo = (chain: string | undefined) =>
  cn(
    "",
    chain === "optimism"
      ? "from-transparent via-transparent to-[#FB0420]"
      : chain === "base"
        ? "from-transparent via-transparent to-blue-500"
        : "from-transparent via-transparent to-indigo-500"
  );

const colorBG = (chain: string | undefined) =>
  cn(
    "",
    chain === "optimism"
      ? "bg-[#FB0420]"
      : chain === "base"
        ? "bg-blue-500"
        : "bg-indigo-500"
  );

const colorBGLight = (chain: string | undefined) =>
  cn(
    "",
    chain === "optimism"
      ? "bg-red-400"
      : chain === "base"
        ? "bg-blue-400"
        : "bg-indigo-400"
  );

export const LampContainer = ({
  children,
  className,
  chain,
}: {
  children: React.ReactNode;
  className?: string;
  chain?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 pt-[400px] xl:pt-[600px]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white [--conic-position:from_70deg_at_center_top]",
            colorFrom(chain)
          )}
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white [--conic-position:from_290deg_at_center_top]",
            colorTo(chain)
          )}
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className={cn(
            "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl",
            colorBG(chain)
          )}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl",
            colorBGLight(chain)
          )}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "25rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]",
            colorBGLight(chain)
          )}
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative flex flex-col items-center -translate-y-[360px] xl:-translate-y-[400px] px-5 w-full">
        {children}
      </div>
    </div>
  );
};
