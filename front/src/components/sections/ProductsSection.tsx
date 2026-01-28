import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import productsService, { Product } from '../../services/productsService';

export const ProductsSection = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadProducts = () => {
      try {
        setLoading(true);
        const lang = i18n.language.split('-')[0];
        const allProducts = productsService.getFeaturedProducts(lang, 4);
        setProducts(allProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [i18n.language]);

  const handleImageError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  if (loading) {
    return (
      <section id="productos" className="w-full bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-center mb-6 text-gray-800">
            {t('products_title')}
          </h2>
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {t('products_loading_text')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full max-w-md aspect-[3/4] mb-8 bg-gray-200 animate-pulse" />
                <div className="w-48 h-6 bg-gray-200 animate-pulse mb-4" />
                <div className="w-24 h-8 bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-center mb-6 text-gray-800 leading-tight">
          {t('products_title')}
        </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-kefa">
            {t('products_description')}
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-kefa mt-6">
            {t('products_description_1')}
          </p>
        </div>

        {/* Products Grid - Max 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
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
                  <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden bg-gray-200">
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
                  <div className="text-center px-4 w-full">
                    {/* Fixed height container for product name */}
                    <div className="h-14 flex items-center justify-center mb-1">
                      <h3 className="text-lg md:text-xl font-light text-gray-800 leading-tight">
                        {product.name}
                      </h3>
                    </div>

                    {/* Volume */}
                    <p className="text-xs text-gray-500 font-light mb-2">
                      {product.specifications?.size || '500ml'}
                    </p>

                    {/* Pricing Information */}
                    <div className="space-y-6">
                      {/* Unified Price and Stock Section */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-4xl font-light text-gray-800">
                              {product.price.toFixed(2)}€
                            </p>
                            <p className="text-sm text-gray-500 font-light mt-1">
                            {t(product.type === 'jug' ? 'price_per_jug' : 'price_per_bottle')}
                            </p>
                          </div>
                          <div className="text-right">
                            {product.stock === 0 ? (
                              <div className="bg-red-100 text-red-800 px-3 py-1.5 text-xs font-medium rounded-full">
                                {t('product_stock_sold_out')}
                              </div>
                            ) : product.stock < 10 ? (
                              <div className="bg-orange-100 text-orange-800 px-3 py-1.5 text-xs font-medium rounded-full">
                                {t('product_stock_low')}
                              </div>
                            ) : (
                              <div className="bg-green-100 text-green-800 px-3 py-1.5 text-xs font-medium rounded-full">
                                {t('product_stock_available')}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Pack Information */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <p className="text-base font-light text-gray-800">
                            {t('product_sale_in_packs_of', {
                                packSize: parseInt(product.specifications?.minimum_order?.split(' ')[0] || '0'),
                                type: t(`unit_${product.type}_plural`)
                            })}
                          </p>
                        </div>
                      </div>

                      {/* Tax and Shipping Info */}
                      <div className="pt-3">
                        <p className="text-sm text-gray-600 font-light">
                          {t('products_vat_included_shipping_not')}
                        </p>
                        <p className="text-xs text-gray-500 font-light italic mt-1">
                          {t('products_shipping_calculated')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('products_empty')}</p>
          </div>
        )}


      </div>
    </section>
  );
};
