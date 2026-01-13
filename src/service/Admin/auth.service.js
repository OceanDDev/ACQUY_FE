import { ApiServer, URL } from "../../configs/api-request";

/* ===================== ĐĂNG NHẬP ADMIN ===================== */
const login = async (payload) => {
  try {
    const results = await ApiServer.post(URL.auth.login, payload);

    // Lưu token và thông tin user vào localStorage
    if (results.data.token) {
      localStorage.setItem("admin_token", results.data.token);
      localStorage.setItem("admin_user", JSON.stringify(results.data.user));
    }

    return results.data;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error;
  }
};

/* ===================== ĐĂNG XUẤT ADMIN ===================== */
const logout = async () => {
  try {
    await ApiServer.post(URL.auth.logout);

    // Xóa token và user khỏi localStorage
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");

    // Chuyển về trang login
    window.location.href = "/admin/login";
  } catch (error) {
    console.error("Lỗi khi đăng xuất:", error);

    // Vẫn xóa token dù có lỗi
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    window.location.href = "/admin/login";
  }
};

/* ===================== LẤY THÔNG TIN USER ĐANG ĐĂNG NHẬP ===================== */
const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("admin_user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin user:", error);
    return null;
  }
};

/* ===================== LẤY TOKEN ===================== */
const getToken = () => {
  return localStorage.getItem("admin_token");
};

/* ===================== KIỂM TRA ĐĂNG NHẬP ===================== */
const isAuthenticated = () => {
  const token = localStorage.getItem("admin_token");
  return !!token;
};

/* ===================== XÓA TOKEN (LOGOUT LOCAL) ===================== */
const clearAuth = () => {
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_user");
};

/* ===================== EXPORT AUTH SERVICE ===================== */
export const authService = {
  login,
  logout,
  getCurrentUser,
  getToken,
  isAuthenticated,
  clearAuth,
};
