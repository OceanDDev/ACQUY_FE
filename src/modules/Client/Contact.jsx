import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

const ContactButtons = () => {
  return (
    <>
      {/* CỘT TRÁI: Nút Hotline - Luôn hiện số điện thoại */}
      <div className="fixed bottom-6 left-4 md:bottom-8 md:left-6 z-[99] group">
        <a
          href="tel:0354851779"
          className="relative flex items-center gap-2 md:gap-3 bg-red-600 text-white p-2 md:p-3 md:pr-6 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all hover:scale-110 active:scale-95"
        >
          {/* Hiệu ứng vòng tròn lan tỏa */}
          <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-30"></span>

          <div className="bg-white p-1.5 md:p-2 rounded-full text-red-600 relative z-10 shrink-0">
            <Phone className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
          </div>

          {/* Phần chữ: Luôn hiển thị */}
          <div className="flex flex-col relative z-10">
            <span className="text-[8px] md:text-[10px] uppercase font-bold opacity-90 leading-none">
              Cứu hộ 24/7
            </span>
            <span className="text-sm md:text-lg font-black tracking-tighter leading-tight">
              0354.851.779
            </span>
          </div>
        </a>
      </div>

      {/* CỘT PHẢI: Các nền tảng mạng xã hội */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-[99] flex flex-col gap-3 md:gap-4">
        {/* Zalo */}
        <a
          href="https://zalo.me/0354851779"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-lg hover:-translate-x-2 transition-all flex items-center justify-center group"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute right-full mr-3 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Zalo Tư Vấn
          </span>
        </a>

        {/* Facebook */}    
        <a
          href="https://www.facebook.com/ac.quy.hau.2024?mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-lg hover:-translate-x-2 transition-all flex items-center justify-center group"
        >
          <Facebook className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
          <span className="absolute right-full mr-3 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Fanpage
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:acquyhuyhau@gmail.com"
          className="bg-slate-800 text-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-lg hover:-translate-x-2 transition-all flex items-center justify-center group"
        >
          <Mail className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute right-full mr-3 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Gửi báo giá
          </span>
        </a>
      </div>
    </>
  );
};

export default ContactButtons;
