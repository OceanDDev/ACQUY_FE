import { Phone, MapPin, Clock, Send, ExternalLink, Zap } from 'lucide-react';
import ContactButtons from '../modules/Client/Contact';

const Contacts = () => {
  // Link trực tiếp mở Google Maps (link mới của bạn)
  const mapLink = "https://www.google.com/maps/place/%E1%BA%AEc+Quy+Huy+H%E1%BA%ADu+%E2%80%93+B%C3%ACnh+%E1%BA%AEc+Quy+%C3%94+T%C3%B4+Xe+M%C3%A1y+R%E1%BA%A1ch+B%E1%BA%AFp/@11.1304375,106.5187498,684m/data=!3m1!1e3!4m6!3m5!1s0x310b3364664be7b3:0x2d7a56b2cb855d9f!8m2!3d11.1307552!4d106.5187692!16s%2Fg%2F11mz0bgzfq?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D";
  
  // Link nhúng Iframe (đã cập nhật tọa độ chính xác từ link mới)
  const googleMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4087894521!2d106.51625807423426!3d11.130755253685732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b3364664be7b3%3A0x2d7a56b2cb855d9f!2z4bqsYyBRdXkgSHV5IEjhuq11IOKAkyBCw6xuaCDhuqxjIFF1eSDDlCBUw7QgWGUgTcOheSBS4bqhY2ggQuG6r3A!5e0!3m2!1svi!2s!4v1736516400000!5m2!1svi!2s";

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter">
            Liên hệ & Chỉ đường
          </h1>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">
            Ắc quy chính hãng Huy Hậu - Rạch Bắp
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ (5 CỘT) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-8 border-blue-600 pl-4 uppercase">
                Thông tin
              </h2>

              <div className="space-y-6">
                {/* Hotline nổi bật nhất */}
                <a href="tel:0354851779" className="flex items-center gap-4 bg-red-600 p-5 rounded-3xl group transition-all hover:bg-slate-900 shadow-lg shadow-red-200">
                  <div className="bg-white/20 p-3 rounded-2xl text-white shrink-0">
                    <Phone size={24} fill="currentColor" className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-white/80 text-[10px] font-black uppercase">Cứu hộ 24/7</p>
                    <p className="text-2xl font-black text-white tracking-tighter">0354.851.779</p>
                  </div>
                </a>

                {/* Địa chỉ */}
                <div className="flex items-start gap-4 p-2">
                  <MapPin className="text-blue-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase">Vị trí</p>
                    <p className="text-slate-800 font-bold leading-snug">
                      TL744, Ấp Rạch Bắp, An Tây, Bến Cát, Bình Dương
                    </p>
                  </div>
                </div>

                {/* Giờ làm việc */}
                <div className="flex items-start gap-4 p-2">
                  <Clock className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase">Giờ làm việc</p>
                    <p className="text-slate-800 font-bold">08:00 – 20:00 (Hàng ngày)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút gửi yêu cầu tư vấn nhanh */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Zap size={18} className="text-yellow-400 fill-yellow-400" /> Nhận báo giá nhanh
              </h3>
              <a 
                href="https://zalo.me/0354851779" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-black transition-all uppercase text-sm text-center"
              >
                Chat Zalo ngay
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: BẢN ĐỒ (7 CỘT - GỌN GÀNG) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
              <div className="relative group overflow-hidden rounded-[2rem] h-[450px] md:h-[550px]">
                {/* Bản đồ nhúng ổn định */}
                <iframe 
                  src={googleMapEmbed}
                  className="w-full h-full border-0 pointer-events-none" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Lớp phủ nhấp chuột để mở Maps */}
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-blue-900/5 transition-colors flex flex-col items-center justify-center group"
                >
                  <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <ExternalLink size={20} className="text-blue-400" />
                    MỞ CHỈ ĐƯỜNG TRÊN GOOGLE MAPS
                  </div>
                  
                  {/* Tag hướng dẫn */}
                  <div className="absolute top-4 left-4 right-4 md:right-auto md:w-max bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-blue-100">
                    <p className="text-blue-700 font-black text-[10px] uppercase tracking-tighter">Bến Cát, Bình Dương</p>
                    <p className="text-slate-800 font-bold text-xs">Ắc Quy Huy Hậu - Rạch Bắp</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
            <ContactButtons />

    </main>
  );
};

export default Contacts;