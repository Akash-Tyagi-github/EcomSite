import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home"
import Products from "./components/Products.js"
import SingleProduct from "./components/SingleProduct"
import About from  "./components/About"
import ErrorPage from "./components/ErrorPage"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Header from"./components/Header"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
