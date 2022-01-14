import styled, { css } from 'styled-components';

const Lucas = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary_color};
  `}
`;

export default function LucasComponent() {
  return <Lucas>aaaaaa</Lucas>;
}
