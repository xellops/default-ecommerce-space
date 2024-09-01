import { useEffect, useState } from "react";
import { Container } from "../Container";
import { GalleryCarousel } from "../GalleryCarousel";
import { marketplacesApi, Storage } from "@/utils";
import Image from "next/image";

export const Banners = () => {
  const [banners, setBanners] = useState<any[]>([]);

  const getData = async () => {
    try {
      const result = await marketplacesApi.findBanners();
      setBanners(result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return banners.length ? (
    <Container>
      <div className="rounded-md overflow-hidden">
        <GalleryCarousel startIndex={0} autoPlay>
          {banners.map((banner, i) => (
            <div
              key={`banner-${i}`}
              className="flex overflow-hidden rounded-xl h-[15svh] sm:h-[25svh] md:h-[35svh] lg:h-[40svh] xl:h-[48svh] bg-[#fff]"
            >
              <Image
                src={Storage.get(banner.imageKey)}
                alt={banner.slug}
                className="object-center object-contain w-full"
                fill={true}
              />
            </div>
          ))}
        </GalleryCarousel>
      </div>
    </Container>
  ) : null;
};
