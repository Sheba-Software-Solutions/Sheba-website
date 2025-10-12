import React, { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { websiteApi } from '../../utils/api';

const CATEGORIES = ['All', 'AI', 'Web Dev', 'Cloud', 'Blockchain', 'IoT'];
const ARTICLES = [
  {
    id: 1,
    title: "How AI is Transforming Software Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way developers build and maintain applications.",
    category: "AI",
    date: "May 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    id: 2,
    title: "The Future of Web Development with WebAssembly",
    excerpt: "WebAssembly is changing how we think about performance on the web. Learn why it's becoming essential.",
    category: "Web Dev",
    date: "May 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04"
  },
  {
    id: 3,
    title: "Cloud Cost Optimization Strategies for 2025",
    excerpt: "Your cloud bill doesn't have to break the bank. Here are practical strategies to optimize costs without sacrificing performance.",
    category: "Cloud",
    date: "May 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9"
  },
  {
    id: 4,
    title: "Building Secure Smart Contracts for Web3",
    excerpt: "Security vulnerabilities in blockchain applications can be catastrophic. Learn how to protect your smart contracts.",
    category: "Blockchain",
    date: "May 6, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
  },
  {
    id: 5,
    title: "IoT Architecture Patterns for Scalable Systems",
    excerpt: "Designing IoT systems that can handle millions of devices requires careful planning. Explore proven architecture patterns.",
    category: "IoT",
    date: "May 4, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f"
  },
  {
    id: 6,
    title: "The State of React in 2025",
    excerpt: "React continues to evolve with new patterns and features. Get up to speed with the latest developments in the React ecosystem.",
    category: "Web Dev",
    date: "May 2, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    id: 7,
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    excerpt: "Master advanced TypeScript techniques to build more robust and maintainable enterprise-level applications.",
    category: "Web Dev",
    date: "April 30, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    id: 8,
    title: "Machine Learning Operations: Best Practices for 2025",
    excerpt: "Learn how to successfully deploy and maintain machine learning models in production environments.",
    category: "AI",
    date: "April 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },
  {
    id: 9,
    title: "Kubernetes Security: Protecting Your Cluster",
    excerpt: "Essential security practices to protect your Kubernetes clusters from common vulnerabilities and threats.",
    category: "Cloud",
    date: "April 26, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  }
];

const ARTICLES_PER_PAGE = 6;

export default function FeaturedArticles() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visible, setVisible] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await websiteApi.getBlogPosts({ 
          status: 'published',
          ordering: '-published_at'
        });
        const data = response?.data;
        const fetchedArticles = Array.isArray(data) ? data : (data?.results || []);
        
        // Transform backend data to match frontend format
        const transformedArticles = fetchedArticles.map(article => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt || article.content.substring(0, 150) + '...',
          category: article.category || 'Technology',
          date: new Date(article.published_at || article.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          readTime: Math.ceil(article.content.length / 500) + ' min read',
          image: article.featured_image || "https://images.unsplash.com/photo-1677442136019-21780ecad995"
        }));
        
        setArticles(transformedArticles);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setError('Failed to load articles');
        // Fallback to default articles if API fails
        setArticles(ARTICLES);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = activeCategory === "All" ? articles : articles.filter(article => article.category === activeCategory)
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  
  // Calculate articles for current page
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  const handleCategoryChange = (category) => {
    setVisible(false);
    setTimeout(() => {
      setActiveCategory(category);
      setCurrentPage(1); // Reset to first page when category changes
      setVisible(true);
    }, 100);
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setVisible(false);
      setTimeout(() => {
        setCurrentPage(page);
        setVisible(true);
        // Scroll to top of articles section
        document.getElementById('articles-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  }

  return (
    <>
      <div className="bg-gray-50 py-16" id="articles-section">
        <div className="container mx-auto px-4">
          <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-900'>Featured Articles</h2>
          <p className="text-gray-600 mb-8">Discover our most popular and trending tech content</p>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="text-4xl text-blue-600 animate-spin" />
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center mb-8 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
              <p className="text-yellow-800">{error}</p>
            </div>
          )}

          {/* Article Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 min-h-[600px]">
              {currentArticles.map((article, index) => (
              <div
                key={article.id}
                className={`bg-white rounded-lg overflow-hidden hover-card-animation shadow-sm
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
                transition-all duration-500`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`${article.image}?auto=format&fit=crop&w=600&h=300`}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="tag">{article.category}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/article/${article.id}`}>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <Link to={`/article/${article.id}`} className="text-blue-600 hover:text-gray-600 flex items-center text-sm font-medium transition-colors">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <ChevronLeft size={20} className="mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Next
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          )}

          {/* Page Info */}
          {!isLoading && totalPages > 1 && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
            </div>
          )}
        </div>
      </div>
    </>
  )
}
