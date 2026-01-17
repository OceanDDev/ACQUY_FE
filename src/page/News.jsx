import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ChevronRight, Loader2, Search } from "lucide-react";
import ContactButtons from "../modules/Client/Contact";
import { newsService } from "../service/Admin/news.service";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 9,
    total: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews(1);
  }, []);

  const fetchNews = async (page = 1) => {
    try {
      setLoading(true);
      const response = await newsService.getList({
        page: page,
        per_page: pagination.per_page,
      });

      setNews(response.data);
      setPagination({
        current_page: response.current_page,
        last_page: response.last_page,
        per_page: response.per_page,
        total: response.total,
      });
    } catch (error) {
      console.error("Lỗi khi tải tin tức:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    fetchNews(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsClick = (slug) => {
    navigate(`/tin-tuc/${slug}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/img/default-news.jpg";
    return imagePath.startsWith("http")
      ? imagePath
      : `${import.meta.env.VITE_API_URL}/storage/${imagePath}`;
  };

  // Helper function to decode HTML entities and strip tags
  const decodeAndStripHTML = (html) => {
    if (!html) return "";

    // Create a temporary div to decode HTML entities
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    const decoded = txt.value;

    // Strip HTML tags
    const stripped = decoded.replace(/<[^>]*>/g, "");

    return stripped;
  };

  // Helper function to get excerpt
  const getExcerpt = (content, maxLength = 150) => {
    const cleanText = decodeAndStripHTML(content);
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + "...";
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Tin Tức Ắc Quy | Kiến Thức & Bảo Dưỡng Ắc Quy Ô Tô</title>
        <meta
          name="description"
          content="Cập nhật tin tức mới nhất về ắc quy ô tô, xe máy. Hướng dẫn bảo dưỡng, chọn mua và sử dụng ắc quy hiệu quả từ chuyên gia Ắc Quy Huy Hậu."
        />
        <link rel="canonical" href="https://acquyhuyhau.com/tin-tuc" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Tin Tức & Kiến Thức
            </h1>
            <p className="text-blue-100 text-lg">
              Cập nhật thông tin mới nhất về ắc quy, bảo dưỡng và chăm sóc xe
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm tin tức..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-blue-600" size={48} />
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              {searchQuery
                ? "Không tìm thấy tin tức phù hợp"
                : "Chưa có tin tức nào"}
            </p>
          </div>
        ) : (
          <>
            {/* Featured News - Tin nổi bật đầu tiên */}
            {filteredNews[0] && (
              <div
                onClick={() => handleNewsClick(filteredNews[0].slug)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 cursor-pointer hover:shadow-xl transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={getImageUrl(filteredNews[0].image_url)}
                      alt={filteredNews[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Tin nổi bật
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{formatDate(filteredNews[0].created_at)}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {filteredNews[0].title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-6">
                      {getExcerpt(filteredNews[0].content, 200)}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Đọc tiếp
                      <ChevronRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* News Grid - Các tin còn lại */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.slice(1).map((item) => (
                <article
                  key={item.id}
                  onClick={() => handleNewsClick(item.slug)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageUrl(item.image_url)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{formatDate(item.created_at)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 text-sm mb-4">
                      {getExcerpt(item.content, 150)}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Xem chi tiết
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        {!loading &&
          filteredNews.length > 0 &&
          pagination.last_page > 1 &&
          !searchQuery && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Trước
              </button>

              {[...Array(pagination.last_page)].map((_, index) => {
                const page = index + 1;
                if (
                  page === 1 ||
                  page === pagination.last_page ||
                  (page >= pagination.current_page - 1 &&
                    page <= pagination.current_page + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        page === pagination.current_page
                          ? "bg-blue-600 text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === pagination.current_page - 2 ||
                  page === pagination.current_page + 2
                ) {
                  return (
                    <span key={page} className="px-2">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => handlePageChange(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.last_page}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Sau
              </button>
            </div>
          )}
      </section>

      <ContactButtons />
    </main>
  );
};

export default News;
