import { Section } from "../Section";
import { CardContainer, WhiteCardContainer } from "../Cards";
import { Container } from "../Container";
import { useSpaceConfiguration } from "@/contexts";

export const Footer = () => {
  const { spaceConfiguration } = useSpaceConfiguration();

  return (
    <Section>
      <Section>
        <Container>
          <WhiteCardContainer>
            <p>{spaceConfiguration.description}</p>
          </WhiteCardContainer>
        </Container>
      </Section>

      <footer className="bg-black  text-white">
        <CardContainer className="min-h-[30vh] border-0">
          <Container>some thing on the footer</Container>
        </CardContainer>
      </footer>
    </Section>
  );
};
