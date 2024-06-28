import { NextPage } from "next";
import HeroWrapper from "./_components/hero/HeroWrapper";
import HeroServices from "./_components/hero/HeroServices";
import HeroPricing from "./_components/hero/HeroPricing";

const Homepage: NextPage = () => {
  return (
    <>
      <HeroWrapper />
      <HeroServices />
      <HeroPricing />
    </>
  );
};

export default Homepage;
