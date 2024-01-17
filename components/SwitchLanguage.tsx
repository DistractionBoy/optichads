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
            className={`${globeStyle} flex h-[35px] w-[35px] flex-1 cursor-pointer items-center justify-center rounded-full text-white`}
          >
            <Menu>
              <Menu.Button>
                <GlobeAltIcon
                  className="flex h-6 w-6 self-center"
                  aria-hidden="true"
                />
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
