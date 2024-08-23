import { useEffect, useState } from "react";
import { Container } from "../Container";

export const Adverts = () => {
  const [adverts, setAdverts] = useState<any[]>([]);

  const getData = async () => {
    const data = [
      { src: "./images/banner-2.png" },
      // { src: "./images/banner-1.jpg" },
    ];

    setAdverts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ul>
        {adverts.map((ad, i) => (
          <li className="bg-blue-500 overflow-hidden rounded-xl h-48 md:h-80">
            <img src={ad.src} className="object-bottom object-contain w-full" />
          </li>
        ))}
      </ul>
    </Container>
  );
};
