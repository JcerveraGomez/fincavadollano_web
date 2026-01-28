import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import productsService, { Product } from '../../services/productsService';

interface RelatedProductsSectionProps {
  currentProductId?: string;
  limit?: number;
}

export const RelatedProductsSection: React.FC<RelatedProductsSectionProps> = ({
  currentProductId,
  limit = 3
}) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadRelatedProducts = () => {
      try {
        setLoading(true);
        // Get all products from static JSON
        let allProducts = productsService.getAllProducts();

        // Filter out the current product if exists
        if (currentProductId) {
          allProducts = allProducts.filter(p => p.id !== currentProductId);
        }

        // Limit to the desired number
        setProducts(allProducts.slice(0, limit));
      } catch (error) {
        console.error('Error loading related products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRelatedProducts();
  }, [currentProductId, limit]);

  const handleImageError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-center mb-12 md:mb-16 text-gray-800">
            {t('related_products_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full max-w-md aspect-[3/4] bg-gray-200 animate-pulse mb-8" />
                <div className="h-6 w-48 bg-gray-200 animate-pulse mb-4" />
                <div className="h-8 w-24 bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // No mostrar la sección si no hay productos relacionados
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-center mb-12 md:mb-16 text-gray-800 leading-tight">
          {t('related_products_title')}
        </h2>

        {/* Products Grid - Max 3 per row, matching ProductsSection style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
          {products.map((product) => {
            const primaryImage = productsService.getPrimaryImage(product);
            const imageUrl = primaryImage?.url;
            const hasImageError = imageErrors[product.id];

            return (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group"
              >
                <div className="flex flex-col items-center">
                  {/* Product Image - Large */}
                  <div className="relative w-full max-w-md aspect-[3/4]  overflow-hidden bg-gray-200">
                    {imageUrl && !hasImageError ? (
                      <img
                        src={imageUrl}
                        alt={product.name}
                        onError={() => handleImageError(product.id)}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-gray-400 text-sm">{t('products_no_image')}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="text-center px-4">
                    <h3 className="text-base md:text-lg font-light text-gray-800 mb-4 leading-relaxed">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="space-y-1">
                      <p className="text-xl md:text-2xl font-medium text-gray-900">
                        {product.price.toFixed(2)}€
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
