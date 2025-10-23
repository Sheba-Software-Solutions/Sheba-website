import axios from 'axios';

// Create axios instance for the website API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API helper functions for website content
export const websiteApi = {
  // Services
  getServices: (params = {}) => api.get('content/services/', { params }),
  
  // Portfolio Projects
  getPortfolioProjects: (params = {}) => api.get('content/portfolio/', { params }),
  
  // Blog Posts
  getBlogPosts: (params = {}) => api.get('content/blog/', { params }),
  getBlogPost: (id) => api.get(`content/blog/${id}/`),
  
  // Clients (for testimonials)
  getClients: (params = {}) => api.get('clients/', { params }),
  
  // Contact Form Submission
  submitContactForm: (data) => api.post('communication/contacts/', data),
  
  // Newsletter Subscription
  subscribeNewsletter: (data) => api.post('communication/subscribers/', data),
};

export default api;

