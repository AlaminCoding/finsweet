import Episod1 from "@/public/Episod1.png";
import Episod2 from "@/public/Episod2.png";
import Episod3 from "@/public/Episod3.png";

import { StaticImageData } from "next/image";

interface Episod {
  title: string;
  brief: string;
  url: string;
  image: StaticImageData;
}

const episods: Episod[] = [
  {
    title: "Ep 1: How to build a world-class business brand",
    brief:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    url: "#",
    image: Episod1,
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    brief:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    url: "#",
    image: Episod2,
  },
  {
    title: "Ep 3: Should I raise money for my startup, or not?",
    brief:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    url: "#",
    image: Episod3,
  },
];

export default episods;
