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
        path:"/allproducts",
        element: <AllProductsPage/>
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path:'/manageproducts',
        element: <ManageProductsPage/>
      },
      {
        path:'/singleproduct',
        element: <SingleProductPage/>
      }
    ]
  },
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
