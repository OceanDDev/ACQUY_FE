import { Phone, MapPin, Mail, Facebook, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* CỘT 1: THÔNG TIN CÔNG TY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter">ACQUY <span className="text-blue-500">HUYHAU</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đại lý ủy quyền chính thức của GS và Pinaco tại Bình Dương. Chuyên cung cấp giải pháp năng lượng bền bỉ cho mọi loại phương tiện.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Liên kết</h4>
            <ul className="space-y-4">
              {['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Dịch vụ'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-slate-400 hover:text-blue-500 flex items-center gap-2 transition-colors group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: DỊCH VỤ HỖ TRỢ */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Dịch vụ</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Cứu hộ ắc quy 24/7</li>
              <li>Thay ắc quy tận nơi</li>
              <li>Kiểm tra hệ thống sạc</li>
              <li>Thu mua bình cũ giá cao</li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ TRỰC TIẾP */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <span className="text-slate-400 text-sm italic">TL 744, Ấp Rạch Bắp, Xã An Tây, Bến Cát, Bình Dương</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <a href="tel:0354851779" className="text-xl font-black text-white hover:text-blue-500 transition-colors">0354.851.779</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <span className="text-slate-400 text-sm">acquyhuyhau@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          <p>© 2026 Ắc Quy Huy Hậu. Thiết kế bởi Huy Hậu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;