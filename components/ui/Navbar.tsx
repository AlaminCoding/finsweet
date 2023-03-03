import Link from "next/link";
import Logo from "@/public/Logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[72px] flex justify-between items-center">
      <Link href="/" className="block">
        <Image src={Logo} alt="Website Main Logo" priority />
      </Link>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
