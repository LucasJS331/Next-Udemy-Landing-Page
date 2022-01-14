import { BaseTemplate } from '../templates/Base';
import { GridTwoColumns } from '../components/GridTwoColumns/index';
import { GridContent } from '../components/GridContent/index';
import { GridText } from '../components/GridText/index';
import { baseData } from '../data/initialData';
import img from '../img/feliz.jpg';
import P from 'prop-types';
import gif from '../img/udemy.gif';
import Head from 'next/head';

import axios from 'axios';
export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="An Landing Page styled Udemy" />
      </Head>
      <BaseTemplate {...baseData}>
        <GridTwoColumns
          title={'Start or carreer here'}
          text={posts[0].body}
          srcImg={img.src}
          background={false}
          bottom={true}
          nameID="Start"
        />
        <GridTwoColumns
          title={posts[1].title}
          text={posts[1].body}
          srcImg={gif.src}
          shadow={true}
          nameID="View"
        />

        <GridContent
          title={posts[2].title}
          text={posts[2].body}
          nameID="About"
        />
        <GridText
          background={true}
          gridContent={posts.splice(3, 3)}
          title={posts[3].title}
          nameID="Sugestions"
          description={posts[4].title}
        />
      </BaseTemplate>
    </>
  );
}

Home.propTypes = {
  posts: P.array,
};

export const getStaticProps = async () => {
  const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts'))
    .data;

  return {
    props: {
      posts,
    },
  };
};
