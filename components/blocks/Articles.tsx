import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import articleImg from "@/public/articles.png";
import article_data from "@/data/articles";

const Articles: FC = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="pt-[40px] bg-offwhite mb-[0px] md:mb-[40px] lg:mb-[0]">
            <h2 className="heading-32 w-[340px] px-[40px] font-bold">
              Read our articles & news
            </h2>
            <Link
              href="#"
              className="block font-semibold text-blue px-[40px] mt-[16px] hover:text-darkblue"
            >
              See More
            </Link>
            <Image
              src={articleImg}
              alt="Article Img"
              className="w-full mt-[40px]"
            />
          </div>
        </div>
        {article_data.map((element, index) => {
          return (
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-4"
              key={"article-" + index}
            >
              <div className="mt-[40px] md:mt-0">
                <Image
                  src={element.image}
                  className="w-full h-auto"
                  alt="Episod Photo"
                />
                <h2 className="mt-[20px] md:mt-[32px] text-20 md:text-24 font-semibold">
                  {element.title}
                </h2>
                <p className="mt-[16px] mb-[16px]">{element.brief}</p>
                <Link
                  href="#"
                  className="block font-semibold text-blue mt-[16px] hover:text-darkblue"
                >
                  Read Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
