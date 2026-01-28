import React from 'react';
import { useTranslation } from 'react-i18next';

export const PhotoGallerySection = () => {
  const { t } = useTranslation();
  return (
    <section id="galeria" className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-mollani text-gray-800 leading-tight">
            {t('gallery_title')}
          </h2>
        </div>

        {/* Gallery Grid - Layout Exacto según la imagen */}
        <div className="space-y-3 md:space-y-4">

          {/* FILA 1: Dos imágenes horizontales iguales (50/50) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_1.webp"
                alt="Paisaje con agua y olivos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_2.webp"
                alt="Campo de olivos con cielo azul"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 2: Imagen cuadrada (40%) + Imagen horizontal (60%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-2 relative w-full h-64 md:h-72 overflow-hidden">
              <img
                src="/images/gallery_3.webp"
                alt="Aceitunas verdes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 relative w-full h-64 md:h-72 overflow-hidden">
              <img
                src="/images/gallery_4.webp"
                alt="Campo de olivos panorámico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 3: Dos imágenes horizontales iguales (50/50) */}
          <div className="grid grid-cols-1  gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-72 overflow-hidden">
              <img
                src="/images/gallery_5.webp"
                alt="Hileras de olivos"
                className="w-full h-full object-cover"
              />
            </div>

          </div>




          {/* FILA 6: Imagen vertical (33%) + Imagen horizontal (67%) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="relative w-full h-80 md:h-96 overflow-hidden">
              <img
                src="/images/gallery_7.webp"
                alt="Rama de olivo con aceitunas verdes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 relative w-full h-80 md:h-96 overflow-hidden">
              <img
                src="/images/gallery_12.webp"
                alt="Campo de olivos panorámico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 7: Imagen horizontal pequeña (40%) + Imagen horizontal grande (60%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-2 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_13.webp"
                alt="Olivos en hilera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_14.webp"
                alt="Árbol grande con cielo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
                    {/* FILA 7: Imagen horizontal pequeña (40%) + Imagen horizontal grande (60%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-3 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_15.webp"
                alt="Olivos en hilera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_16.webp"
                alt="Árbol grande con cielo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
                              {/* FILA 7: Imagen horizontal pequeña (40%) + Imagen horizontal grande (60%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            <div className="md:col-span-3 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_17.webp"
                alt="Olivos en hilera"
                className="w-full h-full object-cover"
              />
            </div>
                        <div className="md:col-span-2 relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/gallery_18.webp"
                alt="Árbol grande con cielo"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* IMÁGENES DEL HOME - Hero Slider */}
          {/* FILA 8: Dos imágenes del hero slider (50/50) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/hero_1.webp"
                alt="Olivos en la finca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/hero_2.webp"
                alt="Aceitunas en el árbol"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 9: Dos imágenes del hero slider (50/50) */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/hero_3.webp"
                alt="Campo de olivos"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* FILA 10: Imagen de cosecha temprana + Imagen de nuestra finca (50/50) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/early_harvest.webp"
                alt="Cosecha temprana de aceitunas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/our_farm.webp"
                alt="Nuestra finca - Río Guadalén junto a los olivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 11: Imagen del proceso productivo (horizontal grande) */}
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              <img
                src="/images/production_process_2.webp"
                alt="Proceso productivo - Campo de olivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FILA 12: Imagen del proceso productivo + Imagen de beneficios (50/50) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/production_process.webp"
                alt="Proceso productivo - Aceitunas y olivos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <img
                src="/images/benefits_section.webp"
                alt="Beneficios del aceite de oliva - Campo de olivos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
