import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Product from "./page/Product";
import Detail from "./page/Detail";
import AdminLayout from "./page/HomeAdmin";
import Categories from "./modules/Admin/Category/categories";
import AdminLogin from "./modules/Admin/Login/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import { authService } from "./service/Admin/auth.service";
import Products from "./modules/Admin/Product/Products";
import About from "./page/About";
import Services from "./page/Service";
import Contacts from "./page/Contacts";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // DEBUG LOG
  console.log("===================");
  console.log("Current URL:", window.location.href);
  console.log("Current pathname:", location.pathname);
  console.log("Is admin route:", isAdminRoute);
  console.log("===================");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}

      <div className="flex-grow">
        <Routes>
          {/* ========== ROUTES CÔNG KHAI ========== */}
          <Route path="/" element={<Home />} />

          <Route
            path="/san-pham"
            element={
              <div>
                <Product />
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chi-tiet-san-pham/:slug" element={<Detail />} />

          {/* ========== ADMIN LOGIN ========== */}
          <Route
            path="/admin/login"
            element={
              authService.isAuthenticated() ? (
                <Navigate to="/admin/categories" replace />
              ) : (
                <AdminLogin />
              )
            }
          />

          {/* ========== ROUTES ADMIN ========== */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Navigate to="/admin/categories" replace />}
            />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
          </Route>

          {/* Catch-all route */}
          <Route
            path="*"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>404 - Không tìm thấy trang</h1>
                <p>Path: {location.pathname}</p>
              </div>
            }
          />
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
