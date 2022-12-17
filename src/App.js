import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./views/HomePage";
import ProductListing from "./views/ProductListing";
import NotFound from "./views/NotFound";
import Layout from "./views/Layout";
import LoginPage from "./views/LoginPage";
import CartPage from "./views/CartPage";
import ProductDetailsPage from "./views/ProductDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="productListing" element={<ProductListing />} />
            <Route path="myCart" element={<CartPage />} />
            <Route path="productpage" element={<CartPage />} />
            <Route
              path="ProductDetailsPage/:id"
              element={<ProductDetailsPage />}
            />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
