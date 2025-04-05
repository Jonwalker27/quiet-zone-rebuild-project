import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  mainImage: string;
  additionalImages?: string[];
  altText: string;
  fallbackImage?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  mainImage, 
  additionalImages = [], 
  altText,
  fallbackImage = '/placeholder.svg'
}) => {
  const [activeImage, setActiveImage] = useState<string>(mainImage);
  const [isLoading, setIsLoading] = useState(true);
  
  // Reset the active image when mainImage changes
  useEffect(() => {
    setActiveImage(mainImage);
    setIsLoading(true);
  }, [mainImage]);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = fallbackImage;
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-full h-72 md:h-96 mb-3 rounded-lg overflow-hidden shadow-md relative bg-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-qz-blue"></div>
          </div>
        )}
        <img 
          src={activeImage} 
          alt={altText}
          className="h-full w-full object-cover" 
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      
      {/* Thumbnails */}
      {additionalImages && additionalImages.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            className={`h-20 w-28 flex-shrink-0 rounded overflow-hidden ${activeImage === mainImage ? 'ring-2 ring-qz-yellow' : ''}`}
            onClick={() => setActiveImage(mainImage)}
          >
            <img 
              src={mainImage} 
              alt={`${altText} - main view`} 
              className="h-full w-full object-cover"
              onError={handleImageError}
            />
          </button>
          
          {additionalImages.map((img, index) => (
            <button
              key={index}
              className={`h-20 w-28 flex-shrink-0 rounded overflow-hidden ${activeImage === img ? 'ring-2 ring-qz-yellow' : ''}`}
              onClick={() => setActiveImage(img)}
            >
              <img 
                src={img} 
                alt={`${altText} - view ${index + 1}`} 
                className="h-full w-full object-cover"
                onError={handleImageError}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 