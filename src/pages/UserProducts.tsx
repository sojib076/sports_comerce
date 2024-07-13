/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteProductMutation, useGetProductsQuery } from '@/redux/api/baseApi';
import { Loader2Icon, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const UserProducts = () => {
    const { data, isLoading } = useGetProductsQuery({ searchTerm: "", category: "" });
    const products = data?.data

    const [deleteProduct] = useDeleteProductMutation();

    const handleDeleteProduct = async (productId: string) => {

        try {
            await deleteProduct(productId);
            toast.success('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (isLoading) return <div className=''>
        <h1 > <Loader2Icon className='animate-spin w-[40%] h-[100vh]  mx-auto'></Loader2Icon> </h1>
    </div>;


    return (
        <div>
            <div className="p-10  font-['Fredoka'] ">
                <h1> All Products </h1>
                <Table>
                    <TableCaption>  </TableCaption>
                    <TableHeader>
                        <TableRow>

                            <TableHead>  Name</TableHead>
                            <TableHead > Update </TableHead>
                            <TableHead > Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {products ? products.map((product: any) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell className="">
                                    <Link to={`/manageproducts/updateproduct/${product._id}`}>
                                        <Button variant="secondary" color="primary" className="mt-2">
                                            Update Data
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell className="">
                                    <Button variant="outline" className="mt-2 ml-2 bg-red-400 hover:scale-90"
                                        onClick={() => handleDeleteProduct(product._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))
                            : 'no thing found'
                        }

                    </TableBody>
                </Table>
            </div>

        </div>
    )
}

export default UserProducts;