import Banner from "@/components/HomeCo/Banner";
import Category from "@/components/HomeCo/Category";
import ContactSection from "@/components/HomeCo/ContactSection";
import FeaturedSection from "@/components/HomeCo/FeaturedSection";
import Aos from "aos";

const Home = () => {
 Aos.init({
        duration: 1000,
        offset: 100,
        easing: 'ease-in-out',
        once: false
    });
    return (
        <div className="font-sans overflow-hidden">
            <Banner />
            <FeaturedSection />
            <Category />
            <ContactSection/>
        </div>
    );
};

export default Home;