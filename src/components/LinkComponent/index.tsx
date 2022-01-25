import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary_color};
    text-decoration: none;
    font-weight: bold;
    padding: 1em;
    transition: all 0.5s ease-in;
    border-bottom: 0 solid red;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondary_color};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

export const NavLink = ({ text, url }: NavLinkTypes) => {
  return <Link href={url}>{text}</Link>;
};

export type NavLinkTypes = {
  text: string;
  url: string;
};
