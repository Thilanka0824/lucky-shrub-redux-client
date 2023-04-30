import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const images = [
    "/image-assets/full-yard/full-yard-1.webp",
    "/image-assets/full-yard/full-yard-2.webp",
    "/image-assets/full-yard/full-yard-3.webp",
    "/image-assets/full-yard/full-yard-4.webp",
    "/image-assets/full-yard/full-yard-5.jpg",
    "/image-assets/full-yard/full-yard-6.webp",
    "/image-assets/full-yard/full-yard-7.jpeg",
    "/image-assets/full-yard/full-yard-8.jpeg",
    "/image-assets/full-yard/full-yard-9.jpeg",
    "/image-assets/full-yard/full-yard-10.jpg",
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
      dynamicHeight
      swipeable
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
