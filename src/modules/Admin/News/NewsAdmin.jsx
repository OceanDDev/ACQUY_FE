// src/pages/Admin/News/NewsAdmin.jsx
import { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  X,
  FileText,
  Image as ImageIcon,
  Eye,
  EyeOff,
  Calendar,
} from "lucide-react";
import { newsService } from "../../../service/Admin/news.service";
import CKEditorComponent from "./CKEditorComponent";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentNews, setCurrentNews] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    status: 1,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Pagination
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (page = 1) => {
    try {
      setLoading(true);
      const response = await newsService.getAdminList({
        page: page,
        per_page: pagination.per_page,
      });

      setNews(response.data);
      setPagination({
        current_page: response.current_page,
        last_page: response.last_page,
        per_page: response.per_page,
        total: response.total,
      });
    } catch (error) {
      alert("Lỗi khi tải tin tức");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setModalMode("create");
    setFormData({ title: "", content: "", status: 1 });
    setCurrentNews(null);
    setImageFile(null);
    setImagePreview(null);
    setShowModal(true);
  };

  const handleEdit = (newsItem) => {
    setModalMode("edit");
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      status: newsItem.status,
    });
    setCurrentNews(newsItem);
    setImageFile(null);
    setImagePreview(
      newsItem.image_url ||
        (newsItem.images ? getImageUrl(newsItem.images) : null)
    );
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2048000) {
        alert("Kích thước ảnh không được vượt quá 2MB");
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      setSubmitting(true);

      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);

      const statusValue =
        formData.status === 0 || formData.status === "0" ? "0" : "1";
      data.append("status", statusValue);

      if (imageFile) {
        data.append("images", imageFile);
      }

      if (modalMode === "create") {
        await newsService.create(data);
        alert("Tạo tin tức thành công!");
      } else {
        await newsService.update(currentNews.id, data);
        alert("Cập nhật tin tức thành công!");
      }

      fetchNews(pagination.current_page);
      setShowModal(false);
    } catch (error) {
      alert(error.response?.data?.message || "Có lỗi xảy ra");
      console.error("Error details:", error.response?.data);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (newsItem) => {
    if (!confirm(`Bạn có chắc muốn xóa tin tức "${newsItem.title}"?`)) {
      return;
    }

    try {
      await newsService.deleteNews(newsItem.id);
      alert("Xóa tin tức thành công!");
      fetchNews(pagination.current_page);
    } catch (error) {
      alert(error.response?.data?.message || "Không thể xóa tin tức");
    }
  };

  const handleToggleStatus = async (newsItem) => {
    try {
      const newStatus = newsItem.status === 1 ? 0 : 1;
      const data = new FormData();
      data.append("title", newsItem.title);
      data.append("content", newsItem.content);
      data.append("status", String(newStatus));

      await newsService.update(newsItem.id, data);
      fetchNews(pagination.current_page);
    } catch (error) {
      alert("Không thể cập nhật trạng thái");
      console.error("Toggle status error:", error.response?.data);
    }
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    if (imagePath.startsWith("/storage/")) {
      return `${import.meta.env.VITE_API_URL}${imagePath}`;
    }
    return `${import.meta.env.VITE_API_URL}/storage/${imagePath}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Quản lý Tin tức
          </h2>
          <p className="text-slate-600 mt-1">
            Tổng cộng{" "}
            <span className="font-bold text-blue-600">{pagination.total}</span>{" "}
            tin tức
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          Thêm Tin Tức
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Tìm kiếm tin tức..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                Ảnh
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                Tiêu đề
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                Ngày tạo
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                Trạng thái
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredNews.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-slate-500"
                >
                  <FileText className="mx-auto mb-3 text-slate-300" size={48} />
                  <p className="font-medium">Không tìm thấy tin tức nào</p>
                </td>
              </tr>
            ) : (
              filteredNews.map((newsItem) => (
                <tr
                  key={newsItem.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    #{newsItem.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100">
                      {newsItem.image_url ? (
                        <img
                          src={newsItem.image_url}
                          alt={newsItem.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="text-slate-400" size={24} />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <p className="font-bold text-slate-900 line-clamp-2">
                        {newsItem.title}
                      </p>
                      <p className="text-sm text-slate-500 mt-1 font-mono">
                        /{newsItem.slug}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={16} className="text-slate-400" />
                      {formatDate(newsItem.created_at)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleToggleStatus(newsItem)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        newsItem.status === 1
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {newsItem.status === 1 ? (
                        <span className="flex items-center gap-1">
                          <Eye size={14} /> Hiển thị
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <EyeOff size={14} /> Ẩn
                        </span>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(newsItem)}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(newsItem)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                        title="Xóa"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.last_page > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => fetchNews(pagination.current_page - 1)}
            disabled={pagination.current_page === 1}
            className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Trước
          </button>

          <span className="px-4 py-2 text-sm text-slate-600">
            Trang {pagination.current_page} / {pagination.last_page}
          </span>

          <button
            onClick={() => fetchNews(pagination.current_page + 1)}
            disabled={pagination.current_page === pagination.last_page}
            className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sau
          </button>
        </div>
      )}

      {/* MODAL VỚI CKEDITOR */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-black text-slate-900">
                {modalMode === "create"
                  ? "Thêm Tin Tức Mới"
                  : "Chỉnh Sửa Tin Tức"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Tiêu đề <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập tiêu đề tin tức (Tối ưu SEO: 50-60 ký tự)"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">
                  Độ dài: {formData.title.length} ký tự {formData.title.length > 60 && '⚠️ Nên dưới 60 ký tự cho SEO tốt nhất'}
                </p>
              </div>

              {/* THAY TEXTAREA BẰNG CKEDITOR */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-slate-500 mb-3">
                  💡 Sử dụng Heading (H2, H3) để cấu trúc nội dung chuẩn SEO
                </p>
                <CKEditorComponent
                  value={formData.content}
                  onChange={(data) => setFormData({ ...formData, content: data })}
                  placeholder="Nhập nội dung bài viết. Sử dụng H2, H3 để tổ chức nội dung..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Ảnh đại diện <span className="text-slate-500">(Tối ưu: 1200x630px)</span>
                </label>

                {imagePreview && (
                  <div className="mb-4 relative w-full h-64 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Định dạng: JPG, PNG. Kích thước tối đa: 2MB. Khuyến nghị: 1200x630px cho SEO
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Trạng thái
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: Number(e.target.value) })
                  }
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={1}>Hiển thị</option>
                  <option value={0}>Ẩn</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-200 sticky bottom-0 bg-white">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {submitting
                    ? "Đang xử lý..."
                    : modalMode === "create"
                    ? "Tạo mới"
                    : "Cập nhật"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsAdmin;