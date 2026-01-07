import { ShoppingCart, Phone, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Ắc Quy GS N100', capacity: '100Ah - 12V', price: '2.150.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Ô tô' },
  { id: 2, name: 'Ắc Quy GS N150', capacity: '150Ah - 12V', price: '3.450.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Tàu thuyền' },
  { id: 3, name: 'Ắc Quy GS N70', capacity: '70Ah - 12V', price: '1.650.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Ô tô' },
  { id: 4, name: 'Ắc Quy GS MF 55D23L', capacity: '60Ah - 12V', price: '1.450.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Xe du lịch' },
  { id: 5, name: 'Ắc Quy GS N200', capacity: '200Ah - 12V', price: '4.850.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Xe tải nặng' },
  { id: 6, name: 'Ắc Quy GS N50', capacity: '50Ah - 12V', price: '1.150.000đ', img: '/img/gs-100d31r_0756.jpg', type: 'Ô tô con' },
];

const Product = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      <div className="bg-blue-700 py-12 text-white shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">Danh mục sản phẩm</h1>
          <p className="text-blue-100 max-w-2xl mx-auto font-medium">Cung cấp đầy đủ các dòng ắc quy GS chính hãng cho mọi loại xe.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 font-bold text-slate-800 mb-6">
                <Filter size={20} className="text-blue-600" />
                <span>Bộ lọc sản phẩm</span>
              </div>
              <div className="space-y-4">
                {['Ắc quy GS', 'Ắc quy Đồng Nai', 'Ắc quy Varta'].map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600" />
                    <span className="text-slate-600 group-hover:text-blue-700 transition font-medium">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl glow-red border border-red-500/20">
               <h4 className="font-black text-xl mb-2 text-red-500">Cứu hộ ắc quy?</h4>
               <p className="text-slate-400 text-sm mb-6 font-medium">Gọi ngay để được hỗ trợ tận nơi trong 15 phút tại Long Khánh.</p>
               <a href="tel:0900xxxxxx" className="bg-red-600 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-black hover:bg-red-500 transition-all shadow-lg shadow-red-900/50 uppercase text-sm">
                 <Phone size={18} fill="currentColor" /> Gọi 0900.xxx.xxx
               </a>
            </div>
          </aside>

          {/* Grid sản phẩm */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((item) => (
                <Link to="/chi-tiet-san-pham" key={item.id} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all flex flex-col">
                  <div className="relative p-6 bg-slate-50 flex justify-center items-center group-hover:bg-white transition-colors duration-500 h-56">
                    <img src={item.img} alt={item.name} className="h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">{item.type}</div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors uppercase tracking-tighter">{item.name}</h3>
                      <p className="text-blue-600 font-bold italic text-sm mb-4">{item.capacity}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Giá ưu đãi</p>
                        <p className="text-xl font-black text-red-600 tracking-tighter">{item.price}</p>
                      </div>
                      <div className="bg-slate-900 text-white p-3 rounded-xl group-hover:bg-blue-700 transition-colors">
                        <ShoppingCart size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;