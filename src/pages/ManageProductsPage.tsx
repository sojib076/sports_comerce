import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateProductMutation, useGetProductsQuery } from "@/redux/api/baseApi";
import {  Star } from "lucide-react";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Rating from "react-rating";
import { toast } from "sonner";


const ManageProductsPage = () => {
    const [ratingValue, setRatingValue] = useState(0);

    const [editorValue, setEditorValue] = useState<string>('');

    const [createProduct] = useCreateProductMutation();
    const {  data,refetch } = useGetProductsQuery({ searchTerm: "", category: "" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const datas = data?.data;
    console.log(datas);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
    
        e.preventDefault();
        const { name, category, stockquantity, brand, image, price } = e.target.elements;
        const formdata = {
            name: name.value,
            category: category.value,
            stockQuantity: stockquantity.value,
            brand: brand.value,
            image: image.value,
            rating: ratingValue,
            price: price.value,
            description: editorValue
        }
    
        try {
            createProduct(formdata) 
            refetch();
            toast.success("Product added successfully");
         
        } catch (error) {
            console.log(error);
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
                        Please add Your Products Details
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
                            <input id="name" type="text" placeholder=" Product Name " className="p-2 w-full border border-gray-300 rounded-md" required />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <input id="category" type="text" placeholder="Category " className="p-2 w-full border border-gray-300 rounded-md" required />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <input id="stockquantity" type="number" placeholder=" stock quantity " className="p-2 w-full border border-gray-300 rounded-md" required />
                        </div>
                        <div>
                            <div className="grid gap-2 mb-4">
                                <input id="brand" type="text" placeholder="Brand" className="p-2 w-full border border-gray-300 rounded-md" required />
                            </div>
                            <div className="grid gap-2 mb-4">
                                <input id="price" type="number" step="0.01" placeholder="Price" className="p-2 w-full border border-gray-300 rounded-md" required />
                            </div>
                            <div className="grid gap-2 mb-4">
                                <input id="image" type="text" step="0.01" placeholder="Image" className="p-2 w-full border border-gray-300 rounded-md" required />
                            </div>








                            {/* @ts-expect-error their is no type declaration file for react rating*/}
                            <Rating
                                emptySymbol={<Star size={40} color="orange" />}
                                fullSymbol={<Star size={40} color="orange" fill="orange" />}
                                fractions={2}
                                initialRating={ratingValue}
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

export default ManageProductsPage;