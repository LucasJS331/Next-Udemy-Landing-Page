import styled, { css } from 'styled-components';
import { Heading, MainTitle } from '../Heading';
import { SectionBackground } from '../SectionBackground/index';
import { TextComponent } from '../TextContainer';

export type ContainerTypes = {
  background: boolean;
};
const Container = styled.div<ContainerTypes>`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 58rem;
    margin: 0 auto;

    ${background === true &&
    css`
      ${MainTitle} {
        color: white;
      }
    `}
    ${MainTitle} {
      margin-bottom: ${theme.sizes.medium};
    }

    @media ${theme.media.default} {
      ${MainTitle} {
        font-size: ${theme.sizes.big};
      }
    }
  `}
`;

export const GridContent = ({
  title,
  text,
  background = false,
  size = 'xlarge',
  nameID,
}: GridContentType) => {
  return (
    <SectionBackground background={background} nameID={nameID}>
      <Container background={background}>
        <Heading as="h2" title={title} size={size} />
        <TextComponent>{text}</TextComponent>
      </Container>
    </SectionBackground>
  );
};

export type GridContentType = {
  text: string;
  background?: boolean;
  title: string;
  size?: 'small' | 'medium' | 'big' | 'xlarge' | 'extra';
  nameID: string;
};
