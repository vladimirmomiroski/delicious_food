import Navbar from "./components/Layout/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Layout/Main/Main";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Footer from "./components/Layout/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";



function App() {

  return (
    <div className="App">
      <Navbar />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
