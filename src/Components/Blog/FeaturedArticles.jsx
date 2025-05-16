import React, { useState } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

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
  }
];
export default function FeaturedArticles() {

  const [activeCategory, setActiveCategory] = useState("All")
  const [visible, setVisisble] = useState(true)
  const filteredArticles = activeCategory === "All" ? ARTICLES : ARTICLES.filter(article => article.category === activeCategory)

  const handleCategoryChange = (category) => {
    setVisisble(false);
    setTimeout(() => {
      setActiveCategory(category);
      setVisisble(true);
    }, 100);
  }
  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className='text-3xl md:text-4xl font-bold mb-2 text-[#2a2d43]'>Featured Articles</h2>
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

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className={`bg-white rounded-lg overflow-hidden hover-card-animation shadow-sm
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
                transition-all duration-500`}
                style={{ transitionDelay: `${(article.id % 3) * 100}ms` }}
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
                    <h3 className="text-xl font-bold mb-2 text-[#2a2d43] hover:text-[#2ba6ff] transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <Link to={`/article/${article.id}`} className="text-[#2ba6ff] hover:text-[#aa7a26] flex items-center text-sm font-medium transition-colors">
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}
