import { useState } from "react";

export const useCarousel = (length) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < length) {
      setIndex(slideIndex);
    }
  };

  return { index, next, prev, goToSlide };
};