import React from "react";

const faqs = [
  {
    question: "Who are the Distractors of Dracula?",
    answer: `We are a guild of crypto enthusiasts and (soon, hopefully!) no-coiners who
            wanted to give this storyverse concept a try, and take advantage of the low 
            gas fees on Optimism. After all, it would simply stain our trousers if we had
            to pay three hundred pence every time we told a story!`,
  },
  {
    question: "What is the guild's mission?",
    answer: `Really this is just a fun thing to do between friends and
    crypto enthusiasts that love to write and create. It is
    more enjoyable to meet new people and collaborate as a group
    than to write in a silo with no one to bounce ideas off of and
    learn from.`,
  },
];

export default function FAQs() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-300">
              FAQ&apos;s
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Can’t find the answer you’re looking for? Reach out to us on their{" "}
              <a
                href="https://discord.com/invite/yTcZHS2JTb"
                className="font-medium text-red-600 hover:text-red-400"
              >
                Discord
              </a>{" "}
              server.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Let them know the Distractors of Dracula sent you
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs &&
                faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-100">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-300">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
            </dl>
            <dl className="space-y-12">
              <div>
                <dt className="mt-12 text-lg leading-6 font-medium text-gray-100">
                  How can I join this guild?
                </dt>
                <dd className="mt-2 text-base text-gray-300">
                  1. Just drop a message down in #general in
                  CryptovaniaNFT&apos;s Discord and mention it!
                </dd>
                <dd className="mt-2 text-base text-gray-300">
                  2. Prepare to show us a work in progress or finished product
                  of a story, no matter how small
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
