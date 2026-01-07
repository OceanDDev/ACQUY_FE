const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black mb-6">ACQUY <span className="text-blue-500">PRO</span></div>
          <p className="text-slate-400">Đại lý phân phối ắc quy hàng đầu Việt Nam. Chất lượng tạo nên thương hiệu.</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6 text-blue-500">Chính sách</h5>
          <ul className="space-y-3 text-slate-400">
            <li><a href="#" className="hover:text-white transition">Bảo hành</a></li>
            <li><a href="#" className="hover:text-white transition">Giao hàng tận nơi</a></li>
            <li><a href="#" className="hover:text-white transition">Đổi trả 1-1</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6 text-blue-500">Liên hệ</h5>
          <p className="text-slate-400">Hotline: 0900.xxx.xxx</p>
          <p className="text-slate-400">Email: contact@acquypro.vn</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6 text-blue-500">Đăng ký nhận báo giá</h5>
          <input type="email" placeholder="Email của bạn" className="w-full bg-slate-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 text-white mb-2" />
          <button className="w-full bg-blue-600 py-2 rounded-lg font-bold hover:bg-blue-500">Gửi</button>
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
        © 2024 ACQUY PRO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;