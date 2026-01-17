import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Globe,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* CỘT 1: THÔNG TIN CÔNG TY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo.jpg"
                alt="Logo Ắc Quy Huy Hậu Bến Cát Bình Dương"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-black tracking-tighter">
                ACQUY <span className="text-blue-500">HUYHAU</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đại lý ủy quyền chính thức của GS và Pinaco tại Bến Cát, An Tây,
              Bình Dương. Chuyên cung cấp ắc quy chính hãng cho ô tô, xe máy tại
              Dĩ An, Thuận An và toàn tỉnh.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571484711911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook Ắc Quy Huy Hậu"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://zalo.me/0354851779"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Zalo Ắc Quy Huy Hậu"
              >
                <Zap size={20} />
              </a>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">
              Liên kết
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Trang chủ", path: "/" },
                { name: "Sản phẩm", path: "/san-pham" },
                { name: "Giới thiệu", path: "/about" },
                { name: "Dịch vụ", path: "/services" },
                { name: "Tin tức", path: "/news" },
                { name: "Liên hệ", path: "/contacts" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-blue-500 flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: KHU VỰC PHỤC VỤ */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">
              Khu vực
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Ắc quy Bến Cát 24/7
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Ắc quy An Tây (Kho)
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Ắc quy Dĩ An
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Ắc quy Thuận An
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Thủ Dầu Một
              </li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                ✓ Toàn tỉnh Bình Dương
              </li>
            </ul>
          </div>

          {/* CỘT 4: LIÊN HỆ TRỰC TIẾP */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3 uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <div className="text-slate-400 text-sm">
                  <p className="font-bold text-white mb-1">Địa chỉ kho:</p>
                  <p className="italic">
                    TL 744, Ấp Rạch Bắp, Xã An Tây, Bến Cát, Bình Dương
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-500 mb-1">Cứu hộ 24/7</p>
                  <a
                    href="tel:0354851779"
                    className="text-xl font-black text-white hover:text-blue-500 transition-colors"
                  >
                    0354.851.779
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <a
                  href="mailto:acquyhuyhau@gmail.com"
                  className="text-slate-400 text-sm hover:text-blue-500 transition-colors"
                >
                  acquyhuyhau@gmail.com
                </a>
              </li>
            </ul>

            {/* Nút CTA */}
            <div className="mt-6">
              <a
                href="tel:0354851779"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-center transition-all shadow-lg hover:shadow-xl"
              >
                📞 Gọi ngay cứu hộ
              </a>
            </div>
          </div>
        </div>

        {/* DỊCH VỤ NỔI BẬT */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-blue-500 mb-2">10+</div>
              <div className="text-xs text-slate-500">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-500 mb-2">24/7</div>
              <div className="text-xs text-slate-500">Cứu hộ Bình Dương</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-500 mb-2">30'</div>
              <div className="text-xs text-slate-500">Có mặt tận nơi</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-500 mb-2">100%</div>
              <div className="text-xs text-slate-500">Hàng chính hãng</div>
            </div>
          </div>
        </div>

        {/* SEO KEYWORDS FOOTER */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="text-center text-slate-600 text-xs leading-relaxed">
            <p className="mb-3">
              <strong className="text-slate-400">Từ khóa:</strong> Ắc quy Bến
              Cát | Ắc quy An Tây | Ắc quy Dĩ An | Ắc quy Thuận An | Ắc quy Bình
              Dương | Bán ắc quy GS Bến Cát | Ắc quy Pinaco Dĩ An | Thay ắc quy
              tận nhà Thuận An | Cứu hộ ắc quy 24/7 Bình Dương | Ắc quy ô tô Bến
              Cát | Ắc quy xe máy An Tây
            </p>
            <p className="text-slate-700 text-[10px]">
              Đại lý ắc quy uy tín tại TL744 An Tây, Bến Cát, phục vụ Dĩ An,
              Thuận An, Thủ Dầu Một và toàn Bình Dương. Chuyên cung cấp ắc quy
              GS, Pinaco chính hãng cho ô tô, xe máy, xe tải với giá tốt nhất
              khu vực.
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs mb-2">
            © 2026{" "}
            <strong className="text-slate-400">
              Ắc Quy Huy Hậu - Bến Cát, Bình Dương
            </strong>
            . All Rights Reserved.
          </p>
          <p className="text-slate-600 text-[10px]">
            Website bởi <span className="text-slate-500">Huy Hậu Tech</span> |
            <Link
              to="/chinh-sach-bao-mat"
              className="text-slate-500 hover:text-blue-500 ml-1"
            >
              Chính sách bảo mật
            </Link>{" "}
            |
            <Link
              to="/dieu-khoan"
              className="text-slate-500 hover:text-blue-500 ml-1"
            >
              Điều khoản
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
