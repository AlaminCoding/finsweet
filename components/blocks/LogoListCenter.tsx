import { FC } from "react";
import Image from "next/image";
import logo1 from "@/public/LogoList/Logo.png";
import logo2 from "@/public/LogoList/Logo-1.png";
import logo3 from "@/public/LogoList/Logo-2.png";
import logo4 from "@/public/LogoList/Logo-3.png";
import logo5 from "@/public/LogoList/Logo-4.png";

const LogoListCenter: FC = () => {
  return (
    <section className="pt-[40px] md:pt-[80px] -mb-[100px] relative z-1">
      <div className="bg-blue p-[30px] md:p-[70px]">
        <h2 className="heading-32 font-bold text-center text-white">
          Our Sponsors
        </h2>
        <div className="flex justify-around flex-wrap mt-0 md:mt-[40px]">
          <Image src={logo1} className="mx-5 mt-[30px]" alt="Sponsor Logo" />
          <Image src={logo2} className="mx-5 mt-[30px]" alt="Sponsor Logo" />
          <Image src={logo3} className="mx-5 mt-[30px]" alt="Sponsor Logo" />
          <Image src={logo4} className="mx-5 mt-[30px]" alt="Sponsor Logo" />
          <Image src={logo5} className="mx-5 mt-[30px]" alt="Sponsor Logo" />
        </div>
      </div>
    </section>
  );
};

export default LogoListCenter;
