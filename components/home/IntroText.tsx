const IntroText = () => (
  <div className="flex flex-col justify-center items-center bg-indigo-500">
    <div className="container flex justify-start items-stretch">
      <article className="prose lg:prose-xl my-12 lg:my-16 xl:m-24 px-12">
        <h2 className="text-xl md:text-4xl  text-white">
          The Premier L2 NFT Community
        </h2>
        <p className="text-white text-base sm:text-xl md:text-2xl font-medium desktop:text-3xl">
          Our journey began with a clear vision: to establish a blue-chip NFT
          project on L2. In a landscape flooded with low-quality derivatives,
          OptiChads quickly stormed Optimism as an OG project, with a strong
          community held together with a love for exercise and a shared desire
          for success.
        </p>
        <p className="text-white text-base sm:text-xl md:text-2xl font-medium desktop:text-3xl">
          What sets us apart? Our projects feature 100% original IPs with
          meticulously hand-drawn traits. We firmly believe that high-quality
          NFT art is pivotal in driving the adoption of Layer 2 solutions.
        </p>
      </article>
      <div className="flex h-[600px] bg-white w-24" />
      <div></div>
    </div>
  </div>
);

export default IntroText;
