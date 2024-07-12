import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import AOS from 'aos';
import bannerimagethree from '../assets/aboutpage.jfif';
import { Button } from '@/components/ui/button';
import memeberone from '../assets/ab_team_03.jpg';
import memebertwo from '../assets/ab_team_04.jpg';
import ContactSection from '@/components/HomeCo/ContactSection';

const About = () => {
    AOS.init();
    return (
        <>
            <div>
                <div className="relative w-full lg:h-[100vh] h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerimagethree})` }}>
                    <div className="lg:w-[600.14px] w-[60%] relative z-20 lg:top-20 top-10 lg:left-[50%] left-10 flex flex-col items-start lg:ml-7   rounded-lg">
                        <h1 className="lg:text-lg font-sans font-extrabold text-white">

                            DS SPORTS ACCESSORIES <br />
                        </h1>
                        <h1 className="lg:text-[90px] lg:leading-[85px] text-5xl font-serif font-bold text-white mt-2 ">
                            Where champions <br /> gear up

                        </h1>
                        <Button variant={'outline'} className="mt-10  text-black hover:scale-90 trasition-all ease-in-out duration-300">Contact Us </Button>
                    </div>
                </div>

            </div>
            <div className=" lg:p-20 mt-10 px-5">
                <div className="flex flex-col-reverse lg:flex-row-reverse items-center">
                    <div className="lg:w-[50%] text-left">
                        <h1 className="text-xl md:text-4xl font-bold lg:mt-0 mt-10">
                            DS SPORTS ACCESSORIES Best in the Business
                        </h1>
                        <p className="py-6">
                            DS ACCESSORIES Company founded on 2023 by Mr. Sojib . We Provide best quality sports accessories in the market. We have a team of professionals who are dedicated to providing the best quality products to our customers. We have a wide range of products that are suitable for all types of sports. We are committed to providing the best customer service and satisfaction. We are always looking for ways to improve our products and services to meet the needs of our customers. We are proud to be one of the leading sports accessories companies in the market.

                        </p>
                        <div className="flex justify-between text-center">
                            <div>
                                <div className="text-sm md:text-2xl font-bold">2 years</div>
                                <div className="text-sm ">Experience</div>
                            </div>
                            <div>
                                <div className="text-sm md:text-2xl font-bold">2k</div>
                                <div className="text-sm">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-sm md:text-2xl font-bold">100%</div>
                                <div className=" text-sm">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-[90%] ">
                        <img
                            src={memebertwo} // Replace this URL with the actual image URL
                            alt="Fashion Trends"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </div>
            <div className='  px-5'>
                <h1 className='text-center lg:text-7xl font-sans font-extrabold text-black'>
                    Meet the  team
                </h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-y-5 my-10 lg:px-20'>
                    <div className="   hover:scale-90 transition-all ease-linear  w-[330px] bg-white m-auto shadow-md shadow-gray-400  overflow-hidden relative group  z-0">
                        <div className="circle absolute h-[10em] w-[100px] bottom-[2.5em]  right-[2.5em] rounded-full 
                    bg-lime-400 group-hover:bg-lime-300 group-hover:scale-[800%] duration-500 z-[-1]">

                        </div>
                        <img src={memeberone} alt="Product" className="w-[90%] mx-auto pt-2 rounded-xl   mb-2" />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-black duration-500 text-xl mb-2 text-center py-2">
                            John Doe
                        </h1>


                    </div>

                    <div className="   hover:scale-90 transition-all ease-linear  w-[330px] bg-white m-auto shadow-md shadow-gray-400  overflow-hidden relative group  z-0">
                        <div className="circle absolute h-[10em] w-[100px] bottom-[2.5em]  right-[2.5em] rounded-full 
                    bg-lime-400 group-hover:bg-lime-300 group-hover:scale-[800%] duration-500 z-[-1]">

                        </div>
                        <img src={memeberone} alt="Product" className="w-[90%] mx-auto pt-2 rounded-xl   mb-2" />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-black duration-500 text-xl mb-2 text-center py-2">
                            John Doe
                        </h1>


                    </div>
                    <div className="   hover:scale-90 transition-all ease-linear  w-[330px] bg-white m-auto shadow-md shadow-gray-400  overflow-hidden relative group  z-0">
                        <div className="circle absolute h-[10em] w-[100px] bottom-[2.5em]  right-[2.5em] rounded-full 
                    bg-lime-400 group-hover:bg-lime-300 group-hover:scale-[800%] duration-500 z-[-1]">

                        </div>
                        <img src={memeberone} alt="Product" className="w-[90%] mx-auto pt-2 rounded-xl   mb-2" />
                        <h1 className="z-20 font-bold font-Poppin group-hover:text-black duration-500 text-xl mb-2 text-center py-2">
                            John Doe
                        </h1>

                    </div>
                </div>

            </div>
            <ContactSection />
            <div className="lg:w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9230354376946!2d90.11047050831803!3d23.60709303203826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37558fc491142013%3A0x76e743125e36754b!2z4Kau4Ka-4Kad4Ka_4KawIOCmmuCmsCDgpqzgpr_gprLgpr7gprjgpqrgp4HgprAg4Kam4KeL4Ka54Ka-4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sen!2sbd!4v1720798176860!5m2!1sen!2sbd"
        className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full lg:h-screen"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
    ></iframe>
</div>
        </>
    );
};

export default About;