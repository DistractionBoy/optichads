import { cn } from "@/lib/utils";

const dropShadow = "drop-shadow-[0_0.6px_1.5px_rgba(0,0,0,0.3)]";

const titleTextWrapper = cn(
  "font-extrabold text-base xxs:text-xl sm:text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent",
  "bg-gradient-to-r from-slate-100/75 to-30% to-slate-100",
  dropShadow
);

const listWrapper = cn(
  "ml-0.5 text-white lg:text-primary inline-flex flex-col overflow-hidden",
  "h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] xxs:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))]",
  "sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]"
);

const RotatingTitle = () => (
  <>
    <div className="w-full h-12" />
    <div className="flex justify-center z-10 relative">
      <div className={titleTextWrapper}>
        <span>The official website of </span>
        <span className={listWrapper}>
          <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
            <li className={dropShadow}>OptiChads</li>
            <li className={dropShadow}>Base Brigade</li>
            <li className={dropShadow}>ArbiBabes</li>
            <li className={dropShadow} aria-hidden="true">
              OptiChads
            </li>
          </ul>
        </span>
      </div>
    </div>
  </>
);

export default RotatingTitle;
