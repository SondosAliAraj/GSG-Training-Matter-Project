import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./views/HomePage";
import ProductListing from "./views/ProductListing";
import NotFound from "./views/NotFound";
import Layout from "./views/Layout";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index  element={<HomePage />} />
            <Route path="productListing" element={<ProductListing />} />
          </Route>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
