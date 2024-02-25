import Image from "next/image";
import React from "react";

import distraction from "/public/images/distraction.png";
import dicaso from "/public/images/dicaso.png";
import lifestrike from "/public/images/lifestrike.jpg";
import dope from "/public/images/dope.jpg";
import beeps from "/public/images/beeps.png";
import millynish from "/public/images/millynish.jpg";
import livici3 from "/public/images/livixi3.png";
import THREEt from "/public/images/3t.jpg";
import jasonfactor from "/public/images/jasonfactor.webp";
import { useTranslation } from "next-i18next";

import { Person } from "../lib";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Team() {
  const { t } = useTranslation();
  const bio1: any = t("chads:team_section.0.bio1");
  const bio2: any = t("chads:team_section.0.bio2");
  const bio3: any = t("chads:team_section.0.bio3");
  const bio4: any = t("chads:team_section.0.bio4");
  const bio5: any = t("chads:team_section.0.bio5");
  const bio6: any = t("chads:team_section.0.bio6");
  const bio7: any = t("chads:team_section.0.bio7");
  const bio8: any = t("chads:team_section.0.bio8");
  const bio9: any = t("chads:team_section.0.bio9");

  const people: Person[] = [
    {
      name: "Dicaso",
      role: "Artist / Project Lead",
      imageUrl: dicaso,
      bio: bio1,
      twitterUrl: "https://twitter.com/Dicaso5",
    },
    {
      name: "DistractionBoy",
      role: "Developer",
      imageUrl: distraction,
      bio: bio2,
      twitterUrl: "https://twitter.com/DistractionBoy_",
    },
    {
      name: "Millynish",
      role: "Discord Expert",
      imageUrl: millynish,
      bio: bio7,
      twitterUrl: "https://twitter.com/anish_katwal",
    },
    {
      name: "JasonFactor",
      role: "Developer",
      imageUrl: jasonfactor,
      bio: bio9,
      twitterUrl: "https://twitter.com/anh_jasonfactor",
    },
    {
      name: "Lifestrike",
      role: "Marketing Lead",
      imageUrl: lifestrike,
      bio: bio4,
      twitterUrl: "https://twitter.com/lifesadream63",
    },
    {
      name: "Youngbeeps",
      role: "Operations Lead",
      imageUrl: beeps,
      bio: bio6,
      twitterUrl: "https://twitter.com/cryptonftbeeps",
    },
    {
      name: "Dope",
      role: "Team Advisor",
      imageUrl: dope,
      bio: bio5,
      twitterUrl: "https://twitter.com/dopesdope2021",
    },
    {
      name: "3t",
      role: "Developer",
      imageUrl: THREEt,
      bio: bio8,
      twitterUrl: "https://twitter.com/Prod3t",
    },
    {
      name: "LiViCi3",
      role: "Advisor",
      imageUrl: livici3,
      bio: bio3,
      twitterUrl: "https://twitter.com/LiViXi3",
    },
  ];

  return (
    <div className="mx-auto container py-12 px-4 sm:px-6 lg:px-8 lg:py-24 mt-24 lg:mt-32 mb-12 lg:mb-24 max-w-[2488px]">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none prose dark:prose-invert">
          <h2 className="xl:text-4xl desktop:text-7xl">
            {t("chads:team_section.0.our_team")}
          </h2>
          <p className="text-xl desktop:text-3xl">
            {t("chads:team_section.0.description1")}
            <br />
            {t("chads:team_section.0.description2")}
          </p>
        </div>
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {people.map((person: Person) => (
            <li key={person.name}>
              <div className="space-y-4 prose dark:prose-invert">
                {person.imageUrl && (
                  <Image
                    className="rounded-lg shadow-lg"
                    src={person.imageUrl}
                    alt=""
                    priority
                  />
                )}

                <div className="space-y-2">
                  <div>
                    <h3>{person.name}</h3>
                    <p className="text-primary">{person.role}</p>
                    <p className="line-clamp-2">{person.bio}</p>
                  </div>
                  {person.twitterUrl && (
                    <div role="list" className="flex space-x-5">
                      <div>
                        <Link
                          href={person.twitterUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Twitter</span>
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="w-5 h-5"
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
