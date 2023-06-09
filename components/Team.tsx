import Image from "next/image";
import React from "react";

import distraction from "/public/images/distraction.png";
import dicaso from "/public/images/dicaso.png";
import lifestrike from "/public/images/lifestrike.png";
import dope from "/public/images/dope.png";
import beeps from "/public/images/beeps.png";
import millynish from "/public/images/millynish.png";
import livici3 from "/public/images/livixi3.png";
import THREEt from "/public/images/3t.jpg";
import jasonfactor from "/public/images/jasonfactor.webp";
import { useTranslation } from 'next-i18next'

import { Person } from "../lib";

export default function Team() {
  const { t } = useTranslation()

  const people: Person[] = [
    {
      name: "Dicaso",
      role: "Artist / Project Lead",
      imageUrl: dicaso,
      bio: `Dicaso used to draw dicks on L1, but now he draws Chads and Babes on Optimism.`,
      twitterUrl: "https://twitter.com/Dicaso5",
    },
    {
      name: "DistractionBoy",
      role: "Developer",
      imageUrl: distraction,
      bio: `DistractionBoy has no life so he chills with Dicaso because he's funny for free.`,
      twitterUrl: "https://twitter.com/DistractionBoy_",
    },
    {
      name: "LiViCi3",
      role: "Advisor",
      imageUrl: livici3,
      bio: "Livix, THE artist of Pudgy Penguins, came out the igloo to get swole on L2.",
      twitterUrl: "https://twitter.com/LiViXi3",
    },
    {
      name: "Lifestrike",
      role: "Marketing Lead",
      imageUrl: lifestrike,
      bio: `Lifestrike started minting Optipunks and became an Optimistic NFT collector 4Lyfe`,
      twitterUrl: "https://twitter.com/lifesadream63",
    },
    {
      name: "Dope",
      role: "Team Advisor",
      imageUrl: dope,
      bio: `Dope only needs simple things - chicken, chorizo risotto, cidre, & being max Chad.`,
      twitterUrl: "https://twitter.com/dopesdope2021",
    },
    {
      name: "Youngbeeps",
      role: "Operations Lead",
      imageUrl: beeps,
      bio: "Beeps came, Beeps lifted, Beeps conquered his inner OptiChad.",
      twitterUrl: "https://twitter.com/cryptonftbeeps",
    },
    {
      name: "Millynish",
      role: "Discord Expert",
      imageUrl: millynish,
      bio: `Chillin like a villain on the Opti Island makin a killin`,
      twitterUrl: "https://twitter.com/anish_katwal",
    },
    {
      name: "3t",
      role: "Developer",
      imageUrl: THREEt,
      bio: `Frontend developer helping with updates and creative direction`,
      twitterUrl: "https://twitter.com/Prod3t",
    },
    {
      name: "JasonFactor",
      role: "Developer",
      imageUrl: jasonfactor,
      bio: `A geek guy that loves waifus, memes, and bodybuilding`,
      twitterUrl: "https://twitter.com/anh_jasonfactor",
    }
  ];

  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="text-xl text-gray-500">
            Banished from Layer 1 these Chads have crossed the bridge seeking a
            more Optimistic lifestyle. <br />
            They workout, flex, and eat high amounts of protein with their gas
            savings.
          </p>
        </div>
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {people.map((person: Person) => (
            <li key={person.name}>
              <div className="space-y-4">
                {person.imageUrl && (
                  <Image
                    className="rounded-lg shadow-lg"
                    src={person.imageUrl}
                    alt=""
                    priority
                  />
                )}

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>{person.name}</h3>
                    <p className="text-red-500">{person.role}</p>
                    <p className="text-gray-500">{person.bio}</p>
                  </div>
                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a
                        href={person.twitterUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    {person.linkedinUrl && (
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
