import { Edit2, Trash2, Flame, Eye, EyeOff } from "lucide-react";

const ProductRow = ({ product, onEdit, onDelete, onToggleActive }) => {
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/50";
    if (imagePath.startsWith("http")) return imagePath;
    return `http://127.0.0.1:8000/storage/${imagePath}`;
  };

  return (
    <tr className="hover:bg-slate-50 transition-colors group">
      {/* Cột Sản phẩm */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex-shrink-0">
            <img
              src={getImageUrl(product.images)}
              alt={product.name}
              className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">{product.name}</span>
              {product.is_hot === 1 && (
                <Flame size={14} className="text-orange-500 fill-orange-500" />
              )}
            </div>
            <span className="text-xs text-slate-400 font-medium tracking-tight">
              #{product.id}
            </span>
          </div>
        </div>
      </td>

      {/* Cột Danh mục */}
      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold whitespace-nowrap">
          {product.category?.name || "N/A"}
        </span>
      </td>

      {/* Cột Thông số */}
      <td className="px-6 py-4">
        <div className="text-sm space-y-1">
          <p className="text-slate-500">
            <span className="font-semibold text-slate-700">Điện áp:</span>{" "}
            {product.voltage || "--"}
          </p>
          <p className="text-slate-500">
            <span className="font-semibold text-slate-700">Dung lượng:</span>{" "}
            {product.capacity || "--"}
          </p>
        </div>
      </td>

      {/* Cột Trạng thái */}
      <td className="px-6 py-4 text-center">
        <button
          onClick={() => onToggleActive(product)}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-black uppercase transition-all
            ${
              product.is_active
                ? "bg-green-50 text-green-600 hover:bg-green-100"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
        >
          {product.is_active ? (
            <>
              <Eye size={14} /> Hiện
            </>
          ) : (
            <>
              <EyeOff size={14} /> Ẩn
            </>
          )}
        </button>
      </td>

      {/* Cột Thao tác */}
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onEdit(product)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
            title="Sửa"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(product)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
            title="Xóa"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
