import { NextPage } from "next";
import HeroWrapper from "./_components/hero/HeroWrapper";
import HeroServices from "./_components/hero/HeroServices";
import Footer from "./_components/shared/Footer";
import AboutHero from "./_components/hero/AboutHero";
import HeroPricing from "./_components/hero/HeroPricing";

const Homepage: NextPage = () => {
  return (
    <>
      <HeroWrapper />
      <AboutHero />
      <HeroServices />
      <HeroPricing />
      <Footer />
    </>
  );
};

export default Homepage;
