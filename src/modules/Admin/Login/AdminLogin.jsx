import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock, User, Eye, EyeOff, Zap } from "lucide-react";
import { authService } from "../../../service/Admin/auth.service";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Gọi API đăng nhập
      const response = await authService.login({
        user_name: username,
        password: password,
      });

      console.log("Đăng nhập thành công:", response);

      // Chuyển hướng đến trang admin/categories
      navigate("/admin/categories");
    } catch (err) {
      // Xử lý lỗi
      console.error("Lỗi đăng nhập:", err);

      if (err.response?.status === 401) {
        setError("Tên đăng nhập hoặc mật khẩu không đúng!");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("Không thể kết nối đến server. Vui lòng thử lại!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-4 shadow-2xl shadow-blue-200">
            <Zap size={36} className="text-white fill-white" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            Ắc Quy Huy Hậu
          </h1>
          <p className="text-slate-500 font-medium">
            Đăng nhập vào hệ thống quản trị
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
            <ShieldCheck size={32} className="text-white mx-auto mb-2" />
            <h2 className="text-xl font-bold text-white">Khu vực bảo mật</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-semibold">
                {error}
              </div>
            )}

            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-slate-700 font-bold text-sm flex items-center gap-2">
                <User size={16} className="text-blue-600" />
                Tên đăng nhập
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-slate-900 font-medium"
                  placeholder="Nhập tên đăng nhập"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-slate-700 font-bold text-sm flex items-center gap-2">
                <Lock size={16} className="text-blue-600" />
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-slate-900 font-medium pr-12"
                  placeholder="Nhập mật khẩu"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  Đang xử lý...
                </>
              ) : (
                <>
                  <ShieldCheck size={20} />
                  Đăng nhập
                </>
              )}
            </button>

            {/* Info Text */}
            <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100">
              Chỉ dành cho quản trị viên được ủy quyền
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 text-sm text-slate-500">
          <p>© 2025 Ắc Quy Huy Hậu. Bảo mật & An toàn.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
