import Navbar from "./components/Layout/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Layout/Main/Main";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ProductDetails' element={<ProductDetails/>} />
      </Routes>
    </Main>
    </div>
  );
}

export default App;
