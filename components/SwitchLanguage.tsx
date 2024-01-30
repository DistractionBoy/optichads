import { GlobeAltIcon, CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

type Props = {
  globeStyle?: string;
};

export default function SwitchLanguage({ globeStyle }: Props) {
  const { locale, locales, asPath } = useRouter();
  const { t } = useTranslation();
  return (
    <Menu as="div">
      <Menu.Item>
        {() => (
          <div
            className={`${globeStyle} flex h-[35px] w-[35px] flex-1 cursor-pointer items-center justify-center rounded-full text-white mt-3`}
          >
            <Menu>
              <Menu.Button>
                <div>
                  <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-red-600 px-4 py-2 2xl:text-md text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {t("common:current_lang")}
                    <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                    </svg>
                  </button>
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute top-14 z-10 -ml-28 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {locales?.map((l, i) => {
                    return (
                      <Menu.Item key={l}>
                        {({ active }) => (
                          <div
                            className={clsx(
                              active ? "cursor-pointer" : "",
                              "px-4 py-2 text-sm  text-gray-700"
                            )}
                          >
                            <Link
                              href={asPath}
                              locale={l}
                              className="inline-flex w-full"
                            >
                              {t("common:language." + i + ".name")}
                              {l === locale ? (
                                <CheckIcon
                                  className="absolute right-0 mr-4 h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                ""
                              )}
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </Menu.Item>
    </Menu>
  );
}
