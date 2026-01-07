import { Phone, MapPin, Search, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full shadow-lg sticky top-0 z-50 font-sans">
      {/* 1. TOPBAR: SIÊU NỔI BẬT */}
      <div className="bg-black py-2.5"> {/* Chuyển sang nền đen để hiệu ứng phát sáng mạnh nhất */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* ĐỊA CHỈ: Nền Gradient chuyển động */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 animate-gradient-x"></div>
            <div className="relative flex items-center gap-2 bg-slate-900 px-4 py-1.5 rounded-full border border-blue-500/50">
              <MapPin size={18} className="text-cyan-400 animate-bounce" />
              <span className="text-white text-xs md:text-sm font-bold tracking-wide">
                TL 744, Ấp Rạch Bắp, X.An Tây, TP.Bến Cát, Bình Dương
              </span>
            </div>
          </div>

          {/* HOTLINE: Hiệu ứng nút bấm "Rực Lửa" */}
          <a href="tel:0900xxxxxx" className="relative flex items-center gap-3 bg-red-600 px-7 py-2 rounded-full glow-red-strong cursor-pointer transition-all active:scale-95">
            {/* Vòng tròn sóng lan tỏa mạnh hơn */}
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-40"></span>
            
            <div className="relative flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full shadow-inner">
                <Phone size={20} className="text-red-600 fill-red-600 animate-ring" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-black text-sm md:text-lg tracking-tighter leading-none">
                  HOTLINE: 0354.851.779
                </span>
              </div>
            </div>
          </a>
          
        </div>
      </div>

      {/* 2. MAIN NAV: LOGO & MENU (Giữ nguyên) */}
      <div className="bg-white/95 backdrop-blur-md py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
             {/* Logo code giữ nguyên như trước */}
             <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all shadow-lg shadow-blue-200">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-black leading-none text-slate-800">
                  ACQUY<span className="text-blue-700">HUYHAU</span>
                </h1>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Năng lượng chính hãng</p>
              </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-bold text-slate-700 uppercase text-sm">
            <Link to="/" className="hover:text-blue-700 transition">Trang chủ</Link>
            <Link to="/san-pham" className="hover:text-blue-700 transition">Sản phẩm</Link>
            <Link to="/cuu-ho" className="hover:text-blue-700 transition">Cứu hộ</Link>
            <Link to="/lien-he" className="hover:text-blue-700 transition">Liên hệ</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-full relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;