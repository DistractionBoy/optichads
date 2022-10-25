import Image from "next/image";
import React from "react";

import ChadRope from "../public/images/chad-rope.jpeg";

export default function QuestsOpener() {
  return (
    <div className="relative rounded-t-xl bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <div className="hidden rounded-tl-xl lg:block">
            <Image
              className="h-56 w-full rounded-tl-lg rounded-br-xl object-cover lg:absolute lg:block lg:h-full"
              src={ChadRope}
              alt=""
              layout="fill"
            />
          </div>
        </div>
        <div className="block rounded-t-xl lg:hidden">
          <Image
            className="h-56 w-full rounded-t-lg object-cover"
            src={ChadRope}
            alt=""
            width={1920}
            height={1283}
            layout="responsive"
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-red-600">
              Weekly Quests
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              5 Minute Warm Up
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              A while ago, we submitted an Optimism Governance proposal with a
              double purpose - to raise awareness about Optimism, and to get
              people moving. Now, we can pay you to work out.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
                Each week, for 8 weeks, we are giving a portion of the 50,000
                $OP tokens we were granted. Holders need to complete a health
                related challenge (Proof of Work), Tweet about it, and retweet
                one other specified tweet to be entered into that week&apos;s OP
                distribution.
              </p>
              <p>
                At first, we give out around 5 OP to each of our holders who
                complete each week&apos;s quest (around 2000 people max at the
                time of writing this). As engagement ebbs and flows, we will
                adjust the weekly payouts so that all 50,000 $OP is be
                distributed by the end of the 8 week period.
              </p>
              <p>
                Weekly challenges are tracked with Quest3.xyz, a platform for
                NFT Creators that helps track and reward engagement online.
              </p>
              <p>
                We are giving away 6 OptiChads per week (8 in the final week) to
                those who want to be a part of this but do not currently own an
                OptiChad. There is no need to sign up each week. you only need
                to sign up once, using the form at the top of this page. We will
                put a higher priority on users who are new to Optimism. We are
                doing this because:
              </p>
              <ul role="list">
                <li>
                  We want current holders to tell their friends and family.
                </li>
                <li>Layer 2 Rollups are the shit and we like to brag.</li>
                <li>Real life gym Chads love to show off.</li>
              </ul>
              <p>
                So please, get people involved before the $OP well runs dry!
              </p>
              <h3>Workouts</h3>
              <p>
                Workout challenges will be relatively simple, and just enough to
                give you something to do between actual workouts. If you are
                injured or cannot perform the main exercise for any reason, you
                can modify the exercise as needed to avoid further injury at
                your own discretion.
              </p>
              <p>
                And remember, participation is voluntary and we are not
                responsible for injuries occured during performing the
                exercises. This is meant to be fun! Do a little work, earn some
                money, and raise awareness of Health in IT and Layer 2 scaling
                solutions - the best of which being Optimism, of course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
