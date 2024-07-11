import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

import renderStars from "@/helpers/renderStars";
import { useGetProductsQuery } from "@/redux/api/api";
import { Product } from "@/helpers/Products";


const FeaturedSection = () => {
    const { data, isLoading, isError } = useGetProductsQuery({ searchTerm: "", category: "" });
    
       
       
  

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    const products = data?.data?.slice(0, 5)


    return (
        <div className="lg:mt-20 lg:px-20 my-10  px-5 font-serif">
            <div className=" ">
                <h1 className="lg:text-5xl text-2xl font-extrabold">Featured</h1>
                <Carousel className="  lg:my-10 my-5">
                    <CarouselContent className=" lg:gap-10 md:px-7  gap-5 px-4 mb-5 ">
                        {products.map((product: Product) => (
                            <CarouselItem
                                className="lg:basis-[32%] hover:scale-90 py-1 rounded-lg  transition-all ease-in 3s"
                                key={product._id} // Add a unique key prop for each item in the map function
                            >
                                <div className="w-80  bg-white rounded-lg shadow-md  transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="w-full h-40 object-cover rounded-t-lg" src={product.image} alt={product.name} />
                                    <div className="p-4">
                                        <div className="flex justify-between">
                                            <h2 className="text-lg  font-semibold">{product.name}</h2>
                                        </div>
                                        <div className="flex gap-2">{renderStars(product.rating)}</div>
                                        <div dangerouslySetInnerHTML={{
                                            __html: product.description.length > 10 ? `
                    ${product.description.slice(0, 50)}...` : product.description
                                        }} />

                                        <div className=" flex justify-between">
                                            <div>
                                                <h5 className="text-black">Category: {product.category}</h5>
                                                <h5 className="text-black">brand : {product.brand}</h5>
                                            </div>
                                            <div>
                                                <h5 className="text-black font-normal border-b-2 border-lime-500">Price: {product.price}</h5>
                                                <h5 className="text-black">Stock: {product.stockQuantity}</h5>
                                            </div>
                                        </div>
                                        <Link to={`/singleproduct/${product._id}`}>
                                            <Button variant="outline" className="text-black mt-2 bg-lime-300 w-full">
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="lg:ml-[0px] ml-[50px] bg-black text-white hover:bg-black hover:text-white" />
                    <CarouselNext className="lg:mr-[0px] mr-[50px] bg-black text-white border-none hover:bg-black hover:text-white" />
                </Carousel>
            </div>
        </div>
    );
};

export default FeaturedSection;
