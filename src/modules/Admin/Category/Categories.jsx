import { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  X,
  FolderOpen,
  Package
} from 'lucide-react';
import { categoryService } from '../../../service/Admin/category.service';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' | 'edit'
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '' });
  const [submitting, setSubmitting] = useState(false);

  // Lấy danh sách categories
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await categoryService.getList();
      if (data.status) {
        setCategories(data.data);
      }
    } catch (error) {
      alert('Lỗi khi tải categories');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Mở modal tạo mới
  const handleCreate = () => {
    setModalMode('create');
    setFormData({ name: '' });
    setCurrentCategory(null);
    setShowModal(true);
  };

  // Mở modal chỉnh sửa
  const handleEdit = (category) => {
    setModalMode('edit');
    setFormData({ name: category.name });
    setCurrentCategory(category);
    setShowModal(true);
  };

  // Submit form (create/update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Vui lòng nhập tên category');
      return;
    }

    try {
      setSubmitting(true);
      
      if (modalMode === 'create') {
        const result = await categoryService.create(formData);
        if (result.status) {
          alert('Tạo category thành công!');
          fetchCategories();
          setShowModal(false);
        }
      } else {
        const result = await categoryService.update(currentCategory.id, formData);
        if (result.status) {
          alert('Cập nhật category thành công!');
          fetchCategories();
          setShowModal(false);
        }
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Có lỗi xảy ra');
    } finally {
      setSubmitting(false);
    }
  };

  // Xóa category
  const handleDelete = async (category) => {
    if (!confirm(`Bạn có chắc muốn xóa category "${category.name}"?`)) {
      return;
    }

    try {
      const result = await categoryService.deleteCategory(category.id);
      if (result.status) {
        alert('Xóa category thành công!');
        fetchCategories();
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Không thể xóa category');
    }
  };

  // Lọc categories theo search
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Quản lý Categories</h2>
          <p className="text-slate-600 mt-1">
            Tổng cộng <span className="font-bold text-blue-600">{categories.length}</span> danh mục
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg"
        >
          <Plus size={20} />
          Thêm Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">ID</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Tên Category</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Slug</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Số sản phẩm</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredCategories.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                  <FolderOpen className="mx-auto mb-3 text-slate-300" size={48} />
                  <p className="font-medium">Không tìm thấy category nào</p>
                </td>
              </tr>
            ) : (
              filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                    #{category.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FolderOpen className="text-blue-600" size={20} />
                      </div>
                      <span className="font-bold text-slate-900">{category.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                    {category.slug}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Package size={16} className="text-slate-400" />
                      <span className="text-sm font-semibold text-slate-700">
                        {category.products?.length || 0}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(category)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                        title="Xóa"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Create/Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-black text-slate-900">
                {modalMode === 'create' ? 'Thêm Category Mới' : 'Chỉnh Sửa Category'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Tên Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Ắc quy ô tô"
                  value={formData.name}
                  onChange={(e) => setFormData({ name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-slate-500 mt-2">
                  Slug sẽ tự động tạo từ tên category
                </p>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Đang xử lý...' : modalMode === 'create' ? 'Tạo mới' : 'Cập nhật'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Categories;