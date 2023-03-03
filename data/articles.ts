import article1 from "@/public/article1.png";
import article2 from "@/public/article2.png";

import { StaticImageData } from "next/image";

interface Article {
  title: string;
  brief: string;
  url: string;
  image: StaticImageData;
}

const articles: Article[] = [
  {
    title: "Getting the first 100 customers for your business",
    brief:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    url: "#",
    image: article1,
  },
  {
    title: "Apparently we had reached a great height in the atmosphere, ...",
    brief:
      "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    url: "#",
    image: article2,
  },
];

export default articles;
