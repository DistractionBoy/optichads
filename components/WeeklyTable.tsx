import React from "react";

const weeks = [
  {
    startDate: new Date("November, 2022"),
    exercise: "10 Press Ups",
    alternate: "20 Flutter Kicks",
    questLink: "https://quest3.xyz/something",
  },
  {
    startDate: new Date("November, 2022"),
    exercise: "20 Crunches",
    alternate: "20 Air Military Press",
  },
  {
    startDate: new Date("November, 2022"),
    exercise: "15 Burpees",
    alternate: "15 Lunges",
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
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Alternate
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
            {weeks.map(({ startDate, exercise, alternate, questLink }, idx) => (
              <tr key={idx}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {startDate.toDateString()}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Exercise</dt>
                    <dd className="mt-1 truncate text-gray-700">{exercise}</dd>
                    <dt className="sr-only sm:hidden">Alternate</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      {alternate}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {exercise}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {alternate}
                </td>
                <td className="py-4 pl-3 pr-6 text-right text-sm font-medium">
                  {questLink && (
                    <a
                      href={`${questLink}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Link<span className="sr-only">, {questLink}</span>
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