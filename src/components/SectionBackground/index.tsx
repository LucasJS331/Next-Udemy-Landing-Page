import styled, { css } from 'styled-components';
import { SectionContainer } from '../SectionContainer';

type ContainerType = {
  background: boolean;
};
export const Container = styled.div<ContainerType>`
  ${({ theme, background }) => css`
    min-height: 100vh;
    display: flex;
    align-items: center;

    ${background === true &&
    css`
      color: white;
      background-color: #5624d0;
      background-size: contain;
    `}

    ${!background &&
    css`
      color: ${theme.colors.primary_color};
      background: white;
    `}

    @media ${theme.media.default} {
      min-height: auto;
    }
  `}
`;

export const SectionBackground = ({
  children,
  background = true,
  nameID,
}: SectionBackgroundTypes) => {
  return (
    <Container background={background} id={nameID}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

type SectionBackgroundTypes = {
  children: React.ReactNode;
  background: boolean;
  nameID: string;
};
