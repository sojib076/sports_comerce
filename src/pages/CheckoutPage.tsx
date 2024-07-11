/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useUpdateStockStatusMutation } from "@/redux/api/api";
import { resetCheckout } from "@/redux/features/products/singleproductslice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState,  } from "react";
// Import helper functions for calculating subtotal and tax

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        address: ''
    });
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.products); // Assuming you have a slice named 'cart' that stores 
  

    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
      };

      const calculateTax = (subtotal:number) => {
        return subtotal * 0.15;
      };
    
      const subtotal = calculateSubtotal();
      const tax = calculateTax(subtotal);
      const total = subtotal + tax;
      const [updateStockStatus,] = useUpdateStockStatusMutation();


    const handleChange = (e:any) => {
        const { name, value } = e.target;
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const productIds = cart.map((product) => product.id);
        const stockquantity = cart.map((product) => product.quantity);
        updateStockStatus({ productIds, stockquantity });
        dispatch(resetCheckout());
        localStorage.removeItem('persist:root');

    };

    return (
        <div className="px-20 my-10">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>Checkout</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center justify-between">
                <div className="">
                    <form action="" className="flex flex-col gap-5">
                        <input
                            className="border rounded border-gray-300 p-4 lg:w-[500px] text-base placeholder-gray-600 text-gray-600"
                            type="name" placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="border rounded border-gray-300 p-4 lg:w-[500px] text-base placeholder-gray-600 text-gray-600"
                            type="number" placeholder="Your Number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                        <input
                            className="border rounded border-gray-300 p-4 lg:w-[500px] text-base placeholder-gray-600 text-gray-600"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="border rounded border-gray-300 p-4 lg:w-[500px] text-base placeholder-gray-600 text-gray-600"
                            type="address" placeholder="Delivery Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <hr className="border-t-2 border-gray-200" />
                <div className="p-6 rounded-md w-[90%] p">
                    <h2 className="text-3xl font-extrabold text-gray-800">Order Summary</h2>
                    <ul className="text-gray-800 mt-8 space-y-4">
                        {cart.map((product) => (
                            <li key={product.id} className="flex flex-wrap gap-4 text-sm">
                                {product.name} <span className="ml-auto font-bold">${product.price}</span>
                            </li>
                        ))}
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span></li>
                        <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span className="ml-auto">${total.toFixed(2)}</span></li>
                    </ul>
                    <Button onClick={handleSubmit} className="w-full mt-8 text-black hover:scale-90">Cash On Delivery</Button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
