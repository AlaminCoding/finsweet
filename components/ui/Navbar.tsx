import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.png";

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
