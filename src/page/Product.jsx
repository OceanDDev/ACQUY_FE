import { ShoppingCart, Phone, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { productService } from "../service/Admin/products.service";
import ContactButtons from "../modules/Client/Contact";
import { categoryService } from "../service/Admin/category.service";
import { Helmet } from "react-helmet-async";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ CẬP NHẬT: Pagination từ API response
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 12,
  });

  const [filters, setFilters] = useState({
    brand_id: null,
    category_id: null,
    search: "",
    page: 1,
  });

  const [searchInput, setSearchInput] = useState("");

  // ✅ Auto search với debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        search: searchInput,
        page: 1,
      }));
    }, 500); // Đợi 500ms sau khi người dùng ngừng gõ

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const response = await categoryService.getList();
        // Kiểm tra nhiều cấu trúc khác nhau
        let categoryData = [];

        if (Array.isArray(response)) {
          categoryData = response;
        } else if (response?.data && Array.isArray(response.data)) {
          categoryData = response.data;
        } else if (response?.categories && Array.isArray(response.categories)) {
          categoryData = response.categories;
        }

        setCategories(categoryData);
      } catch (err) {
        console.error("❌ Không thể tải danh sách categories:", err);
        setCategories([]);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        console.log("🔵 Bắt đầu fetch products với filters:", filters);
        const response = await productService.getList(filters);
        console.log("✅ API Response:", response);
        console.log(
          "🔍 Request URL sẽ là: /api/products?",
          new URLSearchParams(filters).toString()
        );

        // ✅ API trả về pagination data ở root level
        setProducts(response.data || []);

        // ✅ CẬP NHẬT PAGINATION - data nằm ngay ở root
        setPagination({
          current_page: response.current_page || 1,
          last_page: response.last_page || 1,
          total: response.total || 0,
          per_page: response.per_page || 12,
        });

        setError(null);
      } catch (err) {
        console.error("❌ Product loading error:", err);
        console.error("❌ Error response:", err.response);
        console.error("❌ Error status:", err.response?.status);
        setError("Không thể tải sản phẩm");
      } finally {
        setLoading(false);
        console.log("🔵 Kết thúc fetch products");
      }
    };

    fetchProducts();
  }, [filters]);

  const handleCategoryFilter = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category_id: prev.category_id === categoryId ? null : categoryId,
      page: 1, // Reset về trang 1 khi filter
    }));
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      brand_id: null,
      category_id: null,
      search: "",
      page: 1,
    });
    setSearchInput("");
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl font-bold mb-2">⚠️ Lỗi</p>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Tải lại trang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      <Helmet>
        <title>Sản Phẩm Ắc Quy GS Chính Hãng | Ắc Quy Huy Hậu</title>
        <meta
          name="description"
          content="Bảng giá các dòng ắc quy GS, Đồng Nai cho ô tô, xe tải, máy phát điện. Đầy đủ các mã bình N100, N150, N200 sẵn hàng tại kho Bình Dương."
        />
      </Helmet>
      <div className="bg-blue-700 py-12 text-white shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">
            Danh mục sản phẩm
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">
            Cung cấp đầy đủ các dòng ắc quy GS chính hãng cho mọi loại xe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            {/* Thanh tìm kiếm */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                <Search size={20} className="text-blue-600" />
                <span>Tìm kiếm</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm..."
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search size={18} />
                </div>
              </div>
            </div>

            {/* Bộ lọc category */}
            {!categoriesLoading && categories.length > 0 && (
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-800 mb-6">
                  <Filter size={20} className="text-green-600" />
                  <span>Danh mục</span>
                </div>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-slate-300 text-green-600"
                        checked={filters.category_id === category.id}
                        onChange={() => handleCategoryFilter(category.id)}
                      />
                      <span className="text-slate-600 group-hover:text-green-700 transition font-medium">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Nút xóa bộ lọc */}
            {(filters.brand_id || filters.category_id || filters.search) && (
              <button
                onClick={clearFilters}
                className="w-full bg-red-50 text-red-600 py-3 px-4 rounded-2xl font-bold text-sm hover:bg-red-100 transition-all border border-red-200"
              >
                Xóa tất cả bộ lọc
              </button>
            )}
          </aside>

          {/* Grid sản phẩm */}
          <div className="lg:w-3/4">
            {/* Hiển thị bộ lọc đang áp dụng */}
            {(filters.brand_id || filters.category_id || filters.search) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {filters.search && (
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Search size={14} />
                    Tìm kiếm: "{filters.search}"
                  </span>
                )}
                {filters.category_id && (
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    Danh mục:{" "}
                    {categories.find((c) => c.id === filters.category_id)?.name}
                  </span>
                )}
              </div>
            )}

            {products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">
                  Không tìm thấy sản phẩm nào
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-8">
                  {products.map((item) => {
                    // ✅ Build image URL giống ProductRow
                    let imageUrl = "/img/gs-100d31r_0756.jpg"; // fallback default

                    // Priority 1: Sử dụng image_url từ backend (đã có full URL)
                    if (item.image_url) {
                      imageUrl = item.image_url;
                    }
                    // Priority 2: Build từ images path
                    else if (item.images) {
                      // Nếu đã là full URL
                      if (item.images.startsWith("http")) {
                        imageUrl = item.images;
                      } else {
                        // Auto-detect environment
                        const isDev =
                          window.location.hostname === "localhost" ||
                          window.location.hostname === "127.0.0.1";
                        const baseUrl =
                          import.meta.env.VITE_API_BASE_URL ||
                          (isDev
                            ? "http://127.0.0.1:8000"
                            : "https://api.acquyhuyhau.com");

                        imageUrl = `${baseUrl}/storage/${item.images}`;
                      }
                    }
                    // Priority 3: Fallback to item.image (legacy)
                    else if (item.image) {
                      imageUrl = item.image;
                    }

                    return (
                      <Link
                        to={`/chi-tiet-san-pham/${item.slug}`}
                        key={item.id}
                        className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden group hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col relative"
                      >
                        <div className="relative p-3 md:p-6 bg-slate-50 flex justify-center items-center group-hover:bg-white transition-colors duration-500 h-40 md:h-60">
                          <img
                            src={imageUrl}
                            alt={item.name}
                            className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.target.src = "/img/gs-100d31r_0756.jpg";
                            }}
                          />
                          <div className="absolute top-2 left-2 md:top-5 md:left-5 bg-blue-600 text-white px-2 md:px-4 py-0.5 md:py-1.5 rounded-full text-[7px] md:text-[10px] font-black uppercase tracking-wider shadow-lg">
                            {item.category?.name || "Ắc quy"}
                          </div>
                        </div>

                        <div className="p-3 md:p-7 flex-grow flex flex-col">
                          <div className="mb-2 md:mb-4">
                            <h3 className="text-[12px] md:text-xl font-black text-slate-800 mb-1 group-hover:text-blue-700 transition-colors uppercase tracking-tight leading-tight line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-blue-600 font-extrabold italic text-[9px] md:text-sm">
                              {item.capacity || "N/A"} — {item.voltage || "12V"}
                            </p>
                          </div>

                          <div className="mt-auto space-y-2 md:space-y-4">
                            <div className="bg-red-50 border border-red-100 p-2 md:p-4 rounded-xl md:rounded-2xl relative overflow-hidden group-hover:bg-red-600 transition-colors duration-300 text-center md:text-left">
                              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                              <p className="hidden md:block text-[10px] font-bold text-red-500 group-hover:text-white/80 uppercase mb-1 transition-colors">
                                Giá ưu đãi:
                              </p>
                              <p className="text-[10px] md:text-xl font-black text-red-600 group-hover:text-white transition-colors tracking-tighter">
                                LIÊN HỆ BÁO GIÁ
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* ✅ PHÂN TRANG - CẢI TIẾN */}
                {pagination.last_page > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    {/* Nút Previous */}
                    <button
                      onClick={() =>
                        handlePageChange(pagination.current_page - 1)
                      }
                      disabled={pagination.current_page === 1}
                      className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                        pagination.current_page === 1
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-sm border border-slate-200"
                      }`}
                    >
                      ← Trước
                    </button>

                    {/* Số trang */}
                    <div className="flex gap-2">
                      {Array.from(
                        { length: pagination.last_page },
                        (_, i) => i + 1
                      ).map((page) => {
                        // Hiển thị: trang đầu, trang cuối, và 2 trang xung quanh trang hiện tại
                        const showPage =
                          page === 1 ||
                          page === pagination.last_page ||
                          (page >= pagination.current_page - 2 &&
                            page <= pagination.current_page + 2);

                        if (showPage) {
                          return (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                                pagination.current_page === page
                                  ? "bg-blue-600 text-white shadow-lg scale-110"
                                  : "bg-white text-slate-700 hover:bg-blue-100 border border-slate-200"
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === pagination.current_page - 3 ||
                          page === pagination.current_page + 3
                        ) {
                          return (
                            <span
                              key={page}
                              className="px-2 text-slate-400 flex items-center"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    {/* Nút Next */}
                    <button
                      onClick={() =>
                        handlePageChange(pagination.current_page + 1)
                      }
                      disabled={
                        pagination.current_page === pagination.last_page
                      }
                      className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                        pagination.current_page === pagination.last_page
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-white text-slate-700 hover:bg-blue-600 hover:text-white shadow-sm border border-slate-200"
                      }`}
                    >
                      Sau →
                    </button>
                  </div>
                )}

                {/* Hiển thị thông tin tổng số sản phẩm */}
                {pagination.total > 0 && (
                  <div className="mt-6 text-center text-slate-600 text-sm">
                    Hiển thị{" "}
                    <span className="font-bold">{products.length}</span> trong
                    tổng số{" "}
                    <span className="font-bold">{pagination.total}</span> sản
                    phẩm
                    <span className="mx-2">•</span>
                    Trang{" "}
                    <span className="font-bold">
                      {pagination.current_page}
                    </span>{" "}
                    / {pagination.last_page}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <ContactButtons />
    </div>
  );
};

export default Product;
