import React from "react";

const faqs = [
  // {
  //   question: "I've completed this week's quest. Wen rewards?",
  //   answer: `We have to manually verify each submitted video, so please be patient
  //           with us, but we usually are able to check submissions every couple of
  //           hours. We lock in the rewards using Quest3's system and at the end of
  //           each quest's period, the funds are dispersed. We then contact Quest3 to
  //           get any remaining funds that haven't been dispersed and figure out what
  //           to do with any refunded tokens.`,
  // },
  {
    question: "Wen OptiBabes?",
    answer: `Our second collection, OptiBabes, is currently under construction and 
            Livic, the famous Pudgy Penguins artist has joined us as a consultant to help
            us portray a balanced and strong image for our beloved babes. We are taking 
            great care in our designs and will not rush the process. It will be a smaller 
            collection however, and things will run smoothly so we are hoping to launch soon.`,
  },
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
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              FAQ&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to us on our{" "}
              <a
                href="/discord"
                className="font-medium text-red-500 hover:text-red-700"
              >
                Discord
              </a>{" "}
              server.
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs &&
                faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
            </dl>
            {/* <dl className="mt-12 space-y-12">
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
            </dl> */}
          </div>
        </div>
      </div>
    </div>
  );
}
