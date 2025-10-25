import React, { useState } from 'react';
import { Loader2, ImageOff } from 'lucide-react';

/**
 * Smart Image component with loading states, error handling, and fallbacks
 */
const SmartImage = ({ 
  src, 
  alt, 
  fallback, 
  className = '', 
  loadingClassName = '',
  errorClassName = '',
  showLoadingSpinner = true,
  showErrorIcon = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback if available and not already using it
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
      setIsLoading(true); // Show loading for fallback
      setHasError(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading Spinner */}
      {isLoading && showLoadingSpinner && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${loadingClassName}`}>
          <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError && !fallback && showErrorIcon && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${errorClassName}`}>
          <ImageOff className="w-6 h-6 text-gray-400" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default SmartImage;