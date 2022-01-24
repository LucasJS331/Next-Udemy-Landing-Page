import styled from 'styled-components';
const sizes = {
  small: (theme) => theme.sizes.small,
  medium: (theme) => theme.sizes.medium,
  big: (theme) => theme.sizes.big,
  extra: (theme) => theme.sizes.extra,
  xlarge: (theme) => theme.sizes.xlarge,
};
type MainTitleTypes = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  background: boolean;
  size: 'small' | 'medium' | 'big' | 'extra' | 'xlarge';
};
export const MainTitle = styled.h1<MainTitleTypes>`
  color: ${({ theme, background }) =>
    background ? theme.colors.light_color : theme.colors.dark_color};
  font-size: ${({ size, theme }) => sizes[size](theme)};
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 25px !important;
  }
`;

export const Heading = ({
  title,
  background = false,
  as = 'h2',
  size = 'medium',
}: HeadingTypes) => {
  return (
    <MainTitle background={background} as={as} size={size}>
      {title}
    </MainTitle>
  );
};

type HeadingTypes = {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'small' | 'medium' | 'big' | 'xlarge' | 'extra';
  background?: boolean;
};
