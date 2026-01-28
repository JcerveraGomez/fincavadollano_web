import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface Slide {
  id: number;
  image: string;
  title: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero_1.webp',
    title: 'Finca Vadollano',
    alt: 'Olivos en la finca',
  },
  {
    id: 2,
    image: '/images/hero_2.webp',
    title: 'Finca Vadollano',
    alt: 'Aceitunas en el árbol',
  },
  {
    id: 3,
    image: '/images/hero_3.webp',
    title: 'Finca Vadollano',
    alt: 'Campo de olivos',
  },  
  {
    id: 4,
    image: '/images/hero_4.webp',
    title: 'Finca Vadollano',
    alt: 'Campo de olivos',
  },
];

export const HeroSlider = () => {
  return (
    <div className="relative w-full h-[100dvh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}


        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1
                  className="text-white text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-mollani tracking-wider drop-shadow-2xl leading-tight"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
