/* eslint-disable @typescript-eslint/no-explicit-any */

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,

    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { toast } from "sonner";
import renderStars from "@/helpers/renderStars";
import { Filter, Loader2Icon, Star } from "lucide-react";
import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/api";
import { Product } from "@/helpers/Products";


const AllProductsPage = () => {
    const [products, setProducts] = useState([] as Product[]);
    const [ratingValue, setRatingValue] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    
    const { data, isLoading, isError,refetch } = useGetProductsQuery({ searchTerm, category});
    const datas = data?.data;
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get('category') || '';
        setCategory(categoryParam);
      }, [location.search]);

   
    useEffect(() => {
        setProducts(datas);
    }, [datas]);

    if (isLoading) return <div className=''> 
    <h1 > <Loader2Icon className='animate-spin w-[40%] h-[50vh]  mx-auto'></Loader2Icon> </h1>
</div>;   



    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        setSearchTerm((target[0] as HTMLInputElement)?.value);
        refetch();
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    const handleSort = (order: string) => {
        const sortedProducts = [...products].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setProducts(sortedProducts);
        toast.success('Sorted Successfully');
    };

    const handleRemoveFilters = () => {
        setProducts(data?.data);
        setSearchTerm('')
        setCategory('')
        refetch();
        toast.success('Filters Removed Successfully');
    };

    const handelcategory = (category: string) => {
        setCategory (category);
    
        toast.success(`Filtered by ${category} Category Successfully`);
    };
    const handelbrand = (brand: string) => {
        const filteredProducts = datas.filter((product: { brand: string; }) => product.brand === brand);
        setProducts(filteredProducts);
        toast.success(`Filtered by ${brand} Category Successfully`);
    };

    const handelrating = (value: number) => {
        setRatingValue(value);
        const filteredProducts = datas.filter((product: { rating: number; }) => product.rating === value);
        setProducts(filteredProducts);
        toast.success(`Filtered by ${value} Rating Successfully`);
    };
    const handelprice = (value: string) => {
        const price = Number(value);
        const filteredProducts = datas.filter((product: { price: number; }) => product.price === price || product.price > price);
        setProducts(filteredProducts);
    }
    return (
        <div>
            <div className="font-sans lg:px-20 lg:py-20 py-5 px-2 ">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/All Products"> All Products</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
                <div className=" grid lg:grid-cols-1 lg:px-10 px-4">
                    <div className="">

                        <h1>
                            <span className="text-2xl font-bold"> </span>
                        </h1>
                        <div className="lg:flex lg:justify-between lg:items-center">
                            <div>
                                <h1 className="mt-4">
                                    All Products
                                </h1>
                            </div>
                            <form onSubmit={handleSearch} className="flex items-center w-full max-w-md mx-auto p-4 bg-white rounded-lg ">
                                <input
                                    type="text"
                                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"

                                    placeholder="Search Products"
                                />
                                <button
                                    type="submit"
                                    className="ml-2 px-4 py-2 text-white bg-lime-500 rounded-lg hover:bg-lime-600  focus:ring-lime-500"
                                >
                                    Search
                                </button>
                            </form>


                            <div className="flex  lg:gap-5 items-center lg:mt-0 mt-2">


                                <Sheet>
                                    <SheetTrigger className="text-xl" ><span className="flex justify-center items-center"> 
                                  
                                    <Filter className="text-sm mt-2"/>   Filter 
                                    </span>
                                   
                                     </SheetTrigger>
                                    
                                    <SheetContent className="overflow-auto">
                                        
                                        <SheetHeader>
                                            <SheetTitle>Sort As your need </SheetTitle>

                                            <div>
                                                <div className="lg:flex items-center justify-between  bg-white rounded-lg my-1 ">
                                                    <button
                                                        onClick={() => handleSort('asc')}
                                                        className="p-2 text-black bg-lime-500 rounded-lg hover:bg-lime-600 mr-1 w-full focus:ring-lime-500 hover:scale-90  transition-all ease-in-out duration-300"
                                                    >
                                                        Price: Low to High
                                                    </button>
                                                    <button
                                                        onClick={() => handleSort('desc')}
                                                        className="p-4 py-2 mt-1  lg:mt-0  w-full text-black bg-lime-500 rounded-lg hover:bg-lime-600  *:
                                                            hover:scale-90  transition-all ease-in-out duration-300
                                                            "
                                                    >
                                                        Price: High to Low
                                                    </button>
                                                </div>

                                                <div className=" my-5">
                                                    <h1 className="text-xs font-semibold font-serif text-black my-1" >Category</h1>
                                                    <div className="flex justify-around">
                                                        <button onClick={() => handelcategory('Shoes')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 ">  Shoes </button>
                                                        <button onClick={() => handelcategory('Boxing')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 "> Boxing </button>
                                                        <button onClick={() => handelcategory('Basketball')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 "> Basketball </button>
                                                    </div>
                                                </div>
                                                <div className=" my-5">
                                                    <h1 className="text-xs font-semibold font-serif text-black my-1" >Brand</h1>
                                                    <div className="flex justify-around">
                                                        <button onClick={() => handelbrand('Nike')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 "> Nike </button>
                                                        <button onClick={() => handelbrand('Everlast')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 ">  Everlast </button>
                                                        <button onClick={() => handelbrand('Adidas')} className="text-black mt-2  font-semibold text-sm border outline-1 p-2 px-4 ">Adidas</button>
                                                    </div>
                                                </div>
                                                <div className="my-5">
                                                    <h1 className="text-xs font-semibold font-serif text-black my-1" > Sort By Price </h1>
                                                    <form>
                                                        <input type="number" placeholder=" Mininum Price  " className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                                                            onChange={(e) => handelprice(e.target.value)} />

                                                    </form>
                                                </div>

                                                <div className=" my-5">
                                                    <h1 className="text-xs my-1 font-semibold font-serif text-black" >Sort By Rating

                                                    </h1>
                                                    <div> {/* @ts-expect-error their is no type declaration file for react rating*/}
                                                        <Rating
                                                            emptySymbol={<Star size={30} color="orange" />}
                                                            fullSymbol={<Star size={30} color="orange" fill="orange" />}
                                                            fractions={2}
                                                            initialRating={ratingValue}
                                                            stop={5}
                                                            onClick={(value) => handelrating(value)}
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={handleRemoveFilters}
                                                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                >
                                                    Clear Filters
                                                </button>

                                            </div>

                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                        <hr className="w-full border-lime-500 my-4" />
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
                            {products?.map((product: Product) => (
                                <div key={product._id} className="lg:w-[100%] bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img className="lg:w-40 w-[50%]  rounded-t-lg ml-20  " src={product.image} alt={product.name} />
                                    <div className="p-4">

                                        <h2 className="text-lg font-semibold w-[90%]">{product.name}</h2>

                                        <div className="flex gap-2"> {renderStars(product.rating)}</div>
                                        <div dangerouslySetInnerHTML={{ __html: product.description.length > 10 ? `
                    ${product.description.slice(0, 50)}...` : product.description }} />
                                        <div className="flex justify-between">
                                            <div>
                                                <h5 className="text-black">Category: {product.category}</h5>
                                                <h5 className="text-black">Brand: {product.brand}</h5>
                                            </div>
                                            <div>
                                                <h5 className="text-black font-normal border-b-2 border-lime-500">Price: {product.price}$</h5>
                                                <h5 className="text-black">Stock: {product.stockQuantity}</h5>
                                            </div>
                                        </div>
                                        <Link to={`/singleproduct/${product._id}`}>
                                            <Button variant="outline" className="text-black mt-2 bg-lime-300 w-full" >
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsPage;