import { Navigate } from "react-router-dom";
import { authService } from "../service/Admin/auth.service";

const ProtectedRoute = ({ children }) => {
  // Kiểm tra xem user đã đăng nhập chưa
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển về trang login
    return <Navigate to="/admin/login" replace />;
  }

  // Nếu đã đăng nhập, cho phép truy cập
  return children;
};

export default ProtectedRoute;