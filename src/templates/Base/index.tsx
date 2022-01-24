import styled, { css } from 'styled-components';
import { Footer } from '../../components/Footer/index';
import { GoTopBtn } from '../../components/GoTopBtn';
import { Menu } from '../../components/Menu/index';
import { link } from '../../components/Nav/index';
import { NavLogoTypes } from '../../components/NavLogo';
export const Container = styled.div`
  ${() => css``}
`;

export const BaseTemplate = ({
  links = [],
  logoData,
  children,
  footerTxt,
  footerHref,
}: BaseTemplatTypes) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>{children}</Container>
      <Footer text={footerTxt} href={footerHref} />
      <GoTopBtn />
    </>
  );
};

type BaseTemplatTypes = {
  footerTxt: string;
  links?: link[];
  footerHref: string;
  logoData?: NavLogoTypes;
  children: React.ReactNode;
};
