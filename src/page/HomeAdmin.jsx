import { useState } from 'react';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  Users, 
  Package, 
  FolderOpen, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { authService } from '../service/Admin/auth.service';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Lấy thông tin user từ localStorage
  const currentUser = authService.getCurrentUser();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { id: 'users', name: 'Quản lý User', icon: Users, path: '/admin/users' },
    { id: 'products', name: 'Quản lý Product', icon: Package, path: '/admin/products' },
    { id: 'categories', name: 'Quản lý Category', icon: FolderOpen, path: '/admin/categories' },
    { id: 'news', name: 'Quản lý News', icon: FolderOpen, path: '/admin/news' },

    { id: 'settings', name: 'Cài đặt', icon: Settings, path: '/admin/settings' },
  ];

  // Hàm xử lý đăng xuất
  const handleLogout = async () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      setIsLoggingOut(true);
      try {
        await authService.logout();
        // authService.logout() đã tự động chuyển về /admin/login
      } catch (error) {
        console.error('Lỗi khi đăng xuất:', error);
        // Vẫn logout local nếu API lỗi
        authService.clearAuth();
        navigate('/admin/login');
      }
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col shadow-2xl relative`}
      >
        {/* Header Sidebar */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h2 className="text-xl font-black text-blue-400">AС QUY GS</h2>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          )}
          
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors ml-auto"
          >
            {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setActiveMenu(item.id)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }
                  ${!sidebarOpen && 'justify-center'}
                `}
              >
                <Icon size={20} />
                {sidebarOpen && (
                  <span className="font-semibold">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Sidebar - Logout Button */}
        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`
              flex items-center gap-4 px-4 py-3 rounded-xl w-full
              text-red-400 hover:bg-red-600/20 transition-all
              disabled:opacity-50 disabled:cursor-not-allowed
              ${!sidebarOpen && 'justify-center'}
            `}
          >
            <LogOut size={20} className={isLoggingOut ? 'animate-pulse' : ''} />
            {sidebarOpen && (
              <span className="font-semibold">
                {isLoggingOut ? 'Đang xuất...' : 'Đăng xuất'}
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-black text-slate-900">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">
                  {currentUser?.name || 'Admin User'}
                </p>
                <p className="text-xs text-slate-500">
                  {currentUser?.email || 'admin@acquygs.com'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {currentUser?.name?.[0]?.toUpperCase() || 'A'}
              </div>
            </div>

            {/* Logout button on top navbar (mobile) */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors lg:hidden"
              title="Đăng xuất"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;