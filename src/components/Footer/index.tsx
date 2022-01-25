import styled, { css } from 'styled-components';
import { TextComponent } from '../TextContainer';

export const Container = styled.section`
  ${() => css`
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  `}
`;

export const Footer = ({ text, href = '/' }: FooterTypes) => {
  return (
    <Container id="Footer">
      <TextComponent>
        <a href={href}>{text}</a>
      </TextComponent>
    </Container>
  );
};

type FooterTypes = {
  text: string;
  background?: boolean;
  href?: string;
};
