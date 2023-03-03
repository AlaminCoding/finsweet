import Articles from "@/components/blocks/Articles";
import Episods from "@/components/blocks/Episods";
import Hero from "@/components/blocks/Hero";
import LogoList from "@/components/blocks/LogoList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finsweet | Home</title>
      </Head>
      <Hero
        title_text={"Become The Hero Of Your Own Story"}
        brief={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
        }
        button_text={"Subscribe"}
        input_field={true}
        image_box={true}
      />
      <LogoList />
      <Episods />
      <Articles />
    </>
  );
}
