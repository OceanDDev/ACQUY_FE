import {
  Phone,
  MapPin,
  ShoppingCart,
  Menu,
  User,
  X,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/san-pham" },
    { name: "Tin tức", path: "/news" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Dịch vụ", path: "/services" },
    { name: "Liên hệ", path: "/contacts" },
  ];

  return (
    <header className="w-full shadow-lg sticky top-0 z-[100] font-sans">
      {/* 1. TOPBAR: GỌN GÀNG & NỔI BẬT */}
      <div className="bg-slate-950 py-1.5 md:py-2 border-b border-blue-900/20">
        <div className="container mx-auto px-4 flex justify-center md:justify-between items-center gap-4">
          {/* ĐỊA CHỈ: Hiệu ứng Neon nhẹ hơn */}
          <div className="relative group md:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-lg blur-sm opacity-60 transition duration-1000 animate-pulse"></div>

            <div className="relative flex items-center gap-2.5 bg-slate-900 px-4 py-1.5 rounded-lg border border-blue-400/30 shadow-xl">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-cyan-400 text-[8px] font-black uppercase tracking-wider mb-0.5">
                  Đại lý chính hãng
                </span>
                <Link
                  to="https://maps.app.goo.gl/7"
                  className="text-white text-[10px] md:text-xs font-bold tracking-tight whitespace-nowrap"
                >
                  TL 744, An Tây, Bến Cát, Bình Dương
                </Link>
              </div>
            </div>
          </div>

          {/* HOTLINE: Thu nhỏ kích thước chữ và padding */}
          <a
            href="tel:0354851779"
            className="hidden md:flex relative items-center gap-3 bg-red-600 px-6 py-2 rounded-xl cursor-pointer transition-all active:scale-95 shadow-lg group overflow-hidden"
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
            
            <div className="relative flex items-center gap-3 z-10">
              <div className="bg-white p-1.5 rounded-lg rotate-12 group-hover:rotate-0 transition-transform">
                <Phone size={18} className="text-red-600 fill-red-600" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white text-[8px] font-black uppercase tracking-widest opacity-90 mb-1">
                  Cứu hộ 24/7
                </span>
                <span className="text-white font-black text-xl tracking-tighter">
                  0354.851.779
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAV: Tinh tế & Chuyên nghiệp */}
      <div className="bg-white/95 backdrop-blur-xl py-2 md:py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/img/logo.jpg" 
              alt="Logo Ắc Quy Huy Hậu Bến Cát Bình Dương" 
              className="h-12 w-auto object-contain transform group-hover:scale-105 transition-all"
            />
            <h1 className="text-lg font-black leading-none text-slate-900 tracking-tighter uppercase hidden sm:block">
              ACQUY<span className="text-blue-600 font-black">HUYHAU</span>
            </h1>
          </Link>

          {/* MENU DESKTOP: Chữ nhỏ hơn, tracking rộng hơn */}
          <nav className="hidden lg:flex items-center gap-8 font-black text-slate-600 uppercase text-[11px] tracking-[0.1em]">
            {menuLinks.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-blue-600 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* ACTIONS: Gọn gàng */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 text-slate-900 rounded-lg relative hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
              <ShoppingCart size={18} strokeWidth={2.5} />
            </div>
            
            <Link to="/admin/login" className="hidden sm:flex p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              <User size={18} strokeWidth={2.5} />
            </Link>

            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-1.5 text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* 3. SIDEBAR MOBILE: Giữ nguyên logic cũ nhưng padding gọn lại */}
      <div className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`fixed top-0 right-0 w-[260px] h-full bg-white shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b flex justify-between items-center bg-slate-50">
            <span className="font-black text-slate-900 text-sm tracking-widest">DANH MỤC</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-1.5 bg-white rounded-lg shadow-md text-red-600">
              <X size={20} strokeWidth={3} />
            </button>
          </div>
          <div className="py-4">
            {menuLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-6 py-4 text-slate-900 font-black text-base border-b border-slate-50 hover:bg-blue-50 transition-all">
                {link.name}
                <ChevronRight size={18} strokeWidth={3} className="text-blue-600" />
              </Link>
            ))}
          </div>
          <div className="p-6">
            <a href="tel:0354851779" className="block bg-red-600 p-4 rounded-xl text-white shadow-lg animate-pulse text-center">
               <p className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-80">Bấm để gọi cứu hộ</p>
               <p className="text-xl font-black leading-none">0354.851.779</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header