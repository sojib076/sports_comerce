
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "../ui/carousel";
import {Badge} from "@/components/ui/badge";


const FeaturedSection = () => {
    const product = {
        id: 1,
        name: 'Product 1',
        category: 'Category ',
        stockQuantity: 10,
        brand: 'Brand 1',
        rating: 4.5,
        description: 'This is a product description.',
        price: 99.99,
        image: 'https://via.placeholder.com/150'
    };
    return (
        <div className="lg:mt-20 lg:px-20 my-10  px-5">
            <div className=" ">
                <h1 className="lg:text-5xl text-2xl font-extrabold">
                    Featured
                </h1>
                <Carousel className="  lg:my-10 my-5">
                    <CarouselContent className="  lg:gap-10 md:px-10  gap-5 px-4 mb-5 " >
                        <CarouselItem className="lg:basis-[32%]  border-2 border-black  s
                         hover:scale-90 py-1 hover:shadow-2xl shadow-black rounded-lg  transition-all ease-in 3s ;" >
                            <div className=" lg:w-[290px] md:w-[100%] w-[90%]  h-[370.44px] flex flex-col">
                            
                                <img src={product.image} alt={product.name} className=" h-[40%] rounded-md object-cover " />
                                <div className="flex justify-between py-2"> 
                                <h2 className="text-2xl font-extrabold">{product.name}</h2>
                                <Badge variant="secondary" > {product.rating}</Badge>
                                </div>
                                <p className="text-lg mb-2">{product.description}</p>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold">Price: ${product.price}</p>
                                       
                                        <p className="text-lg font-semibold">Stock: {product.stockQuantity}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">Brand: {product.brand}</p>
                                        <p className="text-lg font-semibold">category: {product.category}</p>
                                    </div>
                                </div>
                                <Button  className="text-black mt-2 bg-lime-300">
                                    View Details
                                </Button>
                            </div>
                        </CarouselItem>













                    </CarouselContent >
                    <CarouselPrevious className="lg:ml-[0px] ml-[50px] bg-black text-white" />
                    <CarouselNext className="lg:mr-[0px] mr-[50px] bg-black text-white border-none " />
                </Carousel>

            </div>
        </div>
    );
};

export default FeaturedSection;