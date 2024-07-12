

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import renderStars from "@/helpers/renderStars";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/features/products/singleproductslice";
import { useGetSingleProductQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const Singleproduct = () => {
  const [currentStock, setCurrentStock] = useState(0);
  const [loading,setLoading]= useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useAppDispatch();
  const { id } = useParams()
  const { data: product, isLoading } = useGetSingleProductQuery(id as string)

  const data = product?.data
  useEffect(() => {
    if (product) {
      setCurrentStock(product.data.stockQuantity);
    }
  }, [product]);

  if (isLoading) return <div className=''>
    <h1 > <Loader2Icon className='animate-spin w-[40%] h-[100vh]  mx-auto'></Loader2Icon> </h1>
  </div>;

  const handelcart = () => {
    setLoading(true)

    if (currentStock > 0) {
      dispatch(addProduct({
        id: id,
        name: data.name,
        price: data.price,
        quantity: 1,
        stock: data.stockQuantity
      }));
      setCurrentStock(currentStock - 1);
      toast.success("Product Added To Cart");
      setLoading(false)
    } else {
      toast.warning(`Not enough stock. Only ${data.stockQuantity} product(s) left.`);
    }
  };


  return (
    <>
      <div className="grid lg:grid-cols-2 lg:p-10 overflow-hidden ">
        <div className="flex  flex-col-reverse justify-evenly ">
          <div className=" lg:w-[75%] lg:h-[90%]">
            <img src={data.image} alt="jacket" className="lg:w-[90%] w-[80%] ml-10  " />
          </div>

        </div>
        <div>
          <div className=" w-[95%]  lg:mt-[5%]   px-4 lg:p-0">
            <h1 className=" lg:text-4xl text-xl font-semibold text-gray-800">
              {data?.name}
            </h1>
            <div className="flex justify-start gap-10 items-center ">
              <h5 className="my-2 font-bold text-3xl" >  {data.price} $ </h5>
              <div className="flex gap-2"> {renderStars(data.rating)}</div>

            </div>
            <div className="flex justify-between ">
              <h5 className="font-semibold " > Category : {data.category}  </h5>
              <h6 className=" font-semibold " > Stock: {data.stockQuantity}</h6>
              <h6 className=" font-semibold " > Brand: {data.brand}</h6>
            </div>
            <hr className="bg-black my-2 " />
            <div dangerouslySetInnerHTML={{
              __html: 
   data.description
            }} />
            <div className="mt-4">
              {

                data.stockQuantity > 0 ?
                 <Button
                  variant="outline"
                  onClick={handelcart} className="bg-lime-300 text-black w-full hover:scale-90" > 
                    {
                      loading && loading ? <Loader2Icon className='animate-spin w-[40%]   mx-auto'></Loader2Icon> : ' Add To Cart'
                    }
                   </Button> : <Button className="bg-black text-white w-full" disabled> Out Of Stock </Button>
              }
            </div>


          </div>
        </div>
      </div>

      <h6 className="my-10 lg:text-4xl font-sans font-semibold bg-lime-400 w-fit mx-auto py-4 px-10 rounded-sm">
        Related Products
      </h6>

    </>

  );
};

export default Singleproduct