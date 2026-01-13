import { CheckCircle2, History, Truck, Wrench, Headphones, ShieldCheck, MapPin } from 'lucide-react';
import ContactButtons from '../modules/Client/Contact';

const About = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section - Sử dụng a2.jpg làm banner nền mờ */}
      <section className="relative bg-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/img/a2.jpg" 
            alt="Kho hàng ắc quy GS" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Hơn 10 Năm <br />
            <span className="text-blue-500">Uy Tín Tại Bình Dương</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Đại lý Huy Hậu - Chuyên cung cấp ắc quy GS, Pinaco chính hãng cho ô tô, xe máy và máy công trình.
          </p>
        </div>
      </section>

      {/* 2. Câu chuyện & Hình ảnh mặt tiền (Sử dụng a1.jpg) */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="/img/a1.jpg" 
                alt="Mặt tiền đại lý ắc quy Huy Hậu" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <MapPin className="text-blue-600" size={18} />
                  <span>Địa chỉ: TL744, An Tây, Bến Cát, Bình Dương</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-[2.5rem] -z-10 opacity-20"></div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
               Về chúng tôi
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Phân phối ắc quy chính hãng số 1 khu vực</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Đại lý ắc quy Huy Hậu tự hào là đối tác chiến lược của tập đoàn Pinaco và GS Việt Nam. 
              Với kho hàng rộng lớn và sẵn có đầy đủ các mã bình, chúng tôi cam kết phục vụ nhanh nhất cho cá nhân và doanh nghiệp vận tải.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Sản phẩm date mới nhất", "Đội ngũ kỹ thuật 10 năm kinh nghiệm", "Giá sỉ cạnh tranh", "Cứu hộ tận nơi 24/7"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl">
                  <CheckCircle2 className="text-green-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Thư viện hình ảnh kho hàng thực tế (Sử dụng a2.jpg và a3.jpg) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Hình ảnh thực tế tại kho</h2>
              <p className="text-slate-500 text-lg">Hàng hóa luôn sẵn kho, đa dạng chủng loại từ ắc quy xe máy đến xe tải hạng nặng.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hình ảnh a2 - Kho hàng tầng dưới */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/img/a2.jpg" alt="Kho hàng ắc quy GS" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold text-xl">Kho hàng ắc quy GS Platinum & Hybrid</p>
               </div>
            </div>
            {/* Hình ảnh a3 - Kho hàng tầng trên/tổng thể */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
               <img src="/img/a3.jpg" alt="Đại lý ắc quy Pinaco GS" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold text-xl">Hệ thống kệ hàng hiện đại, chuyên nghiệp</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dịch vụ nổi bật */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Truck className="text-blue-600" />, title: "Giao hàng siêu tốc", desc: "Giao tận nơi 30-60 phút tại Bình Dương." },
            { icon: <Wrench className="text-orange-600" />, title: "Lắp đặt miễn phí", desc: "Chuẩn kỹ thuật, an toàn tuyệt đối cho xe." },
            { icon: <ShieldCheck className="text-green-600" />, title: "Bảo hành dài hạn", desc: "Đổi mới 1-1 theo chính sách của GS & Pinaco." },
            { icon: <Headphones className="text-purple-600" />, title: "Tư vấn 24/7", desc: "Hỗ trợ kỹ thuật và báo giá bất cứ khi nào bạn cần." },
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA - Sử dụng thông tin từ hình ảnh bạn gửi */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-blue-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">Ắc Quy Huy Hậu - Pinaco</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Chuyên bán bình ắc quy Ô tô - Xe máy - Xe đạp điện. Sửa chữa và thay thế tận nhà uy tín chuyên nghiệp.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:0354851779" className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-xl">
                0354.851.779
              </a>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all">
                Nhận Báo Giá Sỉ
              </button>
            </div>
          </div>
        </div>
      </section>
            <ContactButtons />

    </main>
    
  );
};

export default About;