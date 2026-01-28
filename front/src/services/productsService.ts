import productsData from '../data/products.json';

// INTERFACES
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  is_primary: boolean;
  order: number;
}

export interface ProductSpecifications {
  [key: string]: string | undefined;
}

// Interface for fields that are translated
interface TranslatedString {
  es: string;
  en: string;
}

interface TranslatedStringArray {
  es: string[];
  en: string[];
}

interface TranslatedSpecifications {
  es: ProductSpecifications;
  en: ProductSpecifications;
}

// Represents the structure in products.json
export interface RawProduct {
  id: string;
  slug: string;
  price: number;
  packPrice?: number;
  stock: number;
  is_active: boolean;
  type: string;
  images: ProductImage[];
  name: string;
  description: TranslatedString;
  short_description: TranslatedString;
  maridaje: TranslatedString;
  features: TranslatedStringArray;
  specifications: TranslatedSpecifications;
  created_at: string;
  updated_at: string;
}

// Represents the final "flattened" product object used by components
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  packPrice?: number;
  description: string;
  type: string;
  short_description: string;
  stock: number;
  is_active: boolean;
  images: ProductImage[];
  specifications: ProductSpecifications;
  features: string[];
  maridaje?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductsDatabase {
  products: RawProduct[];
}

const db: ProductsDatabase = productsData as any;

// HELPER FUNCTION TO TRANSLATE A PRODUCT
const translateProduct = (rawProduct: RawProduct, lang: string): Product => {
  const language = (lang === 'en' || lang === 'es') ? lang : 'es'; // Fallback to 'es'

  return {
    ...rawProduct,
    description: rawProduct.description[language],
    short_description: rawProduct.short_description[language],
    maridaje: rawProduct.maridaje[language],
    features: rawProduct.features[language],
    specifications: rawProduct.specifications[language],
  };
};

// SERVICE FUNCTIONS
export const productsService = {
  /**
   * Get all active products for a given language
   */
  getAllProducts(lang: string): Product[] {
    return db.products
      .filter(product => product.is_active)
      .map(p => translateProduct(p, lang));
  },

  /**
   * Get a product by ID for a given language
   */
  getProductById(id: string, lang: string): Product | undefined {
    const rawProduct = db.products.find(product => product.id === id && product.is_active);
    return rawProduct ? translateProduct(rawProduct, lang) : undefined;
  },

  /**
   * Get a product by slug for a given language
   */
  getProductBySlug(slug: string, lang: string): Product | undefined {
    const rawProduct = db.products.find(product => product.slug === slug && product.is_active);
    return rawProduct ? translateProduct(rawProduct, lang) : undefined;
  },

  /**
   * Get featured products for a given language
   */
  getFeaturedProducts(lang: string, limit: number = 4): Product[] {
    return db.products
      .filter(product => product.is_active)
      .slice(0, limit)
      .map(p => translateProduct(p, lang));
  },

  /**
   * Search products by name or description in a given language
   */
  searchProducts(query: string, lang: string): Product[] {
    const searchTerm = query.toLowerCase();
    const allTranslatedProducts = db.products
      .filter(p => p.is_active)
      .map(p => translateProduct(p, lang));
    
    return allTranslatedProducts.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
  },

  /**
   * Get primary image for a product
   */
  getPrimaryImage(product: Product): ProductImage | undefined {
    return product.images.find(img => img.is_primary) || product.images[0];
  },

  /**
   * Get all images sorted by order
   */
  getProductImages(product: Product): ProductImage[] {
    return [...product.images].sort((a, b) => a.order - b.order);
  },

  /**
   * Check if product is in stock
   */
  isInStock(product: Product): boolean {
    return product.stock > 0;
  },
};

export default productsService;
