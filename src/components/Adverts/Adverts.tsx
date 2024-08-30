import { useEffect, useState } from "react";
import { Container } from "../Container";
import { WhiteCardContainer } from "../Cards";
import Image from "next/image";
import { GalleryCarousel } from "../GalleryCarousel";

export const Adverts = () => {
  const [adverts, setAdverts] = useState<any[]>([]);

  const getData = async () => {
    const data = [
      { src: "/images/banner-2.png" },
      { src: "/images/banner-1.jpg" },
    ];

    setAdverts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <div className="rounded-md overflow-hidden">
        <GalleryCarousel startIndex={0} autoPlay>
          {adverts.map((ad, i) => (
            <div
              key={`advert-${i}`}
              className="bg-blue-500 flex overflow-hidden rounded-xl h-[25svh] md:h-[35svh]"
            >
              <img
                src={ad.src}
                alt={ad.src}
                className="object-[40%] object-cover w-full"
              />
            </div>
          ))}
        </GalleryCarousel>
      </div>
    </Container>
  );
};
