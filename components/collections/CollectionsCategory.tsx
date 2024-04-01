import CarouselThumbs from "../ui/carouselThumbs";
import { EmblaOptionsType } from "embla-carousel";

import chad1 from "@/public/images/collections/chad1.webp";
import chad2 from "@/public/images/collections/chad2.webp";
import brigader1 from "@/public/images/collections/brigader1.webp";
import brigader2 from "@/public/images/collections/brigader2.webp";
import arbibabe1 from "@/public/images/collections/arbibabe1.webp";
import arbibabe2 from "@/public/images/collections/arbibabe2.webp";

const OPTIONS: EmblaOptionsType = {};

const GROUPS = [
  {
    index: 0,
    name: "Armored",
    slug: "optichads",
    collection: "OptiChads",
    bgColor: "bg-[#FB0420]",
    bgDescription: "bg-red-600",
    shortDescription:
      "Once upon a time, in the far-off land of Chadtopia, there lived a legendary figure known as Armored Chad" +
      "Armored Chad was not just a warrior, but also a guardian of the realm. He was responsible for protecting the citizens of Chadtopia " +
      "from the threats that lurked in the shadows of the nft world.",
    description:
      "Armored Chad was a towering figure, with bulging muscles and a sharp, tactical mind. " +
      "His armor, a marvel of engineering and craftsmanship, was adorned with the latest technology and gadgets, " +
      "making him a formidable force in the ever-evolving nft battlefield. Despite the many challenges he faced, " +
      "Armored Chad remained humble and dedicated to the protection of Chadtopia. He was a true hero, and his legacy would live on forever.",
    img: chad1,
  },
  {
    index: 1,
    name: "Demon King",
    slug: "optichads",
    collection: "OptiChads",
    bgColor: "bg-[#FB0420]",
    bgDescription: "bg-red-600",
    shortDescription:
      "The Demon King was a master of deception and manipulation, and he would often take on different forms to deceive his enemies." +
      "He was known to appear as a handsome and charming man, luring unsuspecting victims into his web of deceit." +
      "But beneath his charming exterior, the Demon King was a cunning and ruthless creature, with a heart as black as the void from which he came.",
    description:
      "In the beginning, there was only chaos and darkness. From this void emerged the Demon King, " +
      "a powerful and malevolent being with the power to bend reality to his will. The Demon King ruled over the underworld with an iron fist, " +
      "and his influence spread to the mortal realm, where he brought fear and suffering to all.",
    img: chad2,
  },
  {
    index: 2,
    name: "Wizard Cool",
    slug: "basebrigade",
    collection: "Base Brigade",
    bgColor: "bg-blue-500",
    bgDescription: "bg-blue-400",
    shortDescription:
      "In the land of Brigader, where magic was a part of everyday life, there lived a young wizard named Cool. " +
      "Cool was different from the other wizards in the kingdom, for he had a unique ability - " +
      "he could control the temperature of his surroundings  made him one of the most powerful wizards in the land.",
    description:
      "While other wizards were content with simply casting spells and waving their wands, " +
      "Cool was fascinated by the art of manipulating the elements. He spent every spare moment practicing his control over heat and cold, " +
      "and soon became a master of temperature magic. But he never forgot that sometimes, " +
      "the most powerful magic of all is the ability to think outside the box and come up with a unique solution to a problem.",
    img: brigader1,
  },
  {
    index: 3,
    name: "Base King",
    slug: "basebrigade",
    collection: "Base Brigade",
    bgColor: "bg-blue-500",
    bgDescription: "bg-blue-400",
    shortDescription:
      "Once upon a time, in the mystical land of Brigader, there was a kingdom ruled by a wise and just king named Base King. " +
      "Base King was loved by his subjects for his fair rule and his commitment to the welfare of the kingdom. " +
      "The kingdom prospered under his reign, and the people lived in peace and harmony.",
    description:
      "However, one day, a powerful sorcerer named Malachi arrived in Brigader. " +
      "Malachi used his dark magic to create an army of fearsome creatures and unleashed these creatures upon the kingdom." +
      "Base King assembled his loyal knights and devised a plan to defend his kingdom from Malachi's forces. Despite the overwhelming odds, King Arthur's " +
      "bravery and leadership inspired his knights to fight with unwavering determination. They pushed back Malachi's forces, " +
      "one by one, with their skill and valor, they defeated Malachi and banished him from Brigader forever.",
    img: brigader2,
  },
  {
    index: 4,
    name: "Berserker",
    slug: "arbibabes",
    collection: "Arbibabes",
    bgColor: "bg-indigo-500",
    bgDescription: "bg-indigo-400",
    shortDescription:
      "In the land of Arbitrum, there lived a fierce and powerful warrior known as the Berserker. " +
      "The Berserker was a solitary figure, traveling from one battle to the next, always seeking a worthy opponent. " +
      "She was a force of nature, with a strength and ferocity that was unmatched. The people of Valoria hailed the Berserker as a hero, " +
      "and she was a symbol of the land.",
    description:
      "The Berserker was known for her unpredictable and frenzied fighting style. " +
      "In the heat of battle, she would enter a state of heightened rage, her eyes glowing with a fierce red light. " +
      "In this state, she was unstoppable, cutting down her enemies with ease. But the Berserker's rage was not without its drawbacks. " +
      "In the midst of battle, she could not distinguish between friend and foe, and she would often leave a trail of destruction in her wake.",
    img: arbibabe1,
  },
  {
    index: 5,
    name: "Succubus",
    slug: "arbibabes",
    collection: "Arbibabes",
    bgColor: "bg-indigo-500",
    bgDescription: "bg-indigo-400",
    shortDescription:
      "The Succubus was a master of manipulation and deception. She would often take on the form of a beautiful woman, " +
      "luring unsuspecting men into her web of deceit. But beneath her enchanting exterior, the Succubus was a cunning and ruthless creature, " +
      "with a heart as cold as ice.",
    description:
      "In the dark and mysterious realm of the supernatural, there lived a creature of unmatched beauty and allure. " +
      "She was known as the Succubus, a powerful and seductive demon who could entrance any mortal with her charm. As the Succubus's power grew, " +
      "so did her army of enchanted followers. They roamed the land, spreading her influence and bringing chaos wherever they went. " +
      "The mortals of the realm lived in constant fear, never knowing when the Succubus would strike next.",
    img: arbibabe2,
  },
];

const CollectionsCategory = () => {
  return (
    <>
      <div className="block relative w-full mb-20 mt-24">
        <CarouselThumbs groups={GROUPS} options={OPTIONS} />
      </div>
    </>
  );
};

export default CollectionsCategory;
