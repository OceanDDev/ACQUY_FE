import { Zap, ShieldCheck, Clock, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section / Banner */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 px-4 overflow-hidden">
        {/* Trang trí nền */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Cột trái: Nội dung văn bản */}
          <div className="lg:w-1/2 space-y-7 z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 px-4 py-2 rounded-full shadow-sm">
              <Zap size={16} className="text-blue-600 fill-blue-600" />
              <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">Đại lý ắc quy GS số 1 Bình Dương</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Ắc Quy GS <br /> 
              <span className="text-blue-600">Năng Lượng Bền Bỉ</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Cung cấp dòng ắc quy <span className="font-bold text-slate-800">GS N100 (100Ah - 12V)</span> chính hãng. 
              Phù hợp cho xe tải, tàu thuyền, máy phát điện với hiệu suất cực cao.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 shadow-xl shadow-blue-200 transition-all flex items-center gap-2 group">
                Đặt mua ngay
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-700 hover:text-blue-700 transition-all">
                Bảng giá chi tiết
              </button>
            </div>

            {/* Icon cam kết */}
            <div className="grid grid-cols-2 gap-4 pt-6">
               <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <ShieldCheck className="text-green-500" /> Bảo hành 12 tháng
               </div>
               <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Clock className="text-orange-500" /> Lắp đặt nhanh 15'
               </div>
            </div>
          </div>

          {/* Cột phải: Hình ảnh thực tế của bình ắc quy */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Vòng hào quang phía sau */}
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] opacity-10 animate-pulse"></div>
            
            <div className="relative group w-full max-w-md">
              <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden transition-transform duration-500 group-hover:-translate-y-4">
                
                {/* Phần Header giả của bình ắc quy cho hiện đại */}
                <div className="absolute top-0 left-0 w-full h-3 bg-blue-600"></div>
                
                {/* Ảnh sản phẩm thật */}
                <div className="p-6">
                  <img 
                    src="/img/gs-100d31r_0756.jpg" 
                    alt="Ắc quy GS N100" 
                    className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
                  />
                </div>

                {/* Thông số dưới ảnh */}
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <h3 className="text-3xl font-black text-slate-800">GS N100</h3>
                  <p className="text-blue-600 font-bold text-xl italic uppercase">100Ah - 12V</p>
                  <div className="mt-3 flex justify-center gap-1">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xl">★</span>)}
                  </div>
                </div>
              </div>

              {/* Tag giảm giá/nổi bật */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white font-black px-6 py-2 rounded-2xl shadow-lg rotate-12 animate-bounce">
                GIÁ TỐT NHẤT!
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-4xl font-black text-slate-900 mb-4">Danh mục sản phẩm</h3>
          <p className="text-slate-500">Chúng tôi cung cấp đầy đủ các loại ắc quy phù hợp cho mọi nhu cầu của bạn tại Bình Dương</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: 'Ắc quy Ô tô', desc: 'Khởi động mạnh mẽ, bền bỉ' },
            { name: 'Ắc quy Xe máy', desc: 'Chính hãng GS, Đồng Nai' },
            { name: 'Ắc quy Công trình', desc: 'Dành cho xe tải, máy xúc' }
          ].map((cat) => (
            <div key={cat.name} className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-[0_30px_60px_-15px_rgba(29,78,216,0.15)] transition-all cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <Zap className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">{cat.name}</h4>
              <p className="text-slate-500 mt-2">{cat.desc}</p>
              <div className="mt-6 text-blue-700 font-bold flex items-center gap-2">
                Xem ngay <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;