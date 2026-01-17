// src/service/Admin/news.service.js

import { ApiServer, URL } from "../../configs/api-request";

/* =====================================================
   NEWS SERVICE - QUẢN LÝ TIN TỨC
===================================================== */

/* ===================== LẤY DANH SÁCH NEWS (PUBLIC) ===================== */
const getList = async (params = {}) => {
  try {
    const results = await ApiServer.get(URL.news.list, { params });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tin tức:", error);
    throw error;
  }
};

/* ===================== LẤY DANH SÁCH NEWS (ADMIN) ===================== */
const getAdminList = async (params = {}) => {
  try {
    const results = await ApiServer.get(URL.ad_news.list, { params });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tin tức (admin):", error);
    throw error;
  }
};

/* ===================== LẤY CHI TIẾT NEWS ===================== */
const getDetail = async (slug) => {
  try {
    const results = await ApiServer.get(`${URL.news.list}/${slug}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết tin tức:", error);
    throw error;
  }
};

/* ===================== TẠO NEWS MỚI (ADMIN) ===================== */
const create = async (payload) => {
  try {
    const config =
      payload instanceof FormData
        ? {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        : {};

    const results = await ApiServer.post(URL.ad_news.create, payload, config);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi tạo tin tức:", error);
    throw error;
  }
};

/* ===================== CẬP NHẬT NEWS (ADMIN) ===================== */
const update = async (id, payload) => {
  try {
    // Laravel controller dùng POST /api/news/{id} cho update với form-data
    const results = await ApiServer.post(`${URL.ad_news.list}/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return results.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật tin tức:", error);
    throw error;
  }
};

/* ===================== XÓA NEWS (ADMIN) ===================== */
const deleteNews = async (id) => {
  try {
    const results = await ApiServer.delete(`${URL.ad_news.list}/${id}`);
    return results.data;
  } catch (error) {
    console.error("Lỗi khi xóa tin tức:", error);
    throw error;
  }
};

/* ===================== EXPORT ===================== */
export const newsService = {
  // Public
  getList,
  getDetail,

  // Admin
  getAdminList,
  create,
  update,
  deleteNews,
};
