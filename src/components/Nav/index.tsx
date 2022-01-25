import styled, { css } from 'styled-components';
import { NavLink } from '../LinkComponent';

export const NavMenu = styled.nav`
  ${({ theme }) => css`
    @media ${theme.media.default} {
      display: flex;
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;

export const Nav = ({ links = [] }: NavTypes) => {
  return (
    <NavMenu>
      {links.map((link) => {
        return <NavLink key={link.text} text={link.text} url={link.url} />;
      })}
    </NavMenu>
  );
};
export type link = {
  text: string;
  url: string;
};
export type NavTypes = {
  links: link[];
};
