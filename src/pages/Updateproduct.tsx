import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetSingleProductQuery, useUpdateProductMutation } from "@/redux/api/api";
import {  Star } from "lucide-react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { toast } from "sonner";


const Updateproduct = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const [editorValue, setEditorValue] = useState<string>('');
    const { id } = useParams()
  const { data: product ,refetch} = useGetSingleProductQuery(id as string)
  const [updateProduct] = useUpdateProductMutation();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
    
        e.preventDefault();
        const { name, category, stockquantity, brand, image, price } = e.target.elements;
        const formdata = {
            name: name.value ? name.value : product?.data.name,
            category: category.value ? category.value : product?.data.category,
            stockQuantity: stockquantity.value ? stockquantity.value : product?.data.stockQuantity,
            brand: brand.value ? brand.value : product?.data.brand,
            image: image.value ? image.value : product?.data.image,
            rating: ratingValue ? ratingValue : product?.data.rating,
            price: price.value ? price.value : product?.data.price,
            description: editorValue ? editorValue : product?.data.description,
        }
        try { 
            updateProduct({id:id as string,body:formdata})
            refetch();
            toast.success("Product UPdated successfully");
         
        } catch (error) {
            
            toast.error("Something went wrong");
        }


    }
    const handleChange = (value: string) => {
        setEditorValue(value);
    };
    return (
        <div>
            <Card className="font-serif">
                <CardHeader className="space-y-1 ml-10 ">
                    <CardTitle className="text-2xl">
                        Please  Update Product
                    </CardTitle>

                    <CardDescription>
                        Site Under Development , Please upload the image somewhere and share the link
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                    </div>

                    

                    <form onSubmit={handleSubmit} className="p-6 border border-gray-300 rounded-md">
                        <div className="grid gap-2 mb-4">
                            <input id="name" type="text" placeholder={product?.data.name} className="p-2 w-full border border-gray-300 rounded-md"  />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <input id="category" type="text" placeholder={product?.data.category}  className="p-2 w-full border border-gray-300 rounded-md"  />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <input id="stockquantity" type="number" placeholder={product?.data.stockQuantity}  className="p-2 w-full border border-gray-300 rounded-md"  />
                        </div>
                        <div>
                            <div className="grid gap-2 mb-4">
                                <input id="brand" type="text" placeholder={product?.data.brand}  className="p-2 w-full border border-gray-300 rounded-md"  />
                            </div>
                            <div className="grid gap-2 mb-4">
                                <input id="price" type="number" step="0.01" placeholder={product?.data.price} className="p-2 w-full border border-gray-300 rounded-md"  />
                            </div>
                            <div className="grid gap-2 mb-4">
                                <input id="image" type="text" step="0.01" placeholder="Image" className="p-2 w-full border border-gray-300 rounded-md"  />
                            </div>


                            {/* @ts-expect-error their is no type declaration file for react rating*/}
                            <Rating
                                emptySymbol={<Star size={40} color="orange" />}
                                fullSymbol={<Star size={40} color="orange" fill="orange" />}
                                fractions={2}
                                initialRating={product?.data.rating}
                                stop={5}
                                onClick={(value) => setRatingValue(value)}
                            />
                        </div>




                        <ReactQuill

                            value={editorValue}
                            onChange={handleChange}
                            theme="snow"
                            className='h-72 my-5 w-full'
                            
                        />



                        <Button type="submit" variant='outline' className="px-4 py-2 w-full bg-lime-400 text-black  rounded-md  transition-all mt-10 hover:scale-90 font-serif {}">

                            Submit
                            
                        </Button>
                    </form>

                </CardContent>

            </Card>
        </div>
    );
};

export default Updateproduct;