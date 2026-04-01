"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CardData {
  id: number;
  imgUrl: string;
  title?: string;
  content: string;
}

interface CardProps {
  data: CardData[];
  showCarousel?: boolean;
  cardsPerView?: number;
}

const CarouselCard = ({
  data,
  showCarousel = true,
  cardsPerView = 3,
}: CardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSingleCard, setIsSingleCard] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSingleCard(data?.length === 1);
  }, [data]);

  const cardWidth = 75 / cardsPerView;

  const nextSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = "translateX(0)";
          void containerRef.current.offsetWidth;
          setIsAnimating(false);
        }
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isAnimating || !showCarousel || !data) return;
    if (data.length <= cardsPerView) return;

    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;

    if (containerRef.current) {
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = `translateX(-${cardWidth}%)`;
      setCurrentIndex(prevIndex);
      void containerRef.current.offsetWidth;
      containerRef.current.style.transition = "transform 500ms ease";
      containerRef.current.style.transform = "translateX(0)";

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const getVisibleCards = () => {
    if (!showCarousel || !data) return data || [];

    const visibleCards = [];
    const totalCards = data.length;

    for (let i = 0; i < cardsPerView + 1; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(data[index]);
    }

    return visibleCards;
  };

  if (!data || data.length === 0) {
    return <div>No card data available</div>;
  }

  return (
    <div className="w-full px-4">
      <div
        className={`relative ${
          isSingleCard ? "max-w-sm mx-auto" : "w-full"
        }`}
      >
        {/* Carousel Controls */}
        {showCarousel && data.length > cardsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-navy/80 text-white flex items-center justify-center rounded-full hover:bg-brand-navy transition-all duration-300 shadow-lg"
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-navy/80 text-white flex items-center justify-center rounded-full hover:bg-brand-navy transition-all duration-300 shadow-lg"
              disabled={isAnimating}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Cards Container Wrapper */}
        <div className="overflow-hidden rounded-2xl">
          <div
            ref={containerRef}
            className="flex"
            style={{
              transform: "translateX(0)",
              width: showCarousel
                ? `${((cardsPerView + 1) * 100) / cardsPerView}%`
                : "100%",
            }}
          >
            {getVisibleCards().map((card, idx) => (
              <div
                key={`card-${currentIndex}-${idx}`}
                style={{
                  width: showCarousel
                    ? `${100 / (cardsPerView + 1)}%`
                    : `${100 / Math.min(cardsPerView, data.length)}%`,
                }}
                className="px-2"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md group h-full border border-brand-ice/20">
                  <div className="w-full h-72">
                    <img
                      src={card.imgUrl}
                      alt={card.title || ""}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent p-5 transition-opacity duration-300 group-hover:opacity-0">
                      {card.title && (
                        <h3 className="text-white font-heading font-bold text-lg">
                          {card.title}
                        </h3>
                      )}
                    </div>
                  </div>
                  {/* Hover content overlay */}
                  <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm text-white p-6 flex flex-col justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 overflow-y-auto">
                    {card.title && (
                      <h3 className="font-heading font-bold text-lg text-brand-orange mb-3">
                        {card.title}
                      </h3>
                    )}
                    <p className="text-sm text-brand-ice/80 leading-relaxed">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
