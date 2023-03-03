import BlueButton from "@/components/ui/BlueButton";
import Image from "next/image";

interface HeroProps {
  title_text: string;
  brief: string;
  button_text: string;
  input_field: boolean;
  image_box: boolean;
}

const Hero = (props: HeroProps) => {
  const { title_text, brief, button_text, input_field, image_box } = props;
  return (
    <section className="py-[40px] md:py-[100px]">
      <div className="flex flex-wrap -mx-4 px-0 xl:px-[120px]">
        <div className="w-full md:w-1/2 px-4 flex items-center">
          <div>
            <h1 className="heading-48 max-w-[440px]">{title_text}</h1>
            <p className="text-16 lg:max-w-[466px] mt-[32px]">{brief}</p>
            <div className="mt-[32px] w-full lg:max-w-[486px] flex">
              {input_field ? (
                <input
                  type="email"
                  className="h-[48px] p-2 bg-offwhite flex-1 focus:outline-0 px-5 w-full"
                  placeholder="Enter Your Email Id"
                />
              ) : null}

              <BlueButton data_text={button_text} />
            </div>
          </div>
        </div>
        {image_box ? (
          <div className="w-full md:w-1/2 px-4 mt-[40px] md:mt-0">
            <div className="pl-0 md:pl-5 flex justify-center items-center h-full">
              <Image
                src={require("@/public/audio-track.png")}
                alt="Hero Image"
                priority
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
