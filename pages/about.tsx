import Head from "next/head";
import Hero from "@/components/blocks/Hero";
const About = () => {
  return (
    <>
      <Head>
        <title>Finsweet | About</title>
      </Head>
      <Hero
        title_text={"About Finsweet Podcast"}
        brief={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        }
        button_text={"Subscribe Now!"}
        input_field={false}
        image_box={false}
      />
    </>
  );
};

export default About;
