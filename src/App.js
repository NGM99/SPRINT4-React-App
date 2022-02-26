import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./pages/Sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import { ProductList } from "./pages/products/ProductList";
import { ProductView } from "./pages/productView/ProductView";
import { Error404 } from "./components/Error404";
import { ProductNew } from "./pages/productNew/ProductNew";
import { Profile } from "./components/Profile";
import { Stores } from "./components/Stores";
import { DarkModeContext } from "./context/DarkModeContext";
import "./App.css";

const App = () => {
  return (
    <DarkModeContext>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductView />} />
          <Route path='/products/new' element={<ProductNew />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </DarkModeContext>
  );
};

export default App;
