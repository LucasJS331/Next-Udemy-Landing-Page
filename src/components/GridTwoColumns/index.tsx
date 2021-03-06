import styled, { css } from 'styled-components';
import { SectionBackground } from '../SectionBackground';
import { Heading, MainTitle } from '../Heading';
import { TextComponent } from '../TextContainer';

type ContainerTypes = {
  background: boolean;
};

type ImgContainerTypes = {
  shadow: boolean;
  bottom: boolean;
};
const Container = styled.div<ContainerTypes>`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 15px;

    ${background === true &&
    css`
      ${MainTitle} {
        color: white;
      }
    `}

    @media ${theme.media.default} {
      grid-template-columns: 1fr;

      ${MainTitle} {
        font-size: ${theme.sizes.big};
      }
    }

    ${MainTitle} {
      margin-bottom: 1.6rem;
    }
  `}
`;

const TextContainer = styled.div``;

const ImgContainer = styled.div<ImgContainerTypes>`
  img {
    width: 100%;
    max-height: 500px;
  }

  ${({ theme, shadow, bottom }) => css`
    ${shadow === true &&
    css`
      img {
        box-shadow: 5px 5px 0px 0px #289fed, 10px 10px 0px 0px #5fb8ff,
          15px 15px 0px 0px #a1d8ff, 20px 20px 0px 0px #cae6ff;
      }
    `}

    ${bottom === true &&
    css`
      img {
        border-bottom: 7px solid rgba(79, 26, 128, 0.64);
      }

      @media ${theme.media.default} {
        img {
          border-bottom: 13px solid rgba(77, 31, 164, 0.6);
          border-radius: 40px;
          box-shadow: 0px 10px 13px -7px #000000,
            -1px 7px 13px 2px rgba(0, 0, 0, 0);
        }
      }
    `}
  `}
`;

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = true,
  shadow = false,
  bottom = false,
  nameID,
}: GridTwoColumnsTypes) => {
  return (
    <SectionBackground background={background} nameID={nameID}>
      <Container background={background}>
        <TextContainer>
          <Heading title={title} size="xlarge" as="h2" />
          <TextComponent size={'medium'}>{text}</TextComponent>
        </TextContainer>
        <ImgContainer shadow={shadow} bottom={bottom}>
          <img src={srcImg} alt={title} />
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};

type GridTwoColumnsTypes = {
  text: string;
  background?: boolean;
  title: string;
  srcImg: string;
  shadow?: boolean;
  bottom?: boolean;
  nameID: string;
};
