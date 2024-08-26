import { Section } from "../Section";
import { CardContainer, WhiteCardContainer } from "../Cards";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <Section>
      <Section>
        <Container>
          <WhiteCardContainer>
            <p>Some details about this space</p>
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
