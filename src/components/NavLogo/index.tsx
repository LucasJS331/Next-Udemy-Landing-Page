import Image from 'next/image';
import styled, { css } from 'styled-components';

export const ContainerLogo = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary_color};
    display: flex;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;

    > img {
      width: 6rem;
      height: 6rem;
      max-width: 8em;
      max-height: 8em;
    }
  `}
`;

export const NavLogo = ({ text, srcImg }: NavLogoTypes) => {
  return (
    <ContainerLogo href="#">
      {srcImg.src.trim() !== '' && <Image src={srcImg.src} alt={text} />}

      {srcImg.src.trim() === '' && <span>{text}</span>}
    </ContainerLogo>
  );
};
type img = {
  src: string;
};
export type NavLogoTypes = {
  text: string;
  srcImg: img;
};
