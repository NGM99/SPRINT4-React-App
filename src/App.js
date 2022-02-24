import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./pages/Sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import { ProductList } from "./pages/products/ProductList";
import { ProductView } from "./pages/productView/ProductView";
import { Error404 } from "./components/Error404";
import "./App.css";

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductView />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
