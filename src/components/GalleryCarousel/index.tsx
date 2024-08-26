import { ModalProps } from "@/interfaces/props.interface";
import { Modal } from "../Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselProps } from "react-responsive-carousel";
import { useState } from "react";

export interface GalleryCarouselProps
  extends Partial<ModalProps & CarouselProps> {
  startIndex: number | null;
}

export const GalleryCarousel = (props: GalleryCarouselProps) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="bg-green-100">
      <Carousel
        {...props}
        selectedItem={props.startIndex || 0}
        infiniteLoop={true}
        // centerMode={true}
        // className="absolute w-full h-svh"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        thumbWidth={3}
      >
        {props.children}
      </Carousel>
    </div>
  );
};
