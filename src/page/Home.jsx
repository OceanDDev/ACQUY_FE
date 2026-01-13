import { Zap, ShieldCheck, Clock, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactButtons from "../modules/Client/Contact";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Danh sách ảnh slideshow
  const slides = [
    "/img/a4.jpg",
    "/img/a5.jpg",
    "/img/a6.jpg",
    "/img/a7.jpg",
  ];

  // Auto slide mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section với Slideshow Background */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Cửa hàng ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient đen mờ để chữ nổi bật */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Nội dung chữ nổi bật */}
        <div className="relative z-10 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200 px-4 py-2 rounded-full shadow-lg animate-fade-in">
              <Zap size={16} className="text-blue-600 fill-blue-600" />
              <span className="text-blue-700 font-bold text-xs md:text-sm uppercase tracking-wider">
                Đại lý ắc quy GS số 1 Bình Dương
              </span>
            </div>

            {/* Tiêu đề chính */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              Ắc Quy Huy Hậu
              <br />
              <span className="text-blue-400">Năng Lượng Bền Bỉ</span>
            </h1>

            {/* Mô tả */}
            <p className="text-white/90 text-base md:text-xl leading-relaxed drop-shadow-lg max-w-xl">
              Cung cấp dòng ắc quy{" "}
              <span className="font-bold text-blue-300">
                GS N100 (100Ah - 12V)
              </span>{" "}
              chính hãng. Hiệu suất cực cao cho xe tải, tàu thuyền và máy phát
              điện.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => navigate('/san-pham')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-2xl shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
              >
                Đặt mua ngay
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button 
                onClick={() => navigate('/san-pham')}
                className="bg-white/90 backdrop-blur-sm text-slate-800 border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Bảng giá chi tiết
              </button>
            </div>

            {/* Icon cam kết */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShieldCheck size={20} className="text-green-400" />
                <span>Bảo hành 12 tháng</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock size={20} className="text-orange-400" />
                <span>Lắp đặt nhanh 15'</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? "w-12 bg-blue-500"
                  : "w-3 bg-white/50 hover:bg-white/80"
              } h-3 rounded-full`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Featured Product Card - Floating */}
  
      {/* Categories Section */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Danh mục sản phẩm
          </h3>
          <p className="text-slate-600 text-base md:text-lg">
            Phân phối ắc quy chính hãng tại khu vực Bình Dương
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ắc quy Ô tô",
              desc: "Khởi động mạnh mẽ, bền bỉ",
              icon: "🚗",
            },
            {
              name: "Ắc quy Xe máy",
              desc: "Chính hãng GS, Đồng Nai",
              icon: "🏍️",
            },
            {
              name: "Ắc quy Công trình",
              desc: "Dành cho xe tải, máy xúc",
              icon: "🚛",
            },
          ].map((cat) => (
            <div
              onClick={() => navigate(`/san-pham`)}
              key={cat.name}
              className="group p-8 rounded-[2rem] bg-white border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all text-3xl">
                {cat.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-800 mb-2">
                {cat.name}
              </h4>
              <p className="text-slate-600 text-base mb-4">{cat.desc}</p>
              <div className="text-blue-700 font-bold flex items-center gap-2 text-base group-hover:gap-4 transition-all">
                Xem ngay <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactButtons />
    </main>
  );
};

export default Home;