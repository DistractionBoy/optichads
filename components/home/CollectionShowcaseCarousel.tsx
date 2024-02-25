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

const GROUPS = {
  optichads: {
    address: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    chain: "optimism",
    chainAbbr: "opt",
    groups: [
      {
        name: "Apes",
        ids: [1470, 1744, 3150, 5200, 7513, 8920, 1276],
      },
      {
        name: "Staff Picks",
        ids: [9620, 9963, 987, 250, 3538, 6559, 2434, 8384, 6346],
      },
      {
        name: "1 of 1's",
        ids: [1643, 1675, 1915, 2547, 5531, 5706, 5922, 6050, 6056, 9854],
      },
      {
        name: "Business",
        ids: [4670, 8050, 5807, 6619, 4749, 2654, 5758],
      },
      {
        name: "Goop / Trippy",
        ids: [8314, 6690, 9717, 1265],
      },
    ],
  },
  arbibabes: {
    address: String(process.env.NEXT_PUBLIC_ARBIBABE_CONTRACT),
    chain: "arbitrum",
    chainAbbr: "arb",
    groups: [
      {
        name: "Apes",
        ids: [930, 1469, 233, 3279, 5713, 8518],
      },
      { name: "Staff Picks", ids: [5508, 6874, 8919, 8793] },
      {
        name: "1 of 1's",
        ids: [3510, 8416, 8779, 2385, 2833, 571, 5882, 6085, 9753, 9849],
      },
      {
        name: "Business",
        ids: [5099, 1746, 3067, 7662, 1577, 8224],
      },
      {
        name: "Goop / Trippy",
        ids: [5508, 9765, 2785],
      },
    ],
  },
  basebrigade: {
    address: String(process.env.NEXT_PUBLIC_BRIGADE_CONTRACT),
    chain: "base",
    chainAbbr: "base",
    groups: [
      {
        name: "Apes",
        ids: [6142, 65161, 2913, 293, 6576, 3385, 4343, 4275],
      },
      { name: "Staff Picks", ids: [7910, 7970, 2012, 6247, 223, 5864] },
      {
        name: "1 of 1's",
        ids: [3793, 6029, 2412, 308, 3317, 770, 771, 811, 863, 879],
      },
      {
        name: "Business",
        ids: [3916, 2589, 4170, 8024, 4892, 4775, 6186],
      },
      {
        name: "Goop / Trippy",
        ids: [6946, 6115, 7961, 6539],
      },
    ],
  },
};

const CollectionShowcaseCarousel = ({
  collection_slug,
}: CollectionShowcaseCarouselProps) => {
  return (
    <div className="lg:container py-12 md:py-16 px-8 md:px-12">
      <Tabs defaultValue="staff-picks">
        <TabsContent
          value="business"
          className="grid grid-cols-12 gap-4 lg:gap-4 xl:gap-10"
        >
          <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-span-7">
            <Carousel>
              <CarouselContent>
                {GROUPS[collection_slug].groups
                  .find((g) => g.name === "Business")
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
          <div className="col-span-12 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 xl:col-span-4 xl:col-start-9">
            <div className="prose prose-xl dark:prose-invert">
              <h2>Business</h2>
              <p>
                To show we mean business we have dressed up pfp&apos;s across
                each collection to make them ready for any occasion. Whether it
                be for battle or for pleasure, a sharp-dressed NFT is a staple
                of any L2 collector's wallet.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="apes"
          className="grid grid-cols-12 gap-4 lg:gap-4 xl:gap-10"
        >
          <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-span-7">
            <Carousel>
              <CarouselContent>
                {GROUPS[collection_slug].groups
                  .find((g) => g.name === "Apes")
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
          <div className="col-span-12 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 xl:col-span-4 xl:col-start-9">
            <div className="prose prose-xl dark:prose-invert">
              <h2>Apes</h2>
              <p>
                Yeah, ok. We get it. You love apes. Fine, we went ahead and
                added ape-like traits across every collection because for some
                reason, it&apos;s the most sought-after animal in web3. Ok I
                lied. Heart to heart... this is me, DistractionBoy, and apes are
                so fucking stupid but whatever, we got them so you might as well
                enjoy them if you are into that sort of thing.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="one-of-ones"
          className="grid grid-cols-12 gap-2 lg:gap-4 xl:gap-10"
        >
          <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-span-7">
            <Carousel>
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
          <div className="col-span-12 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 xl:col-span-4 xl:col-start-9">
            <div className="prose prose-xl dark:prose-invert">
              <h2>1 of 1&apos;s</h2>
              <p>
                The rarest of the rare, each image was hand-drawn from a loose
                starting base model of each collection's character outline and
                fine-tuned to show a truly unique image. There are only 10 from
                each collection. Each one has a custom theme in mind, for a
                certain type of buyer. We hope you enjoy these as much as we did
                making them.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="staff-picks"
          className="grid grid-cols-12 gap-4 lg:gap-4 xl:gap-10"
        >
          <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-span-7">
            <Carousel>
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
          <div className="col-span-12 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 xl:col-span-4 xl:col-start-9">
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
        <TabsContent
          value="goop"
          className="grid grid-cols-12 gap-4 lg:gap-4 xl:gap-10"
        >
          <div className="col-span-12 md:col-start-2 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-span-7">
            <Carousel>
              <CarouselContent>
                {GROUPS[collection_slug].groups
                  .find((g) => g.name === "Goop / Trippy")
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
          <div className="col-span-12 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 xl:col-span-4 xl:col-start-9">
            <div className="prose prose-xl dark:prose-invert">
              <h2>Goop</h2>
              <p>
                A nod to GOOPDOODES, this trait is always a rare one across
                every collection and even more rarely is combined with matching
                "head" traits. Do you love color and community as much as we do?
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsList className="flex flex-col sm:flex-row justify-end space-x-0 sm:space-x-8 h-full bg-slate-50 dark:bg-zinc-900 mt-4 lg:mt-8 mb-16 md:mb-24">
          <TabsTrigger value="staff-picks" className={divergentLinkButtonCSS}>
            Staff Picks
          </TabsTrigger>
          <TabsTrigger value="business" className={divergentLinkButtonCSS}>
            Business
          </TabsTrigger>
          <TabsTrigger value="one-of-ones" className={divergentLinkButtonCSS}>
            1 of 1&apos;s
          </TabsTrigger>
          <TabsTrigger value="apes" className={divergentLinkButtonCSS}>
            Apes
          </TabsTrigger>
          <TabsTrigger value="goop" className={divergentLinkButtonCSS}>
            Goop / Trippy
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default CollectionShowcaseCarousel;
