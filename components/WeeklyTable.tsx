import React from "react";

const weeks = [
  {
    startDate: new Date("October 27, 2022"),
    exercise: "10 Press Ups",
    questLink: "https://app.quest3.xyz/quest/700111975306224097",
  },
  {
    startDate: new Date("November 4, 2022"),
    exercise: "10 Squats",
    questLink: "https://app.quest3.xyz/quest/702816059253449001",
  },
  {
    startDate: new Date("November 14, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("November 21, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("November 28, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("December 5, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("December 12, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("December 19, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("December 26, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
  {
    startDate: new Date("January 2, 2022"),
    exercise: "To Be Determined",
    questLink: "",
  },
];

export default function WeeklyTable() {
  return (
    <div className="my-32 px-4 sm:px-6 lg:px-8 lg:pt-16">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto lg:px-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Weekly Challenges
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            As each week comes to a close, we will update this spot.
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg lg:mx-6">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Weekly Challenge
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Exercise
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-6 text-right text-sm font-semibold text-gray-900"
              >
                Start
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {weeks.map(({ startDate, exercise, questLink }, idx) => (
              <tr key={idx}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {startDate.toDateString()}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Exercise</dt>
                    <dd className="mt-1 truncate text-gray-700">{exercise}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {exercise}
                </td>
                <td className="py-4 pl-3 pr-6 text-right text-sm font-medium">
                  {questLink && (
                    <a
                      href={`${questLink}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Quest Start Page
                      <span className="sr-only">, {questLink}</span>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
