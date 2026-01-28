import React from 'react';

interface ProductDetail {
  id: number;
  name: string;
  price: string;
  volume: string;
  minOrder: string;
  image: string;
  available: boolean;
}

export const ProductsDetailSection = () => {
  const products: ProductDetail[] = [
    {
      id: 1,
      name: 'AOVE TEMPRANO',
      price: '16',
      volume: '500ML',
      minOrder: 'Pedido mínimo 12 botellas',
      image: '/images/product_temprano.webp',
      available: true,
    },
    {
      id: 2,
      name: 'AOVE TEMPRANO SIN FILTRAR',
      price: '18',
      volume: '500ML',
      minOrder: 'Pedido mínimo 12 botellas',
      image: '/images/product_sin_filtrar.webp',
      available: false,
    },
    {
      id: 3,
      name: 'AOVE RESERVA',
      price: '45',
      volume: '5 LITROS',
      minOrder: 'Pedido mínimo 3 garrafas',
      image: '/images/product_reserva.webp',
      available: true,
    },
  ];

  return (
    <section id="productos" className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-gray-800 leading-tight">
            Nuestros Productos
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image */}
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {!product.available && (
                  <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 text-sm font-light">
                    Agotado
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col space-y-3">
                {/* Product Name */}
                <h3 className="text-xl md:text-2xl font-light text-gray-800 text-center">
                  {product.name}
                </h3>

                {/* Volume */}
                <p className="text-sm md:text-base text-gray-600 text-center font-light">
                  {product.volume}
                </p>

                {/* Price */}
                <div className="text-center py-2">
                  <p className="text-3xl md:text-4xl font-light text-gray-900">
                    {product.price}€
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    por {product.volume.includes('LITROS') ? 'garrafa' : 'botella'}
                  </p>
                </div>

                {/* Minimum Order */}
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm md:text-base text-gray-700 text-center font-light">
                    {product.minOrder}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
            Todos nuestros productos están disponibles únicamente en pack.
            Para realizar un pedido, por favor contáctenos a través de nuestro formulario de contacto.
          </p>
        </div>
      </div>
    </section>
  );
};
