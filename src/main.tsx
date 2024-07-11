import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AllProductsPage from "./pages/AllProductsPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ManageProductsPage from "./pages/ManageProductsPage.tsx";
import SingleProductPage from "./pages/SingleProductPage.tsx";
import Cart from "./pages/Cart.tsx";
import MainLayout from "./layout/ManageLayout.tsx";
import UserProducts from "./pages/UserProducts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/allproducts",
        element: <AllProductsPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: '/singleproduct/:id',
        element: <SingleProductPage />
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ]
  },
  {
    path: "/manageproducts",
    element: <MainLayout />,
    children:[
      {
        path: "",
        element: <ManageProductsPage></ManageProductsPage>
      },
      {
        path: "userproducts",
        element: <UserProducts/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
