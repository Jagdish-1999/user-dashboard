"use client";
import { useEffect, useState } from "react";
import { ProductImage, Container } from "./styled.image";

interface Image {
  id: string;
  url: string;
}

interface ImageSliderProps {
  images: Image[];
  styles?: any;
}

const ImageSlider = ({ images, styles }: ImageSliderProps) => {
  const [index, setIndex] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(images[0].url);
  const [nextUrl, setNextUrl] = useState(images[0].url);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (images.length > 1) {
        setAnimate(true);
        setNextUrl(images[index % images.length].url);
      }
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [index, images]);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
        setCurrentUrl(images[index].url);
        setAnimate(false);
      }, 1000); // Duration of the animation

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [animate, images, index]);

  return (
    <Container styles={styles}>
      <ProductImage
        src={currentUrl}
        alt="current-image"
        width={500}
        height={500}
        priority
        animateOut={animate}
      />
      {animate && (
        <ProductImage
          src={nextUrl}
          alt="next-image"
          width={500}
          height={500}
          priority
          animateIn={animate}
        />
      )}
    </Container>
  );
};

export { ImageSlider };
