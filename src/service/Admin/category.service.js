import { ApiServer, URL } from "../../configs/api-request";

/* ===================== LẤY DANH SÁCH CATEGORY (PUBLIC) ===================== */
const getList = async () => {
  try {
    // Dùng API public, không cần token
    const results = await ApiServer.get(URL.categories.list);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách category:", error);
    throw error;
  }
};

/* ===================== LẤY DANH SÁCH CATEGORY (ADMIN) ===================== */
const getAdminList = async () => {
  try {
    // API admin, cần token
    const results = await ApiServer.get(URL.ad_categories.list);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách category (admin):", error);
    throw error;
  }
};

/* ===================== LẤY CHI TIẾT CATEGORY ===================== */
const getDetail = async (id) => {
  try {
    const results = await ApiServer.get(`${URL.ad_categories.list}/${id}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết category:", error);
    throw error;
  }
};

/* ===================== TẠO CATEGORY MỚI (ADMIN) ===================== */
const create = async (payload) => {
  try {
    const results = await ApiServer.post(URL.ad_categories.create, payload);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi tạo category:", error);
    throw error;
  }
};

/* ===================== CẬP NHẬT CATEGORY (ADMIN) ===================== */
const update = async (id, payload) => {
  try {
    const results = await ApiServer.put(
      `${URL.ad_categories.list}/${id}`,
      payload
    );
    return results.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật category:", error);
    throw error;
  }
};

/* ===================== XÓA CATEGORY (ADMIN) ===================== */
const deleteCategory = async (id) => {
  try {
    const results = await ApiServer.delete(`${URL.ad_categories.list}/${id}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi xóa category:", error);
    throw error;
  }
};

/* ===================== EXPORT ===================== */
export const categoryService = {
  getList,           // Public API - không cần token
  getAdminList,      // Admin API - cần token
  getDetail,
  create,
  update,
  deleteCategory,
};