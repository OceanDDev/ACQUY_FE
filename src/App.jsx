import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";       // Nhớ kiểm tra chữ H hoa
import Product from "./page/Product"; // Nhớ kiểm tra chữ P hoa
import Detail from "./page/Detail";   // Nhớ kiểm tra chữ D hoa
  
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow">
        {/* CHỈ DÙNG 1 THẺ ROUTES DUY NHẤT Ở ĐÂY */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/chi-tiet-san-pham" element={<Detail />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App; 