import { FC } from "react";
import LogoWhite from "@/public/Logo-White.png";
import Link from "next/link";
import Image from "next/image";

import ApplePodcast from "@/public/ApplePodcast-White.png";
import SoundCloud from "@/public/Soundcloud-White.png";
import GooglePodcast from "@/public/GooglePodcast-White.png";
import Spotify from "@/public/Spotify-White.png";

const Footer: FC = () => {
  return (
    <div className="pt-[200px] pb-[95px] container mx-auto px-[20px] sm:px-0">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3  lg:w-1/4 px-4">
          <Link href="/">
            <Image src={LogoWhite} alt="footer logo" />
          </Link>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/4 px-4 flex mt-[60px] md:mt-0 justify-start md:justify-center">
          <div>
            <h3 className="text-20 text-white font-bold">Pages</h3>
            <ul className="mt-[32px]">
              <li className="mt-[16px]">
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link href="/" className="text-white">
                  Podcast
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link href="/" className="text-white">
                  Host
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link href="/" className="text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2  md:w-1/3 lg:w-1/4 px-4 flex mt-[60px] md:mt-0 justify-start md:justify-center">
          <div>
            <h3 className="text-20 text-white font-bold">Reach Us</h3>
            <ul className="mt-[32px]">
              <li className="mt-[16px]">
                <Link href="/" className="text-white">
                  Contact
                </Link>
              </li>
              <li className="mt-[16px]">
                <Link href="/about" className="text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 flex mt-[60px] lg:mt-0 justify-start lg:justify-end">
          <div>
            <h3 className="text-20 text-white font-bold">Subscribe</h3>
            <ul className="mt-[32px]">
              <li className="mt-[30px]">
                <Link href="/" className="text-white">
                  <Image src={ApplePodcast} alt="podcast img" />
                </Link>
              </li>
              <li className="mt-[30px]">
                <Link href="/" className="text-white">
                  <Image src={SoundCloud} alt="podcast img" />
                </Link>
              </li>
              <li className="mt-[30px]">
                <Link href="/" className="text-white">
                  <Image src={GooglePodcast} alt="podcast img" />
                </Link>
              </li>
              <li className="mt-[30px]">
                <Link href="/" className="text-white">
                  <Image src={Spotify} alt="podcast img" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
