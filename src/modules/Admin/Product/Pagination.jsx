import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ pagination, onPageChange }) => {
  const { currentPage, lastPage, from, to, total } = pagination;

  // Không hiển thị pagination nếu chỉ có 1 trang hoặc không có dữ liệu
  if (lastPage <= 1) return null;

  // Tính toán các trang hiển thị
  const pages = [];
  const maxVisiblePages = 5; // Số trang tối đa hiển thị cùng lúc
  
  let startPage = Math.max(
    1,
    currentPage - Math.floor(maxVisiblePages / 2)
  );
  let endPage = Math.min(lastPage, startPage + maxVisiblePages - 1);

  // Điều chỉnh nếu không đủ trang hiển thị
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Tạo mảng các trang
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-white">
      {/* Thông tin hiển thị */}
      <div className="text-sm text-slate-600">
        Hiển thị <span className="font-semibold text-slate-900">{from}</span> đến{" "}
        <span className="font-semibold text-slate-900">{to}</span> trong tổng số{" "}
        <span className="font-semibold text-slate-900">{total}</span> sản phẩm
      </div>

      {/* Các nút phân trang */}
      <div className="flex items-center gap-2">
        {/* Nút Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Trang trước"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Nút trang đầu + ... nếu cần */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors font-medium"
            >
              1
            </button>
            {startPage > 2 && (
              <span className="px-2 text-slate-400 font-medium">...</span>
            )}
          </>
        )}

        {/* Các trang ở giữa */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg border transition-colors font-medium ${
              page === currentPage
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "border-slate-200 hover:bg-slate-50 text-slate-700"
            }`}
          >
            {page}
          </button>
        ))}

        {/* ... + nút trang cuối nếu cần */}
        {endPage < lastPage && (
          <>
            {endPage < lastPage - 1 && (
              <span className="px-2 text-slate-400 font-medium">...</span>
            )}
            <button
              onClick={() => onPageChange(lastPage)}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors font-medium"
            >
              {lastPage}
            </button>
          </>
        )}

        {/* Nút Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Trang sau"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;