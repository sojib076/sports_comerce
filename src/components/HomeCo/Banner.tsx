import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

import bannerimageone from "@/assets/homesildeone.jpg"
import bannerimagetwo from "@/assets/m1_slide_02.jpeg"
import bannerimagethree from "@/assets/m1_slide_03.jpeg"
import { Button } from "../ui/button";

const Banner = () => {
    return (
        <div className="w-[100%] lg:h-[100vh]  mx-auto">
            <Carousel>
                <CarouselContent >
                <CarouselItem>
                        <div className="relative w-full lg:h-[100vh] h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerimagetwo})` }}>
                            <div className="lg:w-[600.14px] w-[60%] relative z-20 lg:top-40 top-20 lg:left-14 left-10 flex flex-col items-start lg:ml-7   rounded-lg">
                                <h1 className="lg:text-4xl font-sans font-extrabold text-white">
                                    Speicial Offers <br />

                                </h1>
                                <h1 className="lg:text-7xl text-4xl font-sans font-extrabold text-white mt-2">
                                    <span className="text-lime-400"> 10 % Off </span> from 30  December
                                    <br />
                                </h1>
                                <Button className="mt-4  text-black hover:scale-90 trasition-all ease-in-out duration-300">Shop Now</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative w-full lg:h-[100vh] h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerimagethree})` }}>
                            <div className="lg:w-[600.14px] w-[60%] relative z-20 lg:top-40 top-20 lg:left-14 left-10 flex flex-col items-start lg:ml-7   rounded-lg">
                                <h1 className="lg:text-4xl font-sans font-extrabold text-white">
                                    Speicial Offers <br />

                                </h1>
                                <h1 className="lg:text-7xl text-4xl font-sans font-extrabold text-white mt-2">
                                    <span className="text-lime-400"> 10 % Off </span> from 30  December
                                    <br />
                                </h1>
                                <Button className="mt-4  text-black hover:scale-90 trasition-all ease-in-out duration-300">Shop Now</Button>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative w-full lg:h-[100vh] h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerimageone})` }}>
                            <div className="lg:w-[600.14px] w-[60%] relative z-20 lg:top-40 top-20 lg:left-14 left-10 flex flex-col items-start lg:ml-7   rounded-lg">
                                <h1 className="lg:text-4xl font-sans font-extrabold text-white">
                                    Speicial Offers <br />

                                </h1>
                                <h1 className="lg:text-7xl text-4xl font-sans font-extrabold text-white mt-2">
                                    <span className="text-lime-400"> 10 % Off </span> from 30  December
                                    <br />
                                </h1>
                                <Button className="mt-4  text-black hover:scale-90 trasition-all ease-in-out duration-300">Shop Now</Button>
                            </div>
                        </div>
                    </CarouselItem>
                 


                    

                </CarouselContent>

                <CarouselPrevious className="lg:ml-[80px] ml-[50px]" />
                <CarouselNext className="lg:mr-[80px] mr-[50px] " />

            </Carousel>

        </div>
    );
};

export default Banner;