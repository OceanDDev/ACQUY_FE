import axios from "axios";

const DEF_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const apiEndpoint = import.meta.env.VITE_API;

// Tạo instance axios
const ApiServer = axios.create({
  baseURL: apiEndpoint,
  headers: DEF_HEADERS,
});

// ==================== INTERCEPTORS ====================

// Request Interceptor: CHỈ thêm token cho API admin
ApiServer.interceptors.request.use(
  (config) => {
    const requestUrl = config.url || "";

    // CHỈ thêm token nếu là admin API
    if (requestUrl.includes("/admin/")) {
      const token = localStorage.getItem("admin_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Xử lý khi token hết hạn (401)
ApiServer.interceptors.response.use(
  (response) => response,
  (error) => {
    // Nếu lỗi 401 (Unauthorized)
    if (error.response?.status === 401) {
      const requestUrl = error.config?.url || "";
      const isAdminAPI = requestUrl.includes("/admin/");
      const isCurrentlyOnAdminPage =
        window.location.pathname.startsWith("/admin");

      // CHỈ redirect nếu:
      // 1. Là admin API
      // 2. Đang ở trang admin
      // 3. Không phải đang ở trang login
      if (
        isAdminAPI &&
        isCurrentlyOnAdminPage &&
        !window.location.pathname.includes("/admin/login")
      ) {
        console.warn("🔐 Token hết hạn, chuyển về trang login");
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_user");
        window.location.href = "/admin/login";
      } else if (!isAdminAPI) {
        // Public API bị 401 - chỉ log, không redirect
        console.warn("⚠️ Public API trả về 401:", requestUrl);
      } else if (isAdminAPI && !isCurrentlyOnAdminPage) {
        // Đang ở trang public nhưng gọi admin API - KHÔNG redirect
        console.warn(
          "⚠️ Trang public đang gọi Admin API và bị 401:",
          requestUrl
        );
      }
    }
    return Promise.reject(error);
  }
);

// ==================== URL ENDPOINTS ====================

const ENDPOINT_PREFIX = "/api";

const URL = {
  // Sản phẩm (Public)
  products: {
    list: ENDPOINT_PREFIX + "/products",
  },

  // Categories (Public) - THÊM MỚI
  categories: {
    list: ENDPOINT_PREFIX + "/categories",
  },

  // Admin - Products
  ad_products: {
    list: ENDPOINT_PREFIX + "/admin/products",
    create: ENDPOINT_PREFIX + "/admin/products",
    createMany: ENDPOINT_PREFIX + "/admin/products/bulk",
  },

  // Admin - Categories
  ad_categories: {
    list: ENDPOINT_PREFIX + "/admin/categories",
    create: ENDPOINT_PREFIX + "/admin/categories",
  },

  // Admin - Auth
  auth: {
    login: ENDPOINT_PREFIX + "/admin/login",
    logout: ENDPOINT_PREFIX + "/admin/logout",
  },

  // Admin - Users
  ad_users: {
    list: ENDPOINT_PREFIX + "/admin/users",
    create: ENDPOINT_PREFIX + "/admin/users",
  },
};

export { URL, ApiServer, DEF_HEADERS };
