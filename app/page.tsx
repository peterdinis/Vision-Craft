import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import HeroServices from './_components/hero/HeroServices';
import HeroPricing from './_components/hero/HeroPricing';
import Footer from './_components/shared/Footer';

const Homepage: NextPage = () => {
    return (
        <>
            <HeroWrapper />
            <HeroServices />
            <HeroPricing />
            <Footer />
        </>
    );
};

export default Homepage;
