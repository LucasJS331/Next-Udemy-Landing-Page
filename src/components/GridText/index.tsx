import styled, { css } from 'styled-components';
import { post } from '../../pages';
import { Heading, MainTitle } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

const Container = styled.section`
  ${({ theme }) => css`
    ${MainTitle} {
      margin-bottom: 10px;
    }

    > p {
      margin-bottom: ${theme.sizes.big};
    }
  `}
`;
const Grid = styled.div`
  ${() => css`
    /* coloque seu css aqui */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 0 auto;
    text-align: center;
  `}
`;

const Article = styled.article``;

export const GridText = ({
  background = true,
  description,
  gridContent = [],
  title,
  nameID,
}: GridTextTypes) => {
  return (
    <SectionBackground background={background} nameID={nameID}>
      <Container className="Grid-txt">
        <Heading title={title} size="extra" background={background} />
        <TextComponent>{description}</TextComponent>
        <Grid>
          {gridContent.map((element) => {
            return (
              <Article key={element.title}>
                <Heading
                  title={element.title}
                  size="medium"
                  background={background}
                />
                <TextComponent>{element.body}</TextComponent>
              </Article>
            );
          })}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

export type GridTextTypes = {
  description: string;
  background: boolean;
  title: string;
  gridContent: post[];
  nameID?: string;
};
