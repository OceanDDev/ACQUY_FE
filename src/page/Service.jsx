import {
  Truck,
  Wrench,
  ShieldCheck,
  BatteryCharging,
  Search,
  PhoneCall,
  Gauge,
  CheckCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactButtons from "../modules/Client/Contact";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Truck size={40} className="text-blue-600" />,
      title: "Cứu Hộ Ắc Quy 24/7 Tại Bến Cát - Dĩ An - Thuận An",
      image: "/img/a2.jpg",
      desc: "Xe không khởi động được giữa đường tại Bến Cát, An Tây, Dĩ An hay Thuận An? Đừng lo lắng! Đội ngũ kỹ thuật Huy Hậu có mặt sau 15-30 phút để kích bình hoặc thay mới tận nơi khắp Bình Dương.",
      features: [
        "Phục vụ 24/7 toàn Bến Cát & Bình Dương",
        "Giá niêm yết công khai tại chỗ",
        "Xử lý nhanh chóng trong 30 phút",
      ],
    },
    {
      id: 2,
      icon: <Wrench size={40} className="text-orange-600" />,
      title: "Lắp Đặt Ắc Quy Tận Nhà Miễn Phí",
      image: "/img/a1.jpg",
      desc: "Mua ắc quy GS, Pinaco tại Huy Hậu An Tây, bạn được miễn phí 100% công lắp đặt tận nhà tại Bến Cát, Dĩ An, Thuận An. Kỹ thuật viên chuyên nghiệp sẽ kiểm tra hệ thống sạc trước khi bàn giao.",
      features: [
        "Đúng kỹ thuật chuẩn hãng GS & Pinaco",
        "Kiểm tra máy phát điện miễn phí",
        "Vệ sinh cọc bình & xử lý axit",
      ],
    },
    {
      id: 3,
      icon: <Gauge size={40} className="text-green-600" />,
      title: "Kiểm Tra & Bảo Dưỡng Ắc Quy Định Kỳ",
      image: "/img/a3.jpg",
      desc: "Dịch vụ đo kiểm dung lượng ắc quy bằng thiết bị chuyên dụng tại Bến Cát, giúp bạn biết chính xác tình trạng bình để có kế hoạch thay thế kịp thời. Phục vụ tận nhà tại Dĩ An, Thuận An, Bình Dương.",
      features: [
        "Đo bằng máy kỹ thuật số chính xác",
        "Châm nước cất miễn phí cho bình khô",
        "Tư vấn tuổi thọ & thời điểm thay mới",
      ],
    },
    {
      id: 4,
      icon: <BatteryCharging size={40} className="text-purple-600" />,
      title: "Thu Mua Ắc Quy Cũ Giá Cao Nhất Bình Dương",
      image: "/img/a2.jpg",
      desc: "Huy Hậu thu mua lại tất cả các loại bình ắc quy cũ, hỏng với giá cao nhất tại khu vực Bến Cát, An Tây, Dĩ An, Thuận An để hỗ trợ khách hàng đổi bình mới tiết kiệm hơn.",
      features: [
        "Trừ trực tiếp vào hóa đơn mua mới",
        "Thu mua tận nơi tại Bình Dương",
        "Giá cả minh bạch công khai",
      ],
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>
          Dịch Vụ Ắc Quy Bến Cát, Dĩ An, Thuận An - Cứu Hộ 24/7 Bình Dương
        </title>
        <meta
          name="description"
          content="Dịch vụ ắc quy chuyên nghiệp tại Bến Cát, An Tây, Dĩ An, Thuận An: Cứu hộ 24/7, lắp đặt miễn phí, kiểm tra bảo dưỡng, thu mua bình cũ. Hotline: 0354.851.779"
        />
        <meta
          name="keywords"
          content="cứu hộ ắc quy Bến Cát, sửa ắc quy Dĩ An, thay ắc quy tận nhà Thuận An, lắp đặt ắc quy An Tây, kiểm tra ắc quy Bình Dương, thu mua ắc quy cũ Bến Cát, dịch vụ ắc quy 24/7 Bình Dương"
        />
        <link rel="canonical" href="https://acquyhuyhau.com/dich-vu" />
      </Helmet>

      {/* Banner Dịch Vụ */}
      <section className="relative bg-blue-700 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/a3.jpg"
            className="w-full h-full object-cover"
            alt="Dịch vụ ắc quy chuyên nghiệp Bến Cát Bình Dương"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Dịch Vụ Ắc Quy Chuyên Nghiệp
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto italic font-medium">
            "Tận tâm - Nhanh chóng - Uy tín tại Bến Cát, An Tây, Dĩ An, Thuận
            An, Bình Dương"
          </p>
        </div>
      </section>

      {/* Danh Sách Dịch Vụ */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Dịch Vụ Ắc Quy Toàn Diện Tại Bình Dương
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Phục vụ chuyên nghiệp từ Bến Cát, An Tây đến Dĩ An, Thuận An với đội
            ngũ kỹ thuật 10 năm kinh nghiệm
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {services.map((s, index) => (
            <div
              key={s.id}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-md transition-all`}
            >
              {/* Ảnh minh họa dịch vụ */}
              <div className="lg:w-1/2 w-full relative group">
                <div className="overflow-hidden rounded-[2rem] h-[350px]">
                  <img
                    src={s.image}
                    alt={`${s.title} tại Bến Cát Bình Dương`}
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
                <h3 className="text-3xl font-black text-slate-900">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-bold text-slate-700"
                    >
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

      {/* Khu vực phục vụ */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Phủ Sóng Toàn Bộ Bình Dương
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Dịch vụ cứu hộ, lắp đặt, bảo dưỡng ắc quy tận nơi trong 30 phút
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Bến Cát", time: "15-20 phút" },
              { name: "An Tây", time: "10-15 phút" },
              { name: "Dĩ An", time: "25-30 phút" },
              { name: "Thuận An", time: "25-30 phút" },
              { name: "Thủ Dầu Một", time: "35-40 phút" },
              { name: "Tân Uyên", time: "30-35 phút" },
              { name: "KCN Mỹ Phước", time: "20-25 phút" },
              { name: "KCN Vsip", time: "30-35 phút" },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-2xl font-black mb-2">{area.name}</div>
                <div className="text-blue-200 text-sm font-semibold">
                  ⚡ {area.time}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 text-lg font-semibold">
              🚗 Cứu hộ ắc quy 24/7 - Luôn sẵn sàng phục vụ bạn!
            </p>
          </div>
        </div>
      </section>

      {/* Quy Trình Phục Vụ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Quy Trình Chuyên Nghiệp Trong 4 Bước
          </h2>
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Cam kết phục vụ nhanh chóng, chuyên nghiệp tại mọi khu vực Bình
            Dương
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Tiếp nhận yêu cầu",
                desc: "Gọi Hotline 0354.851.779 hoặc nhắn tin Zalo từ Bến Cát, Dĩ An, Thuận An.",
              },
              {
                step: "02",
                title: "Tư vấn & báo giá",
                desc: "Kỹ thuật viên tư vấn loại bình phù hợp và báo giá minh bạch.",
              },
              {
                step: "03",
                title: "Triển khai dịch vụ",
                desc: "Giao hàng và lắp đặt tận nơi sau 30 phút tại Bình Dương.",
              },
              {
                step: "04",
                title: "Bảo hành chính hãng",
                desc: "Kích hoạt bảo hành điện tử GS & Pinaco ngay tại chỗ.",
              },
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-slate-100 group-hover:text-blue-50 transition-colors absolute -top-10 left-1/2 -translate-x-1/2 -z-0">
                  {p.step}
                </div>
                <div className="relative z-10 space-y-2">
                  <h4 className="text-xl font-bold text-slate-800">
                    {p.title}
                  </h4>
                  <p className="text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cam kết dịch vụ */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-16">
            Cam Kết Dịch Vụ Tại Huy Hậu Bến Cát
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "100% Chính Hãng",
                desc: "Ắc quy GS & Pinaco nhập khẩu trực tiếp, có tem chống hàng giả",
              },
              {
                icon: "⚡",
                title: "Phục Vụ Siêu Tốc",
                desc: "15-30 phút có mặt tại Bến Cát, An Tây, Dĩ An, Thuận An",
              },
              {
                icon: "💎",
                title: "Giá Tốt Nhất",
                desc: "Cam kết giá cạnh tranh nhất khu vực Bình Dương",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-blue-500 transition-all text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Câu hỏi thường gặp */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-black text-slate-900 text-center mb-4">
            Câu Hỏi Thường Gặp Về Dịch Vụ Ắc Quy
          </h3>
          <p className="text-center text-slate-600 mb-12">
            Giải đáp thắc mắc của khách hàng tại Bến Cát, Dĩ An, Thuận An, Bình
            Dương
          </p>

          <div className="space-y-6">
            {[
              {
                q: "Dịch vụ lắp đặt tận nhà có tốn thêm phí không?",
                a: "Hoàn toàn miễn phí công lắp đặt và kiểm tra máy phát khi bạn mua bình ắc quy tại đại lý Huy Hậu. Áp dụng cho tất cả khu vực Bến Cát, An Tây, Dĩ An, Thuận An.",
              },
              {
                q: "Ắc quy GS và Pinaco được bảo hành bao lâu?",
                a: "Tất cả ắc quy GS & Pinaco chính hãng được bảo hành từ 6-12 tháng tùy dòng sản phẩm (Ô tô/Xe máy). Bảo hành điện tử toàn quốc, không giới hạn địa điểm.",
              },
              {
                q: "Cứu hộ ắc quy 24/7 có phục vụ khu vực nào?",
                a: "Chúng tôi phục vụ cứu hộ ắc quy 24/7 tại Bến Cát, An Tây, Dĩ An, Thuận An và toàn bộ Bình Dương. Thời gian có mặt từ 15-45 phút tùy khu vực.",
              },
              {
                q: "Tôi có được kiểm tra bình trước khi thanh toán?",
                a: "Chắc chắn! Kỹ thuật viên sẽ dùng máy đo chuyên dụng kiểm tra tình trạng bình mới, đo dung lượng và test ngay tại chỗ cho bạn xem trước khi lắp đặt.",
              },
              {
                q: "Thu mua ắc quy cũ giá bao nhiêu?",
                a: "Giá thu mua ắc quy cũ dao động từ 50.000đ - 200.000đ tùy loại bình và tình trạng. Giá áp dụng đồng nhất tại Bến Cát, Dĩ An, Thuận An, Bình Dương.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3 text-lg">
                  <Search className="text-blue-600 flex-shrink-0" size={18} />{" "}
                  {item.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA cuối trang */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-blue-900 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Cần Dịch Vụ Ắc Quy Tại Bình Dương?
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            Cứu hộ, lắp đặt, bảo dưỡng ắc quy chuyên nghiệp tại Bến Cát, An Tây,
            Dĩ An, Thuận An. Có mặt trong 30 phút!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0354851779"
              className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-2"
            >
              <PhoneCall size={24} />
              0354.851.779
            </a>
            <a
              href="https://zalo.me/0354851779"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all inline-flex items-center gap-2"
            >
              💬 Chat Zalo
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            ⚡ Phục vụ 24/7 - Luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>
      </section>

      <ContactButtons />
    </main>
  );
};

export default Services;
