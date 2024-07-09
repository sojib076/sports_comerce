import Banner from "@/components/HomeCo/Banner";
import Category from "@/components/HomeCo/Category";
import ContactSection from "@/components/HomeCo/ContactSection";
import FeaturedSection from "@/components/HomeCo/FeaturedSection";

const Home = () => {
    return (
        <div className="font-sans">
            <Banner />
            <FeaturedSection />
            <Category />
            <ContactSection/>
        </div>
    );
};

export default Home;