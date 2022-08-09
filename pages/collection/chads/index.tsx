import React, { useEffect, useRef, useState } from "react";

import { Collection } from "../../../components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  DEFAULT_PAGES,
  DEFAULT_PAGESIZE,
  getBaseUrl,
} from "../../../lib/helpers";
import { removeUndefinedForNextJsSerializing } from "../../../lib/utils";
import { ChadMetadata } from "../../../lib";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import HeadMeta from "../../../components/HeadMeta";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = getBaseUrl();
  const { filter, pages, page, pagesize } = context.query;
  const url = `${baseUrl}/api/meta/chads${
    pages ? `?pages=${pages}` : "?pages=1"
  }&pagesize=${pagesize || 50}${page ? `&page=${page}` : ""}`;
  const res: Response = await fetch(url);
  const fallback: ChadMetadata = await res.json();
  return {
    props: removeUndefinedForNextJsSerializing({
      fallback: {
        [url]: fallback,
      },
      pages,
      page,
      pagesize,
    }),
  };
};

export default function BunnyCollection({
  fallback,
  pages,
  page,
  pagesize,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [totalPages, setTotalPages] = useState<number>(
    Number(pages) || DEFAULT_PAGES
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current !== null) {
      observer.observe(ref.current);
    }
  }, [ref]);

  useEffect(() => {
    if (isVisible && totalPages) {
      setTotalPages(totalPages + 1);
      router.push(
        `?pages=${totalPages + 1}&pagesize=${pagesize || DEFAULT_PAGESIZE}`,
        undefined,
        {
          shallow: true,
        }
      );
      setIsVisible(false);
    }
  }, [isVisible, totalPages, pagesize, router]);

  return (
    <>
      <HeadMeta
        title={`Optimistic Bunnies`}
        description={`View all the Optimistic Bunny NFT's - the first collection on Optimism`}
        keywords={`View, Optiland, Non-Fungible Tokens`}
      />
      <SWRConfig value={fallback}>
        <div className="py-16 sm:py-24">
          <div className="w-full mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <main className="col-span-12">
              <Collection
                token="chads"
                pages={totalPages.toString()}
                page={page || undefined}
                pagesize={pagesize || DEFAULT_PAGESIZE}
              />
            </main>
          </div>
        </div>
      </SWRConfig>
      <div className="block h-96 w-full" ref={ref}></div>
    </>
  );
}

/** two sections, with sidebar
  <div className="w-full mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <nav aria-label="Sidebar" className="sticky top-6 divide-y ">
        Here is some content for flitering and sorting and stuff
      </nav>
    </div>
    <main className="lg:col-span-9 xl:col-span-10">
      <Collection token="bunny" />
    </main>
  </div>
 */
