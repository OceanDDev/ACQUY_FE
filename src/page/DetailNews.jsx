import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Calendar, 
  ArrowLeft, 
  ChevronRight, 
  Loader2,
  Share2,
  Facebook,
  Twitter,
  Link as LinkIcon
} from "lucide-react";
import ContactButtons from "../modules/Client/Contact";
import { newsService } from "../service/Admin/news.service";

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    fetchNewsDetail();
    fetchRelatedNews();
    window.scrollTo(0, 0);
  }, [slug]);

  const fetchNewsDetail = async () => {
    try {
      setLoading(true);
      const response = await newsService.getDetail(slug);
      setNews(response);
    } catch (error) {
      console.error("Lỗi khi tải chi tiết tin tức:", error);
      navigate("/tin-tuc");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedNews = async () => {
    try {
      const response = await newsService.getList({ per_page: 4 });
      setRelatedNews(response.data.filter(item => item.slug !== slug));
    } catch (error) {
      console.error("Lỗi khi tải tin liên quan:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = news.title;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Đã sao chép link!');
      setShowShareMenu(false);
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg mb-4">Không tìm thấy tin tức</p>
        <button
          onClick={() => navigate("/tin-tuc")}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700"
        >
          Quay lại trang tin tức
        </button>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{news.title} | Ắc Quy Huy Hậu</title>
        <meta name="description" content={news.content.replace(/<[^>]*>/g, "").substring(0, 160)} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.content.replace(/<[^>]*>/g, "").substring(0, 160)} />
        <meta property="og:image" content={news.image_url} />
        <link rel="canonical" href={`https://acquyhuyhau.com/tin-tuc/${news.slug}`} />
      </Helmet>

      {/* CKEditor Custom Styles */}
      <style>{`
        /* CKEditor Content Styling - Tối ưu cho SEO và UX */
        .ckeditor-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1f2937;
          line-height: 1.8;
        }

        /* Headings - SEO Structure */
        .ckeditor-content h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .ckeditor-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #3b82f6;
          line-height: 1.3;
        }

        .ckeditor-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .ckeditor-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4b5563;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .ckeditor-content h5,
        .ckeditor-content h6 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #6b7280;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        /* Paragraphs */
        .ckeditor-content p {
          margin-bottom: 1.25rem;
          font-size: 1.0625rem;
          color: #374151;
        }

        /* Links */
        .ckeditor-content a {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 500;
          transition: color 0.2s;
        }

        .ckeditor-content a:hover {
          color: #1d4ed8;
        }

        /* Lists */
        .ckeditor-content ul,
        .ckeditor-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .ckeditor-content ul {
          list-style-type: disc;
        }

        .ckeditor-content ol {
          list-style-type: decimal;
        }

        .ckeditor-content li {
          margin-bottom: 0.75rem;
          color: #374151;
          line-height: 1.7;
        }

        .ckeditor-content li::marker {
          color: #3b82f6;
          font-weight: 600;
        }

        /* Nested lists */
        .ckeditor-content ul ul,
        .ckeditor-content ol ol,
        .ckeditor-content ul ol,
        .ckeditor-content ol ul {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        /* Blockquotes */
        .ckeditor-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #4b5563;
          background: #f3f4f6;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        /* Images */
        .ckeditor-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        /* Tables */
        .ckeditor-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          overflow-x: auto;
          display: block;
        }

        .ckeditor-content table thead {
          background: #3b82f6;
          color: white;
        }

        .ckeditor-content table th,
        .ckeditor-content table td {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          text-align: left;
        }

        .ckeditor-content table tbody tr:nth-child(even) {
          background: #f9fafb;
        }

        .ckeditor-content table tbody tr:hover {
          background: #f3f4f6;
        }

        /* Code blocks */
        .ckeditor-content pre,
        .ckeditor-content code {
          background: #1f2937;
          color: #f9fafb;
          border-radius: 0.5rem;
          padding: 0.25rem 0.5rem;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
        }

        .ckeditor-content pre {
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }

        .ckeditor-content pre code {
          background: transparent;
          padding: 0;
        }

        /* Strong/Bold */
        .ckeditor-content strong,
        .ckeditor-content b {
          font-weight: 700;
          color: #111827;
        }

        /* Emphasis/Italic */
        .ckeditor-content em,
        .ckeditor-content i {
          font-style: italic;
        }

        /* Horizontal Rule */
        .ckeditor-content hr {
          border: none;
          border-top: 2px solid #e5e7eb;
          margin: 3rem 0;
        }

        /* Text alignment */
        .ckeditor-content .text-left { text-align: left; }
        .ckeditor-content .text-center { text-align: center; }
        .ckeditor-content .text-right { text-align: right; }
        .ckeditor-content .text-justify { text-align: justify; }

        /* Responsive */
        @media (max-width: 768px) {
          .ckeditor-content h1 { font-size: 1.875rem; }
          .ckeditor-content h2 { font-size: 1.5rem; }
          .ckeditor-content h3 { font-size: 1.25rem; }
          .ckeditor-content p { font-size: 1rem; }
        }
      `}</style>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Trang chủ
            </button>
            <ChevronRight size={16} className="text-gray-400" />
            <button
              onClick={() => navigate("/tin-tuc")}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Tin tức
            </button>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium line-clamp-1">{news.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Article Content */}
          <article className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              
              {/* Header */}
              <div className="p-8">
                <button
                  onClick={() => navigate("/tin-tuc")}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Quay lại danh sách tin tức
                </button>

                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                  {news.title}
                </h1>

                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={18} />
                    <span className="text-sm">{formatDate(news.created_at)}</span>
                  </div>

                  {/* Share Button */}
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <Share2 size={18} />
                      <span className="text-sm font-semibold">Chia sẻ</span>
                    </button>

                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 w-48 z-10">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <Facebook size={18} className="text-blue-600" />
                          <span>Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <Twitter size={18} className="text-blue-400" />
                          <span>Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                        >
                          <LinkIcon size={18} className="text-gray-600" />
                          <span>Sao chép link</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {news.image_url && (
                <div className="w-full h-96 overflow-hidden">
                  <img
                    src={news.image_url}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content - CKEditor Styling Applied */}
              <div className="p-8">
                <div 
                  className="ckeditor-content"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />
              </div>

              {/* Tags/Categories */}
              <div className="px-8 pb-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-gray-700">Tags:</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Ắc quy
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Bình Dương
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Tin tức
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            
            {/* Related News */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                Tin tức liên quan
              </h3>

              <div className="space-y-4">
                {relatedNews.slice(0, 3).map((item) => (
                  <article
                    key={item.id}
                    onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Calendar size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar size={12} />
                        <span>{formatDate(item.created_at)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <button
                onClick={() => navigate("/tin-tuc")}
                className="w-full mt-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Xem tất cả tin tức
              </button>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-black mb-3">
                Cần tư vấn về ắc quy?
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Liên hệ ngay với chúng tôi để được tư vấn miễn phí và báo giá tốt nhất!
              </p>
              <a
                href="tel:0354851779"
                className="block w-full py-3 bg-white text-blue-600 text-center rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Gọi ngay: 035 485 1779
              </a>
            </div>

          </aside>
        </div>
      </section>

      <ContactButtons />
    </main>
  );
};

export default NewsDetail;