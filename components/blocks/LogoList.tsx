import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import ApplePodcast from "@/public/ApplePodcast.png";
import SoundCloud from "@/public/SoundCloud.png";
import GooglePodcast from "@/public/GooglePodcast.png";
import Spotify from "@/public/Spotify.png";

const LogoList: FC = () => {
  return (
    <section className="py-[40px] md:py-[80px] flex flex-col xl:justify-between xl:items-center xl:flex-row ">
      <h2 className="heading-24">Podcast Available On</h2>
      <ul className="flex flex-wrap xl:flex-nowrap">
        <li className="mt-[30px] mr-10 xl:mt-0 xl:ml-20 xl:mr-0">
          <Link href="#">
            <Image src={ApplePodcast} alt="podcast img" />
          </Link>
        </li>
        <li className="mt-[30px] mr-10 xl:mt-0 xl:ml-20 xl:mr-0">
          <Link href="#">
            <Image src={SoundCloud} alt="podcast img" />
          </Link>
        </li>
        <li className="mt-[30px] mr-10 xl:mt-0 xl:ml-20 xl:mr-0">
          <Link href="#">
            <Image src={GooglePodcast} alt="podcast img" />
          </Link>
        </li>
        <li className="mt-[30px] mr-10 xl:mt-0 xl:ml-20 xl:mr-0">
          <Link href="#">
            <Image src={Spotify} alt="podcast img" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default LogoList;
