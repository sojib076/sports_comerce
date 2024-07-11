import { createSlice } from '@reduxjs/toolkit';
type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

type CartState = {
  products: Product[];
};
const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    updateProductQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    decreaseProductQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(p => p.id !== action.payload.id);
      }
    },
    productstock: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.stock = action.payload.stock;
      }
    },
    resetCheckout: (state) => {
      state.products = initialState.products;
    },
  },
});

export const {resetCheckout, addProduct, removeProduct, updateProductQuantity, decreaseProductQuantity,productstock  } = cartSlice.actions;

export default cartSlice.reducer;