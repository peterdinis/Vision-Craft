import { NextPage } from "next";
import HeroWrapper from "./_components/hero/HeroWrapper";
import HeroServices from "./_components/hero/HeroServices";
import Footer from "./_components/shared/Footer";

const Homepage: NextPage = () => {
  return (
    <>
      <HeroWrapper />
      <HeroServices />
      <Footer />
    </>
  )
}

export default Homepage;