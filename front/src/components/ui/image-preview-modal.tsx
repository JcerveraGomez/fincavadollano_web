import { useState } from 'react';
import { Dialog, DialogContent } from './dialog';
import { Button } from './button';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

interface ImageData {
  id: string;
  image_url: string;
  filename: string;
  display_order: number;
}

interface ImagePreviewModalProps {
  images: ImageData[];
  initialIndex?: number;
  trigger?: React.ReactNode;
}

export function ImagePreviewModal({ images, initialIndex = 0, trigger }: ImagePreviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentImage = images[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') setIsOpen(false);
  };

  if (images.length === 0) return null;

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
        >
          <Eye className="h-4 w-4" />
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-4xl w-full h-[90vh] p-0"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {/* Botón cerrar */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navegación anterior */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {/* Imagen principal */}
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={currentImage?.image_url}
                alt={currentImage?.filename}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navegación siguiente */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}

            {/* Información de la imagen */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
              <p className="text-sm">
                {currentImage?.filename} ({currentIndex + 1} de {images.length})
              </p>
            </div>

            {/* Thumbnails si hay múltiples imágenes */}
            {images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-xs overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden ${
                      index === currentIndex ? 'border-white' : 'border-gray-400'
                    }`}
                  >
                    <img
                      src={image.image_url}
                      alt={image.filename}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
