import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ShowcaseCarouselItem from "./ShowcaseCarouselItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { divergentLinkButtonCSS } from "../ui/button";

export type CollectionShowcaseCarouselProps = {
  collection_slug: "optichads" | "arbibabes" | "basebrigade";
};

type Group = {
  name: "Legendary" | "Staff Pick" | "1 of 1's";
  ids: number[];
};

const GROUPS = {
  optichads: {
    address: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    chain: "optimism",
    chainAbbr: "opt",
    groups: [
      //   {
      //     name: "Legendary",
      //     ids: [
      //       9963, 3467, 5364, 6851, 1586, 2271, 2281, 250, 3216, 3538, 4296, 4402,
      //       4600, 5015, 5249, 5831, 7292, 7343, 7687, 7721, 7772, 8384, 8494,
      //       9070, 9297, 937,
      //     ],
      //   },
      {
        name: "Staff Picks",
        ids: [
          9963, 6851, 1586, 2271, 2281, 250, 3216, 3538, 4296, 4402, 4600, 5015,
          5249, 5831, 7292, 7343, 7687, 7721, 7772, 8384, 8494, 9070, 9297, 937,
        ],
      },
      {
        name: "1 of 1's",
        ids: [1643, 1675, 1915, 2547, 5531, 5706, 5922, 6050, 6056, 9854],
      },
    ],
  },
  arbibabes: {
    address: String(process.env.NEXT_PUBLIC_ARBIBABE_CONTRACT),
    chain: "arbitrum",
    chainAbbr: "arb",
    groups: [
      //   {
      //     name: "Legendary",
      //     ids: [3510, 8416, 8779, 2385, 2833, 571, 5882, 6085, 9753, 9849],
      //   },
      { name: "Staff Picks", ids: [5508, 8919, 8793] },
      {
        name: "1 of 1's",
        ids: [3510, 8416, 8779, 2385, 2833, 571, 5882, 6085, 9753, 9849],
      },
    ],
  },
  basebrigade: {
    address: String(process.env.NEXT_PUBLIC_BRIGADE_CONTRACT),
    chain: "base",
    chainAbbr: "base",
    groups: [
      //   {
      //     name: "Legendary",
      //     ids: [3793, 6029, 2412, 308, 3317, 770, 771, 811, 863, 879],
      //   },
      { name: "Staff Picks", ids: [7970, 2012, 931] },
      {
        name: "1 of 1's",
        ids: [3793, 6029, 2412, 308, 3317, 770, 771, 811, 863, 879],
      },
    ],
  },
};

const CollectionShowcaseCarousel = ({
  collection_slug,
}: CollectionShowcaseCarouselProps) => {
  return (
    <div className="container py-16 md:py-24">
      <Tabs defaultValue="one-of-ones">
        {/* <TabsContent value="legendary" className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <Carousel className="mx-6">
              {collection_slug === "optichads" && (
                <CarouselContent>
                  {GROUPS[collection_slug].groups
                    .find((g) => g.name === "Legendary")
                    ?.ids.map((id) => (
                      <ShowcaseCarouselItem
                        key={`${collection_slug}-${id}`}
                        address={GROUPS[collection_slug].address}
                        chain={GROUPS[collection_slug].chain}
                        identifier={String(id)}
                      />
                    ))}
                </CarouselContent>
              )}
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="col-span-6">
            <div className="prose prose-xl">
              <h2>Legendary</h2>
              <p>
                These are the rarest of the rare. Great time and attention went
                into choosing which traits would be a part of this set. They
                rarely change hands, and when they do it is a big deal.
              </p>
            </div>
          </div>
        </TabsContent> */}
        <TabsContent value="one-of-ones" className="grid grid-cols-12 gap-10">
          <div className="col-span-10 md:col-span-8 lg:col-span-12">
            <Carousel className="mx-6">
              <CarouselContent>
                {GROUPS[collection_slug].groups
                  .find((g) => g.name === "1 of 1's")
                  ?.ids.map((id) => (
                    <ShowcaseCarouselItem
                      key={`${collection_slug}-${id}`}
                      address={GROUPS[collection_slug].address}
                      chain={GROUPS[collection_slug].chain}
                      identifier={String(id)}
                    />
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="col-span-10 md:col-span-4 lg:col-span-12">
            <div className="prose prose-xl dark:prose-invert">
              <h2>1 of 1&apos;s</h2>
              <p>
                These are the rarest of the rare. Great time and attention went
                into choosing which traits would be a part of this set. They
                rarely change hands, and when they do it is a big deal.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="staff-picks" className="grid grid-cols-12 gap-10">
          <div className="col-span-10 md:col-span-8 lg:col-span-12">
            <Carousel className="mx-6">
              <CarouselContent>
                {GROUPS[collection_slug].groups
                  .find((g) => g.name === "Staff Picks")
                  ?.ids.map((id) => (
                    <ShowcaseCarouselItem
                      key={`${collection_slug}-${id}`}
                      address={GROUPS[collection_slug].address}
                      chain={GROUPS[collection_slug].chain}
                      identifier={String(id)}
                    />
                  ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="col-span-10 md:col-span-4 lg:col-span-12">
            <div className="prose prose-xl dark:prose-invert">
              <h2>Staff Picks</h2>
              <p>
                These are the rarest of the rare. Great time and attention went
                into choosing which traits would be a part of this set. They
                rarely change hands, and when they do it is a big deal.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsList className="flex flex-col sm:flex-row justify-end space-x-0 sm:space-x-8 h-full bg-slate-50 dark:bg-zinc-900 mt-4 lg:mt-8 mb-16 md:mb-24">
          {/* <TabsTrigger value="legendary">Legendaries</TabsTrigger> */}
          <TabsTrigger value="one-of-ones" className={divergentLinkButtonCSS}>
            1 of 1&apos;s
          </TabsTrigger>
          <TabsTrigger value="staff-picks" className={divergentLinkButtonCSS}>
            Staff Picks
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CollectionShowcaseCarousel;
