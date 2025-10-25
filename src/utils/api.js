import axios from 'axios';

// Create axios instance for the website API calls
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url, config.params);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url, response.data);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API helper functions for website content
export const websiteApi = {
  // Services (Public)
  getServices: (params = {}) => api.get('content/public/services/', { params }),
  
  // Portfolio Projects (Public) - from content app
  getPortfolioProjects: (params = {}) => api.get('content/public/portfolio/', { params }),
  
  // Real Projects (Public) - from projects app (admin-created projects)
  getProjects: (params = {}) => api.get('projects/public/', { params }),
  
  // Blog Posts (Public)
  getBlogPosts: (params = {}) => api.get('content/public/blog/', { params }),
  getBlogPost: (id) => api.get(`content/blog/${id}/`),
  
  // Team Members (Public)
  getTeamMembers: (params = {}) => api.get('content/public/team/', { params }),
  
  // Clients (for testimonials) (Public)
  getClients: (params = {}) => api.get('clients/public/', { params }),
  
  // Contact Form Submission
  submitContactForm: (data) => api.post('communication/contacts/', data),
  
  // Newsletter Subscription
  subscribeNewsletter: (data) => api.post('communication/subscribers/', data),
  
  // Careers (Public)
  getJobs: (params = {}) => api.get('careers/public/jobs/', { params }),
  getJob: (slug) => api.get(`careers/public/jobs/${slug}/`),
  applyForJob: (data) => api.post('careers/public/apply/', data),
};

export default api;

