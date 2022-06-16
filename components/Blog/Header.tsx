import React from "react";

interface Props {
  title: string;
  description: string;
  category: string;
}

export default function Header({ title, description, category }: Props) {
  return (
    <div className="text-lg max-w-prose mx-auto">
      <h1>
        <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">
          {category}
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </span>
      </h1>
      <p className="mt-8 text-xl text-gray-500 leading-8">{description}</p>
    </div>
  );
}
