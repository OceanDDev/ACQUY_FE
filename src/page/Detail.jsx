import { Link, useParams } from "react-router-dom";
import {
  Phone,
  ShieldCheck,
  Truck,
  Zap,
  MessageCircle,
  Star,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import ContactButtons from "../modules/Client/Contact";
import { productService } from "../service/Admin/products.service";

const Detail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log("🔵 Fetching product with slug:", slug);
        const response = await productService.getDetail(slug);
        console.log("✅ Product detail response:", response);
        setProduct(response);
        setError(null);
      } catch (err) {
        console.error("❌ Error loading product:", err);
        setError("Không thể tải thông tin sản phẩm");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

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

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl font-bold mb-2">⚠️ Lỗi</p>
          <p>{error || "Không tìm thấy sản phẩm"}</p>
          <Link
            to="/san-pham"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Quay về danh sách
          </Link>
        </div>
      </div>
    );
  }

  // Chuẩn bị specs từ data API
  const specs = [
    { label: "Điện áp", value: product.voltage || "N/A" },
    { label: "Dung lượng", value: product.capacity || "N/A" },
    { label: "Kích thước", value: product.dimensions || "N/A" },
    { label: "Loại bình", value: product.battery_type || "N/A" },
    { label: "Bảo hành", value: product.warranty || "N/A" },
    {
      label: "Thương hiệu",
      value: product.brand?.name || product.brand_name || "N/A",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Link
              to="/san-pham"
              className="hover:text-blue-700 flex items-center gap-1"
            >
              <ArrowLeft size={16} /> Quay lại
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-slate-900 uppercase tracking-tighter">
              {product.name || "Chi tiết sản phẩm"}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cột trái: Ảnh */}
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-2xl shadow-blue-100/50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <img
                  src={product.image || "/img/gs-100d31r_0756.jpg"}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: <ShieldCheck className="text-green-600" />,
                    text: "Chính hãng",
                  },
                  {
                    icon: <Truck className="text-blue-600" />,
                    text: "Giao nhanh",
                  },
                  {
                    icon: <Zap className="text-orange-600" />,
                    text: "Lắp Free",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-1 border border-slate-100"
                  >
                    {item.icon}
                    <span className="text-[10px] font-black uppercase text-slate-600">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải: Info */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
                <span className="text-slate-400 text-xs ml-2 font-bold">
                  (99+ lượt mua)
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">
                {product.name}
              </h1>
              <p className="text-blue-600 font-black text-2xl italic tracking-widest">
                {product.capacity || "N/A"} — {product.voltage || "12V"}
              </p>
            </div>

            {/* Giá sản phẩm */}
            <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-2xl">
                KHUYẾN MÃI
              </div>
              <div className="flex items-end gap-3">
                {product.price ? (
                  <>
                    <span className="text-5xl font-black text-red-600 tracking-tighter">
                      {product.price}
                    </span>
                    {product.old_price && (
                      <span className="text-slate-400 line-through text-lg font-bold mb-1">
                        {product.old_price}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-3xl font-black text-blue-600 tracking-tighter">
                    LIÊN HỆ BÁO GIÁ
                  </span>
                )}
              </div>
              <p className="mt-2 text-slate-600 text-sm font-bold italic">
                * Giảm thêm khi thu đổi bình cũ tại cửa hàng
              </p>
            </div>

            {/* Thông số kỹ thuật */}
            <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-100">
              {specs.map((spec, i) => (
                <div key={i}>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    {spec.label}
                  </p>
                  <p className="text-slate-900 font-bold text-lg">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0900xxxxxx"
                className="flex-1 bg-red-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-red-700 transition-all"
              >
                <Phone size={24} fill="white" /> GỌI CỨU HỘ
              </a>
              <a
                href="https://zalo.me/0354851779"
                className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-blue-700 transition-all"
              >
                <MessageCircle size={24} fill="white" /> CHAT ZALO
              </a>
            </div>

            {/* Mô tả sản phẩm */}
            {product.description && (
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                <h2 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                  Mô tả sản phẩm
                </h2>
                <div
                  className="text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}

            {/* Danh mục */}
            {product.category && (
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm font-bold">
                  Danh mục:
                </span>
                <Link
                  to={`/san-pham?category=${product.category.id}`}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-200 transition-colors"
                >
                  {product.category.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactButtons />
    </div>
  );
};

export default Detail;
