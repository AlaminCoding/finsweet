import { FC } from "react";
import episod_data from "@/data/episod";
import BlueButton from "@/components/ui/BlueButton";
import PlayButton from "@/components/ui/PlayButton";
import Image from "next/image";
const Episods: FC = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="heading-32">Recent Episodes</h2>
          <p className="mt-[16px] md:max-w-[370px]">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black.
          </p>
        </div>
        <div className="mt-[30px] md:mt-0">
          <BlueButton data_text="See All Episodes" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {episod_data.map((element, index) => {
          return (
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-4"
              key={"episod-" + index}
            >
              <div className="mt-[40px] md:mt-[64px]">
                <Image
                  src={element.image}
                  className="w-full h-auto"
                  alt="Episod Photo"
                />
                <h2 className="mt-[20px] md:mt-[32px] text-20 md:text-24 font-semibold">
                  {element.title}
                </h2>
                <p className="mt-[16px] mb-[16px]">{element.brief}</p>
                <PlayButton />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Episods;
