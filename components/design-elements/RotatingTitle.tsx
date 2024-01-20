const titleTextWrapper =
  'font-extrabold text-base xxs:text-xl sm:text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-100 drop-shadow-[0_0.6px_1px_rgba(0,0,0,1)]"';

const listWrapper =
  "ml-0.5 text-white lg:text-primary inline-flex flex-col h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] xxs:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden";

const RotatingTitle = () => (
  <>
    <div className="w-full h-12" />
    <div className="flex justify-center z-10 relative">
      <div className={titleTextWrapper}>
        The official website of{" "}
        <span className={listWrapper}>
          <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
            <li className="drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.4)]">
              OptiChads
            </li>
            <li className="drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.4)]">
              Base Brigade
            </li>
            <li className="drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.4)]">
              ArbiBabes
            </li>
            <li
              className="drop-shadow-[0_0.6px_0.6px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            >
              OptiChads
            </li>
          </ul>
        </span>
      </div>
    </div>
  </>
);

export default RotatingTitle;
