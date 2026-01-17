import {
  CheckCircle2,
  History,
  Truck,
  Wrench,
  Headphones,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactButtons from "../modules/Client/Contact";

const About = () => {
  return (
    <main className="bg-white min-h-screen">
      <Helmet>
        <title>
          Ắc Quy Bến Cát, An Tây, Dĩ An, Thuận An - Huy Hậu Bình Dương
        </title>
        <meta
          name="description"
          content="Đại lý ắc quy GS, Pinaco chính hãng tại Bến Cát, An Tây, Dĩ An, Thuận An, Bình Dương. Giao tận nơi 30 phút, lắp đặt miễn phí, bảo hành dài hạn. Hotline: 0354.851.779"
        />
        <meta
          name="keywords"
          content="ắc quy Bến Cát, ắc quy An Tây, ắc quy Dĩ An, ắc quy Thuận An, ắc quy Bình Dương, ắc quy GS Bến Cát, ắc quy Pinaco An Tây, bán ắc quy ô tô Dĩ An, ắc quy xe máy Thuận An, thay ắc quy tận nơi Bình Dương"
        />
        <link rel="canonical" href="https://acquyhuyhau.com/gioi-thieu" />
      </Helmet>

      {/* 1. Header Section - Sử dụng a2.jpg làm banner nền mờ */}
      <section className="relative bg-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/img/a2.jpg"
            alt="Kho ắc quy GS Pinaco Bến Cát An Tây Bình Dương"
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
            Đại lý Huy Hậu - Chuyên cung cấp ắc quy GS, Pinaco chính hãng tại
            Bến Cát, An Tây, Dĩ An, Thuận An và toàn Bình Dương. Giao hàng nhanh
            trong 30 phút.
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
                alt="Đại lý ắc quy Huy Hậu tại TL744 An Tây Bến Cát Bình Dương"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-slate-800 font-bold">
                  <MapPin className="text-blue-600" size={18} />
                  <span>TL744, An Tây, Bến Cát, Bình Dương</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-[2.5rem] -z-10 opacity-20"></div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
              Về chúng tôi
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Phân phối ắc quy chính hãng số 1 khu vực Bến Cát - Bình Dương
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Đại lý ắc quy Huy Hậu tự hào là đối tác chiến lược của tập đoàn
              Pinaco và GS Việt Nam tại khu vực Bến Cát, An Tây, Dĩ An, Thuận
              An. Với kho hàng rộng lớn và sẵn có đầy đủ các mã bình, chúng tôi
              cam kết phục vụ nhanh nhất cho cá nhân và doanh nghiệp vận tải
              trên toàn Bình Dương.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sản phẩm date mới nhất",
                "Đội ngũ kỹ thuật 10 năm kinh nghiệm",
                "Giá sỉ cạnh tranh nhất Bình Dương",
                "Cứu hộ tận nơi 24/7 toàn tỉnh",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl"
                >
                  <CheckCircle2 className="text-green-500" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Khu vực phủ sóng - SEO Local */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Phục vụ toàn khu vực Bình Dương
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Giao hàng siêu tốc trong 30-60 phút. Phủ sóng đầy đủ các khu công
              nghiệp và khu dân cư tại Bình Dương.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { area: "Bến Cát", highlight: "Trung tâm chính" },
              { area: "An Tây", highlight: "Kho hàng tại đây" },
              { area: "Dĩ An", highlight: "Giao 30 phút" },
              { area: "Thuận An", highlight: "Giao 30 phút" },
              { area: "Thủ Dầu Một", highlight: "Giao 45 phút" },
              { area: "KCN Mỹ Phước", highlight: "Chuyên phục vụ" },
              { area: "KCN Vsip", highlight: "Chuyên phục vụ" },
              { area: "Tân Uyên", highlight: "Giao trong ngày" },
            ].map((location, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-blue-500"
              >
                <MapPin className="text-blue-600 mb-3" size={32} />
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {location.area}
                </h3>
                <p className="text-sm text-blue-600 font-bold">
                  {location.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Thư viện hình ảnh kho hàng thực tế */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Hình ảnh thực tế tại kho An Tây
              </h2>
              <p className="text-slate-500 text-lg">
                Kho hàng tại TL744, An Tây, Bến Cát - Hàng luôn sẵn sàng phục vụ
                khách hàng tại Dĩ An, Thuận An và toàn Bình Dương.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hình ảnh a2 - Kho hàng tầng dưới */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/img/a2.jpg"
                alt="Kho ắc quy GS Platinum Hybrid tại An Tây Bến Cát"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-xl">
                  Kho ắc quy GS Platinum & Hybrid tại Bến Cát
                </p>
              </div>
            </div>
            {/* Hình ảnh a3 - Kho hàng tầng trên */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="/img/a3.jpg"
                alt="Hệ thống kho ắc quy Pinaco chuyên nghiệp Bình Dương"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold text-xl">
                  Hệ thống kệ hàng hiện đại, chuyên nghiệp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dịch vụ nổi bật */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Dịch vụ ắc quy chuyên nghiệp tại Bình Dương
          </h2>
          <p className="text-slate-600 text-lg">
            Phục vụ tận tâm từ Bến Cát, An Tây đến Dĩ An, Thuận An
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Truck className="text-blue-600" />,
              title: "Giao hàng siêu tốc",
              desc: "30 phút tại Bến Cát, An Tây, Dĩ An, Thuận An. 60 phút toàn Bình Dương.",
            },
            {
              icon: <Wrench className="text-orange-600" />,
              title: "Lắp đặt miễn phí",
              desc: "Kỹ thuật viên tận nơi, chuẩn kỹ thuật an toàn.",
            },
            {
              icon: <ShieldCheck className="text-green-600" />,
              title: "Bảo hành chính hãng",
              desc: "Đổi mới 1-1 theo chính sách GS & Pinaco Việt Nam.",
            },
            {
              icon: <Headphones className="text-purple-600" />,
              title: "Tư vấn 24/7",
              desc: "Hỗ trợ kỹ thuật và báo giá mọi lúc tại Bình Dương.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lý do chọn Huy Hậu */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Tại sao khách hàng Bình Dương chọn Huy Hậu?
            </h2>
            <p className="text-slate-300 text-lg">
              Hơn 10 năm phục vụ tại Bến Cát, An Tây với hàng ngàn khách hàng
              tin tưởng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "10+",
                label: "Năm kinh nghiệm",
                desc: "Phục vụ khách hàng tại Bến Cát và Bình Dương",
              },
              {
                number: "5000+",
                label: "Khách hàng tin dùng",
                desc: "Từ cá nhân đến doanh nghiệp vận tải",
              },
              {
                number: "100%",
                label: "Hàng chính hãng",
                desc: "Đại lý ủy quyền GS & Pinaco Việt Nam",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-slate-800 rounded-3xl hover:bg-slate-700 transition-all"
              >
                <div className="text-5xl md:text-6xl font-black text-blue-500 mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA - Liên hệ ngay */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-blue-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Cần ắc quy tại Bến Cát, Dĩ An, Thuận An?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Ắc Quy Huy Hậu - Chuyên bán bình ắc quy Ô tô, Xe máy, Xe đạp điện.
              Sửa chữa và thay thế tận nhà uy tín chuyên nghiệp tại An Tây, Bến
              Cát, Bình Dương.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:0354851779"
                className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-xl"
              >
                📞 0354.851.779
              </a>
              <a
                href="/lien-he"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all"
              >
                Nhận Báo Giá Sỉ
              </a>
            </div>
            <p className="text-blue-200 text-sm">
              🚚 Giao hàng miễn phí trong 30 phút tại Bến Cát - An Tây - Dĩ An -
              Thuận An
            </p>
          </div>
        </div>
      </section>

      <ContactButtons />
    </main>
  );
};

export default About;
