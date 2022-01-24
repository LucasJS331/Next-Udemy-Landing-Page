import styled, { css } from 'styled-components';
const sizes = {
  small: (theme) => theme.sizes.small,
  medium: (theme) => theme.sizes.medium,
  big: (theme) => theme.sizes.big,
};

type TextType = {
  size: 'small' | 'medium' | 'big';
};
export const Text = styled.p<TextType>`
  font-size: ${({ size, theme }) => sizes[size](theme)};

  ${({ theme }) => css`
    @media ${theme.media.default} {
      font-size: 2rem;
      padding: 1rem;
    }
  `}
`;

export const TextComponent = ({
  children,
  size = 'medium',
}: TextComponentTypes) => {
  return <Text size={size}>{children}</Text>;
};

type TextComponentTypes = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'big';
};
