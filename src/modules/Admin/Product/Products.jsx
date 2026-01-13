import { useState, useEffect } from "react";
import { Plus, Search, Package } from "lucide-react";
import { categoryService } from "../../../service/Admin/category.service";
import { productService } from "../../../service/Admin/products.service";
import ProductRow from "./ProductRow";
import Pagination from "./Pagination";
import ProductModal from "./ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    perPage: 20,
    total: 0,
    from: 0,
    to: 0,
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    brand_id: "",
    type: "",
    voltage: "",
    capacity: "",
    short_desc: "",
    content: "",
    is_hot: 0,
    is_active: 1,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `http://127.0.0.1:8000/storage/${imagePath}`;
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(pagination.currentPage);
  }, [pagination.currentPage, filterCategory, filterStatus]);

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const params = { page };

      if (filterCategory) params.category_id = filterCategory;
      if (filterStatus !== "") params.is_active = filterStatus;

      const response = await productService.getAdminList(params);

      if (response.status) {
        const data = response.data;
        setProducts(data.data || []);

        setPagination({
          currentPage: data.current_page,
          lastPage: data.last_page,
          perPage: data.per_page,
          total: data.total,
          from: data.from || 0,
          to: data.to || 0,
        });
      }
    } catch (error) {
      alert("Lỗi khi tải sản phẩm");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getList();
      if (data.status) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Lỗi khi tải categories:", error);
    }
  };

  const handleCreate = () => {
    setModalMode("create");
    setFormData({
      name: "",
      category_id: "",
      brand_id: "",
      type: "",
      voltage: "",
      capacity: "",
      short_desc: "",
      content: "",
      is_hot: 0,
      is_active: 1,
    });
    setCurrentProduct(null);
    setImageFile(null);
    setImagePreview("");
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setModalMode("edit");
    setFormData({
      name: product.name,
      category_id: product.category_id,
      brand_id: product.brand_id || "",
      type: product.type || "",
      voltage: product.voltage || "",
      capacity: product.capacity || "",
      short_desc: product.short_desc || "",
      content: product.content || "",
      is_hot: product.is_hot,
      is_active: product.is_active,
    });
    setCurrentProduct(product);
    setImageFile(null);
    setImagePreview(getImageUrl(product.images) || "");
    setShowModal(true);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Vui lòng chọn file ảnh hợp lệ");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Kích thước ảnh không được vượt quá 5MB");
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

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.category_id) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc");
      return;
    }

    if (modalMode === "create" && !imageFile) {
      alert("Vui lòng chọn ảnh sản phẩm");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("category_id", formData.category_id);

      if (formData.brand_id) payload.append("brand_id", formData.brand_id);
      if (formData.type) payload.append("type", formData.type);
      if (formData.voltage) payload.append("voltage", formData.voltage);
      if (formData.capacity) payload.append("capacity", formData.capacity);
      if (formData.short_desc) payload.append("short_desc", formData.short_desc);
      if (formData.content) payload.append("content", formData.content);

      // QUAN TRỌNG: Luôn gửi số 0 hoặc 1, KHÔNG BAO GIỜ gửi boolean
      const isHotValue = formData.is_hot === 1 || formData.is_hot === true || formData.is_hot === "1" ? "1" : "0";
      const isActiveValue = formData.is_active === 1 || formData.is_active === true || formData.is_active === "1" ? "1" : "0";
      
      payload.append("is_hot", isHotValue);
      payload.append("is_active", isActiveValue);

      if (imageFile) payload.append("images", imageFile);

      if (modalMode === "create") {
        await productService.create(payload);
        alert("Tạo sản phẩm thành công!");
      } else {
        await productService.update(currentProduct.id, payload);
        alert("Cập nhật sản phẩm thành công!");
      }

      fetchProducts(pagination.currentPage);
      setShowModal(false);
    } catch (error) {
      console.error("Chi tiết lỗi:", error.response?.data);
      const errorMsg = error.response?.data?.message || "Có lỗi xảy ra";
      const errors = error.response?.data?.errors;

      if (errors) {
        const errorList = Object.values(errors).flat().join("\n");
        alert(`${errorMsg}\n\n${errorList}`);
      } else {
        alert(errorMsg);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (product) => {
    if (!confirm(`Bạn có chắc muốn xóa sản phẩm "${product.name}"?`)) {
      return;
    }

    try {
      await productService.deleteProduct(product.id);
      alert("Xóa sản phẩm thành công!");
      fetchProducts(pagination.currentPage);
    } catch (error) {
      alert(error.response?.data?.message || "Không thể xóa sản phẩm");
    }
  };

  const toggleActive = async (product) => {
    try {
      const payload = new FormData();
      payload.append("is_active", product.is_active ? 0 : 1);
      await productService.update(product.id, payload);
      fetchProducts(pagination.currentPage);
    } catch (error) {
      alert("Có lỗi xảy ra");
      console.error(error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.lastPage) return;
    setPagination((prev) => ({ ...prev, currentPage: newPage }));
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Quản lý Sản phẩm
          </h2>
          <p className="text-slate-600 mt-1">
            Tổng cộng{" "}
            <span className="font-bold text-blue-600">{pagination.total}</span>{" "}
            sản phẩm
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          Thêm Sản phẩm
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setPagination((prev) => ({ ...prev, currentPage: 1 }));
            }}
            className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setPagination((prev) => ({ ...prev, currentPage: 1 }));
            }}
            className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Tất cả trạng thái</option>
            <option value="1">Đang hoạt động</option>
            <option value="0">Đã ẩn</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                  Sản phẩm
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                  Danh mục
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                  Loại
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">
                  Thông số
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-700">
                  Trạng thái
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-slate-500"
                  >
                    <Package
                      className="mx-auto mb-3 text-slate-300"
                      size={48}
                    />
                    <p className="font-medium">Không tìm thấy sản phẩm nào</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <ProductRow
                    key={product.id}
                    product={product}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggleActive={toggleActive}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>

      <ProductModal
        show={showModal}
        mode={modalMode}
        formData={formData}
        categories={categories}
        imagePreview={imagePreview}
        submitting={submitting}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        onFormChange={handleFormChange}
        onImageChange={handleImageChange}
        onRemoveImage={handleRemoveImage}
      />
    </div>
  );
};

export default Products;