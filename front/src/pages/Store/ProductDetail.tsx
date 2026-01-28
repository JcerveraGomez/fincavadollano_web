import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/reusable/Footer';
import { MaridajeSection } from '../../components/sections/MaridajeSection';
import { RelatedProductsSection } from '../../components/sections/RelatedProductsSection';
import { Phone, Mail, MessageCircle, ChevronDown, ArrowLeft } from 'lucide-react';
import productsService, { Product } from '../../services/productsService';

// Import Mollani font
import '../../assets/fonts/mollani.css';

const ProductDetail: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const productSlug = id; // The URL param is actually the slug
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Contact information
  const PHONE_NUMBER = '+34660261542'; // Replace with actual phone
  const EMAIL = 'administracion@fincavadollano.com'; // Replace with actual email
  const WHATSAPP_NUMBER = '34660261542'; // Replace with actual WhatsApp (no + or spaces)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on product slug change
    const loadProduct = () => {
      if (!productSlug) {
        setError('Slug de producto no válido');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const lang = i18n.language.split('-')[0];
        const productData = productsService.getProductBySlug(productSlug, lang);
        if (!productData) {
          setError('Producto no encontrado');
        } else {
          setProduct(productData);
        }
      } catch (error) {
        console.error('Error loading product:', error);
        setError('No se pudo cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productSlug, i18n.language]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en: ${product?.name}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent(`Consulta sobre: ${product?.name}`);
    const body = encodeURIComponent(`Hola,\n\nEstoy interesado en el producto: ${product?.name}\nPrecio: ${product?.price}€\n\nPor favor, envíenme más información.\n\nGracias.`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handlePhoneContact = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  if (loading) {
    return null;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            {error || t('product_detail_not_found')}
          </h2>
          <Link
            to="/"
            className="text-[#b8985f] hover:text-[#a08550] text-sm tracking-wider uppercase"
          >
            {t('product_detail_back_home')}
          </Link>
        </div>
      </div>
    );
  }

  const productImages = productsService.getProductImages(product);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Contact Banner - Compact */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#3a3a3a] via-[#4a4a4a] to-[#3a3a3a] backdrop-blur-md text-white py-1.5 px-4 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* Contact options - responsive */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* WhatsApp - Icon only on mobile */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-all duration-300 border border-[#25D366]/40 hover:border-[#25D366]/60 hover:scale-105"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-light tracking-wide text-xs">WhatsApp</span>
            </a>

            {/* Phone - Main centered button */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-md bg-[#848435] hover:bg-[#6d6e2b] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              aria-label="Teléfono"
            >
              <Phone className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-medium tracking-wide text-xs uppercase">{t('banner_phone_order') || 'Comprar por Teléfono'}</span>
            </a>

            {/* Email - Icon only on mobile */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-white group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline font-light tracking-wide text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t('product_detail_back_button')}</span>
        </button>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Images */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex md:flex-col gap-3 order-2 md:order-1">
                {productImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 overflow-hidden bg-gray-100 border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[#8b9456]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1 order-1 md:order-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                {productImages.length > 0 ? (
                  <img
                    src={productImages[selectedImage]?.url}
                    alt={productImages[selectedImage]?.alt || product.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-gray-400">{t('product_detail_no_image')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-8">
            {/* Title */}
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>

              {/* Volume */}
              <p className="text-base text-gray-500 font-light mb-6">
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

            {/* Description */}
            {product.description && (
              <div className="prose prose-sm max-w-none">
                <p className="text-base text-gray-700 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
            )}


            {/* Specifications - Enhanced */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-4 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-light text-gray-900 tracking-wide uppercase">
                  {t('product_detail_specifications') || 'Especificaciones'}
                </h4>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    value && (
                      <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <dt className="font-light text-gray-600 capitalize text-xs uppercase tracking-wider mb-1">{t(`spec_${key}`)}</dt>
                        <dd className="text-gray-900 font-light text-base">{value}</dd>
                      </div>
                    )
                  ))}
                </dl>
              </div>
            )}

            {/* Expandable Sections */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              

              {/* Ficha técnica */}
              {product.technical_sheet && (
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('technical_sheet')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-base font-light text-gray-900">
                      {t('product_detail_technical_sheet')}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedSection === 'technical_sheet' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === 'technical_sheet' && (
                    <div className="pb-4">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {product.technical_sheet}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Ingredientes */}
              {product.ingredients && (
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('ingredients')}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-base font-light text-gray-900">
                      {t('product_detail_ingredients')}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedSection === 'ingredients' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === 'ingredients' && (
                    <div className="pb-4">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {product.ingredients}
                      </p>
                    </div>
                  )}
                </div>
              )}


            </div>
          </div>
        </div>
      </div>

      {/* Maridaje Section */}
      <MaridajeSection maridajeText={product.maridaje} />

      {/* Related Products Section */}
      <RelatedProductsSection currentProductId={product.id} limit={3} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
