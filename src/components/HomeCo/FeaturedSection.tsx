/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import renderStars from "@/helpers/renderStars";
import { useGetProductsQuery } from "@/redux/api/api";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";


const FeaturedSection = () => {
  const { data, isLoading, isError, refetch} = useGetProductsQuery({ searchTerm: "", category: "" });
  const products = data?.data?.slice(0, 3) || [];
    useEffect(() => {
      const timer = setTimeout(() => {
        refetch();
      
      }, 30000);
      return () => clearTimeout(timer);
    }, [products]);


  if (isLoading)
    return (
      <div className="">
        <h1>
          <Loader2Icon className="animate-spin w-[40%] h-[50vh] mx-auto"></Loader2Icon>
        </h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>Error Happened, please try later</h1>
      </div>
    );

 


  return (
    <div className="lg:mt-20 lg:px-20 my-5 px-5 font-serif">
      <div className="">
        <h1 className="lg:text-5xl text-2xl font-extrabold  p-1 border-b-2 border-lime-500 w-fit">Featured</h1>
        <Carousel className="lg:my-10">
          <CarouselContent className="lg:gap-10 md:px-7 gap-5 px-4 mb-5">
            {products.map((product:any) => (
            <CarouselItem
            className="lg:basis-[32%] hover:scale-90 py-1 rounded-lg transition-all ease-in 3s"
            key={product._id}
          >
            <div className="w-80 h-[420px] bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img className="w-[100%]  h-[180px] rounded-t-lg" src={product.image} alt={product.name} />
              <div className="p-4">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold truncate" style={{ maxWidth: '75%' }}>{product.name}</h2>
                </div>
                <div className="flex gap-2">{renderStars(product.rating)}</div>
                <div
                  className="text-sm overflow-hidden text-ellipsis"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: product.description.length > 50 ? `${product.description.slice(0, 50)}...` : product.description,
                  }}
                />
                <div className="flex justify-between mt-2">
                  <div className="w-1/2">
                    <h5 className="text-black truncate">Category: {product.category}</h5>
                    <h5 className="text-black truncate">Brand: {product.brand}</h5>
                  </div>
                  <div className="w-1/2">
                    <h5 className="text-black font-normal border-b-2 border-lime-500 truncate">Price: {product.price}$</h5>
                    <h5 className="text-black truncate">Stock: {product.stockQuantity}</h5>
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
          <CarouselPrevious className="lg:hidden flex lg:ml-[0px] ml-[40px] bg-black text-white hover:bg-black hover:text-white" />
          <CarouselNext className="lg:mr-[0px] lg:hidden flex mr-[40px] bg-black text-white border-none hover:bg-black hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedSection;
