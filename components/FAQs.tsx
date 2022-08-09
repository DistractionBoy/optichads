import React from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What are OptiChads?",
    answer: `OptiChads is an NFT collection, nah, a movement that promotes health and
            charity through a cheap public mint and up to 50% of secondary sales going
            to retroactive public goods. Wanna Chad it up with us? Our Discord server
            would love to hear your Chaddest ideas`,
  },
  {
    question: "What should I post in Discord?",
    answer: `Pictures of your healthy meals, gyms, people working out and being active,
            wide attractive smiles, slick shoes that have not been worn much, workout
            equipment, runners, my chin, water, and healthy people working out while
            eating right.`,
  },
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              FAQ&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to us on our{" "}
              <a
                href="/discord"
                className="font-medium text-red-600 hover:text-red-700"
              >
                Discord
              </a>{" "}
              server.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs &&
                faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
            </dl>
            <dl className="mt-12 space-y-12">
              <div>
                <dt className="mt-12 text-lg leading-6 font-medium text-gray-900">
                  How do I mint a Chad?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  1. You need to transfer your Ether using Metamask from the
                  Ethereum network to the Optimism network through either the
                  official{" "}
                  <Link passHref href="https://gateway.optimism.io/">
                    <span className="text-red-600 hover:text-red-700 cursor-pointer">
                      Optimism gateway
                    </span>
                  </Link>{" "}
                  or{" "}
                  <Link passHref href="https://app.hop.exchange/send">
                    <span className="text-red-600 hover:text-red-700 cursor-pointer">
                      {" "}
                      hop exchange.
                    </span>
                  </Link>
                </dd>
                <dd className="mt-2 text-base text-gray-500">
                  2. Chad over to our <Link href="/mint">Mint</Link> page,
                  connect your MetaMask wallet, pick the collection you wish to
                  mint from, and follow the prompts until your transaction is
                  complete.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
