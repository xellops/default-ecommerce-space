import { ModalProps } from "@/interfaces/props.interface";
import { Modal } from "../Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselProps } from "react-responsive-carousel";

export interface GalleryCarouselProps
  extends Partial<ModalProps & CarouselProps> {
  startIndex: number | null;
}

export const GalleryCarousel = (props: GalleryCarouselProps) => {
  return (
    <Modal isOpen={props.startIndex !== null} onClose={props.onClose}>
      <Carousel
        {...props}
        selectedItem={props.startIndex || 0}
        infiniteLoop={true}
        // centerMode={true}
        // className="absolute w-full h-svh"
      >
        {props.children}
      </Carousel>
    </Modal>
  );
};
