import { ApiServer, URL } from "../../configs/api-request";

/* =====================================================
   PRODUCT SERVICE - QUẢN LÝ SẢN PHẨM
===================================================== */

/* ===================== LẤY DANH SÁCH PRODUCT (PUBLIC) ===================== */
const getList = async (params = {}) => {
  try {
    const results = await ApiServer.get(URL.products.list, { params });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    throw error;
  }
};

/* ===================== LẤY DANH SÁCH PRODUCT (ADMIN) ===================== */
const getAdminList = async (params = {}) => {
  try {
    const results = await ApiServer.get(URL.ad_products.list, { params });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm (admin):", error);
    throw error;
  }
};

/* ===================== LẤY CHI TIẾT PRODUCT ===================== */
const getDetail = async (slug) => {
  try {
    const results = await ApiServer.get(`${URL.products.list}/${slug}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
    throw error;
  }
};

/* ===================== TẠO PRODUCT MỚI (ADMIN) ===================== */
const create = async (payload) => {
  try {
    // Nếu payload là FormData, cần set header Content-Type
    const config =
      payload instanceof FormData
        ? {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : {};

    const results = await ApiServer.post(
      URL.ad_products.create,
      payload,
      config
    );
    return results.data;
  } catch (error) {
    console.error("Lỗi khi tạo sản phẩm:", error);
    throw error;
  }
};

/* ===================== TẠO NHIỀU PRODUCTS (BULK INSERT - ADMIN) ===================== */
const createMany = async (products) => {
  try {
    const results = await ApiServer.post(URL.ad_products.createMany, {
      products: products,
    });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi tạo nhiều sản phẩm:", error);
    throw error;
  }
};

/* ===================== CẬP NHẬT PRODUCT (ADMIN) ===================== */
const update = async (id, payload) => {
  try {
    // Nếu là FormData, cần chuyển sang POST với _method=PUT
    if (payload instanceof FormData) {
      payload.append("_method", "PUT");

      const results = await ApiServer.post(
        `${URL.ad_products.list}/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return results.data;
    } else {
      // Nếu là JSON, dùng PUT bình thường
      const results = await ApiServer.put(
        `${URL.ad_products.list}/${id}`,
        payload
      );
      return results.data;
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật sản phẩm:", error);
    throw error;
  }
};

/* ===================== XÓA PRODUCT (ADMIN) ===================== */
const deleteProduct = async (id) => {
  try {
    const results = await ApiServer.delete(`${URL.ad_products.list}/${id}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
    throw error;
  }
};

/* ===================== EXPORT ===================== */
export const productService = {
  // Public
  getList,
  getDetail,

  // Admin
  getAdminList,
  create,
  createMany,
  update,
  deleteProduct,
};
