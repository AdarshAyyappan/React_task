import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header.js'
import Productlist from './Component/Productlist.js';
import Product from "./Component/Product.js";
import { AuthProvider } from "./Component/AuthContext";
function App() {
  return (
    <>
    <AuthProvider>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/React-mini-task" element={<Productlist/>} />
        <Route path="/product" element={<Product/>} />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
