import { ReactNode } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Inter } from "next/font/google";
import Copyright from "@/components/ui/Copyright";
import LogoListCenter from "@/components/blocks/LogoListCenter";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className={inter.className}>
      <header className="container mx-auto px-[20px] sm:px-0">
        <Navbar />
      </header>
      <div className="container mx-auto px-[20px] sm:px-0">
        {children}
        <LogoListCenter />
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
      <Copyright />
    </main>
  );
};

export default Layout;
