import {
  Zap,
  ShieldCheck,
  Clock,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactButtons from "../modules/Client/Contact";
import { newsService } from "../service/Admin/news.service";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/img/a4.jpg",
      alt: "Cửa hàng ắc quy Huy Hậu tại Bình Dương - Đại lý GS chính hãng",
    },
    {
      url: "/img/a5.jpg",
      alt: "Phân phối ắc quy GS chính hãng giá rẻ cho ô tô xe máy",
    },
    {
      url: "/img/a6.jpg",
      alt: "Dịch vụ thay ắc quy ô tô tận nơi nhanh chóng Bình Dương",
    },
    { url: "/img/a7.jpg", alt: "Đại lý ắc quy ô tô xe máy uy tín hàng đầu" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Fetch tin tức
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoadingNews(true);
        const response = await newsService.getList({ limit: 3 }); // Lấy 3 tin mới nhất
        setNews(response.data || []);
      } catch (error) {
        console.error("Lỗi khi tải tin tức:", error);
      } finally {
        setIsLoadingNews(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>
          Ắc Quy Huy Hậu | Đại Lý Ắc Quy GS Chính Hãng Số 1 Bình Dương
        </title>
        <meta
          name="description"
          content="Ắc Quy Huy Hậu chuyên cung cấp ắc quy GS, Đồng Nai chính hãng tại Bình Dương. Dịch vụ thay ắc quy ô tô, xe tải tận nơi 15 phút tại Thuận An, Dĩ An, Bến Cát."
        />
        <meta
          name="keywords"
          content="ắc quy bình dương, ắc quy gs bình dương, thay ắc quy tận nơi, ắc quy huy hậu, ắc quy ô tô dĩ an, ắc quy gs n100"
        />
        <link rel="canonical" href="https://acquyhuyhau.com/" />
      </Helmet>

      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200 px-4 py-2 rounded-full shadow-lg">
              <Zap size={16} className="text-blue-600 fill-blue-600" />
              <span className="text-blue-700 font-bold text-xs md:text-sm uppercase tracking-wider">
                Đại lý ắc quy GS số 1 Bình Dương
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              Ắc Quy Huy Hậu <br />
              <span className="text-blue-400">Năng Lượng Bền Bỉ</span>
            </h1>

            <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-xl">
              Đại lý ủy quyền ắc quy{" "}
              <strong className="font-bold text-blue-300">GS & Đồng Nai</strong>{" "}
              tại Bình Dương. Chuyên dòng ắc quy xe tải, tàu thuyền và cứu hộ ắc
              quy tận nơi 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate("/san-pham")}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Xem sản phẩm
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="tel:0354851779"
                className="bg-white/90 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white text-center transition-all"
              >
                Gọi tư vấn ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Dịch vụ Ắc Quy Chính Hãng
          </h2>
          <p className="text-slate-600">
            Phân phối lắp đặt tại Thuận An, Dĩ An, Thủ Dầu Một và Bến Cát - Bình
            Dương.
          </p>
        </div>
        {/* Giữ nguyên phần Category Grid bên dưới */}
      </section>

      {/* SECTION TIN TỨC MỚI */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                Tin Tức Mới Nhất
              </h2>
              <p className="text-slate-600">
                Cập nhật thông tin và kiến thức về ắc quy
              </p>
            </div>
            <button
              onClick={() => navigate("/news")}
              className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
            >
              Xem tất cả
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {isLoadingNews ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <article
                  key={item.id}
                  onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image_url || "/img/default-news.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar size={16} />
                      <time dateTime={item.created_at}>
                        {formatDate(item.created_at)}
                      </time>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {item.description || item.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                      Đọc thêm
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Chưa có tin tức nào được đăng tải
              </p>
            </div>
          )}

          <div className="md:hidden text-center mt-8">
            <button
              onClick={() => navigate("/tin-tuc")}
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              Xem tất cả tin tức
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <ContactButtons />
    </main>
  );
};

export default Home;
