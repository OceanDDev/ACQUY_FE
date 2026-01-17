import { Edit2, Trash2, Flame, Eye, EyeOff } from "lucide-react";
import { memo, useMemo } from "react";

const ProductRow = memo(
  ({ product, refreshKey, onEdit, onDelete, onToggleActive }) => {   
    // ✅ Fix image URL với priority: image_url > images
    const imageUrl = useMemo(() => {
      // Priority 1: Sử dụng image_url từ backend (đã có full URL)
      if (product.image_url) {
        return `${product.image_url}?t=${refreshKey}`;
      }

      // Priority 2: Build từ images path
      if (product.images) {
        // Nếu đã là full URL
        if (product.images.startsWith("http")) {
          return `${product.images}?t=${refreshKey}`;
        }

        // Auto-detect environment
        const isDev =
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1";

        const baseUrl =
          import.meta.env.VITE_API_BASE_URL ||
          (isDev ? "http://127.0.0.1:8000" : "https://api.acquyhuyhau.com");

        // Build full URL
        return `${baseUrl}/storage/${product.images}?t=${refreshKey}`;
      }

      return null;
    }, [product.image_url, product.images, refreshKey]);

    // ✅ Handle image error
    const handleImageError = (e) => {
      console.warn("Image failed to load:", imageUrl);
      e.target.style.display = "none";
      e.target.parentElement.classList.add("bg-slate-200");
    };

    return (
      <tr className="hover:bg-slate-50 transition-colors group">
        <td className="px-6 py-4">
          <div className="flex items-center gap-4">
            {imageUrl ? (
              <div className="w-14 h-14 rounded-xl border border-slate-100 overflow-hidden bg-slate-50 flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-xl border border-slate-200 bg-slate-100 flex-shrink-0 flex items-center justify-center">
                <span className="text-slate-400 text-xs">No img</span>
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800">{product.name}</span>
                {product.is_hot === 1 && (
                  <Flame
                    size={14}
                    className="text-orange-500 fill-orange-500"
                  />
                )}
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-tight">
                #{product.id}
              </span>
            </div>
          </div>
        </td>

        <td className="px-6 py-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold whitespace-nowrap">
            {product.category?.name || "N/A"}
          </span>
        </td>

        <td className="px-6 py-4">
          <span className="text-sm text-slate-600 font-medium">
            {product.type || "--"}
          </span>
        </td>

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
  }
);

ProductRow.displayName = "ProductRow";

export default ProductRow;
