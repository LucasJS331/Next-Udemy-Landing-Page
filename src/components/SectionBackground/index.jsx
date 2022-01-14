import styled, { css } from 'styled-components';
import { SectionContainer } from '../SectionContainer';
import bg from '../../img/main-bg.svg';
import P from 'prop-types';

export const Container = styled.div`
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

export const SectionBackground = ({ children, background = true, nameID }) => {
  return (
    <Container background={background} id={nameID}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  nameID: P.string.isRequired,
};
