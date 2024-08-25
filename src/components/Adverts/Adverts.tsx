import { useEffect, useState } from "react";
import { Container } from "../Container";
import { WhiteCardContainer } from "../Cards";
import Image from "next/image";

export const Adverts = () => {
  const [adverts, setAdverts] = useState<any[]>([]);

  const getData = async () => {
    const data = [
      { src: "/images/banner-2.png" },
      // { src: "/images/banner-1.jpg" },
    ];

    setAdverts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <WhiteCardContainer>
        <ul>
          {adverts.map((ad, i) => (
            <li
              key={`advert-${i}`}
              className="bg-blue-500 overflow-hidden rounded-xl h-48 md:h-80"
            >
              <img
                src={ad.src}
                alt={ad.src}
                className="object-bottom object-contain w-full"
              />
            </li>
          ))}
        </ul>
      </WhiteCardContainer>
    </Container>
  );
};
