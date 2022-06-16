import React from "react";
import NextLink from "next/link";
import { ArticleType } from "../../lib/types";
import Image from "next/image";

interface Props {
  article: ArticleType;
}

export default function ArticleItem({ article }: Props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:drop-shadow-md">
      <div className="flex-shrink-0 bg-white">
        <Image
          className="w-full object-cover"
          width={518}
          height={230}
          objectFit="cover"
          objectPosition="50% 38%"
          layout="intrinsic"
          src={article.ogImage.url}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-red-600">{article.category}</p>
          <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]" passHref>
            <span className="block mt-2 hover:cursor-pointer">
              <p className="text-xl font-semibold text-gray-900 hover:text-red-600">
                {article.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {article.description}
              </p>
            </span>
          </NextLink>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={article.author.link}>
              <span className="sr-only">{article.author.name}</span>
              <div className="h-10 w-10 rounded-full">
                <Image
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                  objectFit="cover"
                  objectPosition="center"
                  layout="responsive"
                  src={article.author.picture}
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={article.author.link} className="hover:underline">
                {article.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={article.datetime}>{article.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.timeReading.text} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
