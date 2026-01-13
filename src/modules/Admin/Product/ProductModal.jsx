import { X, Upload } from "lucide-react";

const ProductModal = ({
  show,
  mode,
  formData,
  categories,
  imagePreview,
  submitting,
  onClose,
  onSubmit,
  onImageChange,
  onRemoveImage,
  onFormChange,
}) => {
  if (!show) return null;

  // Shared Tailwind classes
  const labelClass = "block text-sm font-bold text-slate-700 mb-2";
  const inputClass =
    "w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";
  const textareaClass =
    "w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 flex-shrink-0">
          <h3 className="text-xl font-black text-slate-900">
            {mode === "create" ? "Thêm Sản phẩm Mới" : "Chỉnh Sửa Sản phẩm"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            title="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Tên sản phẩm */}
          <div>
            <label className={labelClass}>
              Tên sản phẩm <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ví dụ: Ắc quy GS N100"
              value={formData.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              className={inputClass}
              required
            />
          </div>

          {/* Danh mục */}
          <div>
            <label className={labelClass}>
              Danh mục <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category_id}
              onChange={(e) => onFormChange("category_id", e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Chọn danh mục</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Loại sản phẩm */}
          <div>
            <label className={labelClass}>Loại sản phẩm</label>
            <input
              type="text"
              placeholder="Ví dụ: Khô, Nước, Gel"
              value={formData.type}
              onChange={(e) => onFormChange("type", e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Điện áp và Dung lượng */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Điện áp</label>
              <input
                type="text"
                placeholder="12V"
                value={formData.voltage}
                onChange={(e) => onFormChange("voltage", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Dung lượng</label>
              <input
                type="text"
                placeholder="100Ah"
                value={formData.capacity}
                onChange={(e) => onFormChange("capacity", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Upload ảnh */}
          <div>
            <label className={labelClass}>
              Hình ảnh sản phẩm{" "}
              {mode === "create" && <span className="text-red-500">*</span>}
            </label>

            {imagePreview && (
              <div className="mb-3 relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg border-2 border-slate-200"
                />
                <button
                  type="button"
                  onClick={onRemoveImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  title="Xóa ảnh"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <div className="mt-2">
              <label
                htmlFor="image-upload"
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl border-2 border-dashed border-blue-300 hover:bg-blue-100 cursor-pointer transition-colors"
              >
                <Upload size={20} />
                <span className="font-semibold">
                  {imagePreview ? "Đổi ảnh khác" : "Chọn ảnh từ máy"}
                </span>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="hidden"
              />
            </div>

            <p className="text-xs text-slate-500 mt-2">
              💡 Chấp nhận: JPG, PNG, GIF. Tối đa 5MB
            </p>
          </div>

          {/* Mô tả ngắn */}
          <div>
            <label className={labelClass}>Mô tả ngắn</label>
            <textarea
              placeholder="Mô tả ngắn gọn về sản phẩm..."
              value={formData.short_desc}
              onChange={(e) => onFormChange("short_desc", e.target.value)}
              className={textareaClass}
              rows="2"
            />
          </div>

          {/* Nội dung chi tiết */}
          <div>
            <label className={labelClass}>Nội dung chi tiết</label>
            <textarea
              placeholder="Mô tả chi tiết về sản phẩm..."
              value={formData.content}
              onChange={(e) => onFormChange("content", e.target.value)}
              className={textareaClass}
              rows="4"
            />
          </div>

          {/* Checkbox options */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.is_hot)}
                onChange={(e) =>
                  onFormChange("is_hot", e.target.checked ? 1 : 0)
                }
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-semibold text-slate-700">
                Sản phẩm HOT 🔥
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={Boolean(formData.is_active)}
                onChange={(e) =>
                  onFormChange("is_active", e.target.checked ? 1 : 0)
                }
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-semibold text-slate-700">
                Hiển thị
              </span>
            </label>
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={onSubmit}
              disabled={submitting}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Đang xử lý..."
                : mode === "create"
                ? "Tạo mới"
                : "Cập nhật"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
