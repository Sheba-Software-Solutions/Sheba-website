// Image handling utilities for Sheba Website
import React from 'react';

/**
 * Generate placeholder images for different content types
 */
export const imageHelpers = {
  // Service placeholder images
  getServicePlaceholder: (serviceName, index = 0) => {
    const serviceImages = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', // Software Development
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', // Web Development
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop', // Mobile Development
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop', // Cloud Solutions
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop', // Cybersecurity
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', // IT Consulting
    ];
    
    // Try to match service name to appropriate image
    const name = serviceName.toLowerCase();
    if (name.includes('web')) return serviceImages[1];
    if (name.includes('mobile') || name.includes('app')) return serviceImages[2];
    if (name.includes('cloud')) return serviceImages[3];
    if (name.includes('security') || name.includes('cyber')) return serviceImages[4];
    if (name.includes('consult')) return serviceImages[5];
    
    // Default to index-based selection
    return serviceImages[index % serviceImages.length];
  },

  // Portfolio project placeholder images
  getProjectPlaceholder: (projectName, category, index = 0) => {
    const projectImages = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // General Tech
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', // Analytics
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop', // Security
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', // Mobile
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop', // Web
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', // Cloud
    ];
    
    // Match by category
    if (category) {
      const cat = category.toLowerCase();
      if (cat.includes('mobile')) return projectImages[3];
      if (cat.includes('web')) return projectImages[4];
      if (cat.includes('cloud')) return projectImages[5];
      if (cat.includes('security')) return projectImages[2];
      if (cat.includes('analytics')) return projectImages[1];
    }
    
    return projectImages[index % projectImages.length];
  },

  // Team member placeholder images
  getTeamPlaceholder: (memberName, role, index = 0) => {
    const teamImages = [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', // Male 1
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop', // Female 1
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop', // Male 2
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', // Female 2
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', // Male 3
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop', // Female 3
    ];
    
    return teamImages[index % teamImages.length];
  },

  // Blog post placeholder images
  getBlogPlaceholder: (title, category, index = 0) => {
    const blogImages = [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop', // AI/Tech
      'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=600&h=300&fit=crop', // Web Dev
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=300&fit=crop', // Cloud
      'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=600&h=300&fit=crop', // Blockchain
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=300&fit=crop', // IoT
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop', // React
    ];
    
    if (category) {
      const cat = category.toLowerCase();
      if (cat.includes('ai') || cat.includes('machine')) return blogImages[0];
      if (cat.includes('web')) return blogImages[1];
      if (cat.includes('cloud')) return blogImages[2];
      if (cat.includes('blockchain')) return blogImages[3];
      if (cat.includes('iot')) return blogImages[4];
      if (cat.includes('react')) return blogImages[5];
    }
    
    return blogImages[index % blogImages.length];
  },

  // Client logo placeholder
  getClientPlaceholder: (clientName) => {
    // Generate a simple logo placeholder with client name
    const colors = ['FF8800', '00880F', '005588', '33AA00', '8800FF', 'FF0088'];
    const color = colors[clientName.length % colors.length];
    const initials = clientName.substring(0, 3).toUpperCase();
    return `https://placehold.co/120x50/FFFFFF/${color}?text=${initials}`;
  },

  // Generic fallback image
  getFallbackImage: (width = 400, height = 300, text = 'Image') => {
    return `https://placehold.co/${width}x${height}/F3F4F6/6B7280?text=${encodeURIComponent(text)}`;
  },

  // Image error handler
  handleImageError: (event, fallbackUrl) => {
    if (event.target.src !== fallbackUrl) {
      event.target.src = fallbackUrl;
    }
  }
};

/**
 * React hook for image loading with fallback
 */
export const useImageWithFallback = (src, fallback) => {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  return {
    src: imageSrc,
    isLoading,
    hasError,
    onLoad: handleLoad,
    onError: handleError
  };
};

export default imageHelpers;