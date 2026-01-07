import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Truck, Zap, MessageCircle, ChevronRight, Star, ArrowLeft } from 'lucide-react';

const Detail = () => {
  const product = {
    name: 'Ắc Quy GS N100',
    capacity: '100Ah - 12V',
    price: '2.150.000đ',
    oldPrice: '2.400.000đ',
    img: '/img/gs-100d31r_0756.jpg',
    specs: [
      { label: 'Điện áp', value: '12V' },
      { label: 'Dung lượng', value: '100Ah' },
      { label: 'Kích thước', value: '410 x 176 x 213 (mm)' },
      { label: 'Loại bình', value: 'Ắc quy nước' },
      { label: 'Bảo hành', value: '12 Tháng' },
      { label: 'Thương hiệu', value: 'GS Nhật Bản' }
    ]
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      <div className="bg-slate-50 border-b border-slate-100 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Link to="/san-pham" className="hover:text-blue-700 flex items-center gap-1"><ArrowLeft size={16}/> Quay lại</Link>
            <span className="text-slate-300">|</span>
            <span className="text-slate-900 uppercase tracking-tighter">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cột trái: Ảnh */}
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-2xl shadow-blue-100/50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <img src={product.img} alt={product.name} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[{ icon: <ShieldCheck className="text-green-600" />, text: 'Chính hãng' }, { icon: <Truck className="text-blue-600" />, text: 'Giao nhanh' }, { icon: <Zap className="text-orange-600" />, text: 'Lắp Free' }].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-1 border border-slate-100">
                    {item.icon} <span className="text-[10px] font-black uppercase text-slate-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải: Info */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor"/>)}
                <span className="text-slate-400 text-xs ml-2 font-bold">(99+ lượt mua)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">{product.name}</h1>
              <p className="text-blue-600 font-black text-2xl italic tracking-widest">{product.capacity}</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-2xl">KHUYẾN MÃI</div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-black text-red-600 tracking-tighter">{product.price}</span>
                <span className="text-slate-400 line-through text-lg font-bold mb-1">{product.oldPrice}</span>
              </div>
              <p className="mt-2 text-slate-600 text-sm font-bold italic">* Giảm thêm khi thu đổi bình cũ tại cửa hàng</p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-100">
              {product.specs.map((spec, i) => (
                <div key={i}>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{spec.label}</p>
                  <p className="text-slate-900 font-bold text-lg">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0900xxxxxx" className="flex-1 bg-red-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl glow-red-strong">
                <Phone size={24} fill="white" className="animate-ring" /> GỌI CỨU HỘ
              </a>
              <a href="https://zalo.me/sdt" className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl hover:bg-blue-700 transition-all">
                <MessageCircle size={24} fill="white" /> CHAT ZALO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;