import { Truck, Wrench, ShieldCheck, BatteryCharging, Search, PhoneCall, Gauge, CheckCircle } from 'lucide-react';
import ContactButtons from '../modules/Client/Contact';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Truck size={40} className="text-blue-600" />,
      title: "Cứu Hộ Ắc Quy 24/7",
      image: "/img/a2.jpg", // Hình ảnh kho hàng thể hiện sự sẵn sàng
      desc: "Xe không khởi động được giữa đường? Đừng lo lắng, chúng tôi có mặt sau 15-30 phút để kích bình hoặc thay mới tận nơi tại Bến Cát, An Tây.",
      features: ["Hỗ trợ mọi cung đường", "Giá niêm yết công khai", "Xử lý nhanh chóng"]
    },
    {
      id: 2,
      icon: <Wrench size={40} className="text-orange-600" />,
      title: "Lắp Đặt Tận Nhà Miễn Phí",
      image: "/img/a1.jpg", // Hình ảnh mặt tiền cửa hàng tạo niềm tin
      desc: "Mua ắc quy tại Huy Hậu, bạn được miễn phí hoàn toàn công lắp đặt tận nhà. Kỹ thuật viên sẽ kiểm tra hệ thống sạc trước khi bàn giao.",
      features: ["Đúng kỹ thuật hãng", "Kiểm tra máy phát miễn phí", "Vệ sinh cọc bình"]
    },
    {
      id: 3,
      icon: <Gauge size={40} className="text-green-600" />,
      title: "Kiểm Tra & Bảo Dưỡng Định Kỳ",
      image: "/img/a3.jpg", // Hình ảnh kệ hàng chuyên nghiệp
      desc: "Dịch vụ đo kiểm dung lượng ắc quy bằng thiết bị chuyên dụng, giúp bạn biết chính xác tình trạng bình để có kế hoạch thay thế kịp thời.",
      features: ["Đo bằng máy kỹ thuật số", "Châm nước cất miễn phí", "Tư vấn tuổi thọ bình"]
    },
    {
      id: 4,
      icon: <BatteryCharging size={40} className="text-purple-600" />,
      title: "Thu Mua Bình Cũ Giá Cao",
      image: "/img/a2.jpg", 
      desc: "Chúng tôi thu mua lại tất cả các loại bình ắc quy cũ, hỏng với giá cao nhất thị trường để hỗ trợ khách hàng đổi bình mới tiết kiệm hơn.",
      features: ["Trừ trực tiếp vào đơn hàng", "Thu mua tận nơi", "Giá cả minh bạch"]
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Banner Dịch Vụ */}
      <section className="relative bg-blue-700 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="/img/a3.jpg" className="w-full h-full object-cover" alt="Service Banner" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Dịch Vụ Chuyên Nghiệp</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto italic font-medium">
             "Tận tâm - Nhanh chóng - Uy tín tại TL744, Bến Cát, Bình Dương"
          </p>
        </div>
      </section>

      {/* Danh Sách Dịch Vụ */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {services.map((s, index) => (
            <div 
              key={s.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-md transition-all`}
            >
              {/* Ảnh minh họa dịch vụ */}
              <div className="lg:w-1/2 w-full relative group">
                <div className="overflow-hidden rounded-[2rem] h-[350px]">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Icon nổi trên ảnh */}
                <div className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl">
                  {s.icon}
                </div>
              </div>

              {/* Nội dung dịch vụ */}
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-black text-slate-900">{s.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                      <CheckCircle className="text-blue-600" size={20} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                   <a 
                    href="tel:0354851779" 
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-colors"
                   >
                     <PhoneCall size={20} />
                     Yêu cầu dịch vụ ngay
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quy Trình Phục Vụ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16">Quy trình chuyên nghiệp trong 4 bước</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tiếp nhận", desc: "Khách hàng gọi Hotline hoặc nhắn tin Zalo." },
              { step: "02", title: "Tư vấn", desc: "Kỹ thuật báo giá và loại bình phù hợp xe." },
              { step: "03", title: "Triển khai", desc: "Giao hàng và lắp đặt tận nhà sau 30 phút." },
              { step: "04", title: "Bảo hành", desc: "Kích hoạt bảo hành điện tử chính hãng." }
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors absolute -top-10 left-1/2 -translate-x-1/2 -z-0">
                   {p.step}
                </div>
                <div className="relative z-10 space-y-2">
                  <h4 className="text-xl font-bold text-slate-800">{p.title}</h4>
                  <p className="text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Câu hỏi thường gặp */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <h3 className="text-3xl font-black text-slate-900 text-center mb-12 italic">Các thắc mắc phổ biến</h3>
        <div className="space-y-6">
          {[
            { q: "Lắp đặt tận nhà có tốn thêm phí không?", a: "Hoàn toàn miễn phí công lắp đặt và kiểm tra máy phát khi bạn mua bình tại đại lý Huy Hậu." },
            { q: "Ắc quy GS được bảo hành bao lâu?", a: "Tất cả ắc quy GS chính hãng được bảo hành từ 6-12 tháng tùy dòng sản phẩm (Ô tô/Xe máy)." },
            { q: "Tôi có được kiểm tra bình trước khi thanh toán?", a: "Chắc chắn rồi. Kỹ thuật viên sẽ dùng máy đo chuyên dụng test tình trạng bình mới cho bạn xem trước khi lắp." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-lg">
                <Search className="text-blue-600" size={18} /> {item.q}
              </h4>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
                  <ContactButtons />

    </main>
  );
};

export default Services;