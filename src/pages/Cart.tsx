/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { decreaseProductQuantity, productstock, removeProduct, updateProductQuantity } from "@/redux/features/products/singleproductslice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { useCheckStockStatusQuery } from "@/redux/api/api";




const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.products) || [];

  const productIds = cart.map((product) => product.id);
  const { data: stockStatus} = useCheckStockStatusQuery(productIds, { skip: productIds.length === 0 });

  useEffect(() => {
    if (stockStatus) {
      stockStatus?.data?.forEach((status:any) => {
        dispatch(productstock({ id: status.id, stock: status.stock }));
      });
    }
  }, [stockStatus, dispatch]);

  const handleIncreaseQuantity = (id:string) => {
    const product = cart.find((p) => p.id === id);
    if (product && product.stock > 0 && product.quantity < product.stock) {
      dispatch(updateProductQuantity({ id, quantity: product.quantity + 1 }));
    } else {
      toast.warning("NO MORE STOCK AVAILABLE");
    }
  };

  const handleDecreaseQuantity = (id:string) => {
    const product = cart.find((p) => p.id === id);
    if (product && product.quantity > 1) {
      dispatch(decreaseProductQuantity({ id, quantity: 1 }));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const calculateTax = (subtotal:number) => {
    return subtotal * 0.15;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  const isOutOfStock = cart.some((product) => product.quantity > product.stock);

  const handleCheckout = () => {
    if (isOutOfStock) {
      toast.warning("Some items in your cart are out of stock.");
    } else {
      
      navigate("/checkout");
    }
  };

  return (
    <div>
      <div className="py-20 relative lg:px-20">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
          <h2 className="font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
          {cart.map((product) => (
            <div key={product.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
              <Button onClick={() => dispatch(removeProduct(product.id))}>
                <X size={16} />
              </Button>

              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-bold text-2xl text-gray-900">{product.name}</h5>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6 lg:block hidden">
                  Introducing our sleek round white portable speaker, the epitome of style and sound! Elevate your auditory experience with this compact yet powerful device that delivers crystal-clear audio wherever you go. <a href="#" className="text-lime-600">More....</a>
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="group rounded-full border border-gray-200 shadow-sm p-2.5 flex items-center justify-center"
                      disabled={product.stock <= 0}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="text"
                      value={product.quantity}
                      readOnly
                      className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-black font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                    />
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="group rounded-full border border-gray-200 shadow-sm p-2.5 flex items-center justify-center"
                      disabled={product.stock <= 0}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <h6 className="text-black font-bold text-2xl leading-9 text-right">${product.price * product.quantity}</h6>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between lg:px-6 px-3">
            <h5 className="text-black font-semibold text-xl text-left w-full">Subtotal</h5>
            <h6 className="font-bold text-xl leading-10 text-black">${subtotal}</h6>
          </div>
          <hr />
          <div className="flex items-center justify-between lg:px-6 px-3">
            <h5 className="text-black font-semibold text-xl text-left w-full">Tax</h5>
            <h6 className="font-bold text-xl leading-10 text-black">${tax}</h6>
          </div>
          <hr />
          <div className="flex items-center justify-between lg:px-6 px-3">
            <h5 className="text-black font-semibold text-xl text-left w-full">Total</h5>
            <h6 className="font-bold text-xl leading-10 text-black">${total}</h6>
          </div>
          {cart.length > 0 ? (
            <div className="max-lg:max-w-lg max-lg:mx-auto">
              <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Shipping, taxes, and discounts calculated at checkout</p>
              <Button
                variant="outline"
                onClick={handleCheckout}
                disabled={isOutOfStock}
                className="bg-lime-300 text-black w-full"
              >
                Proceed to Checkout
              </Button>
             
            </div>
          ) : (
            <h1 className="text-center text-2xl font-bold">Your Cart is Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
