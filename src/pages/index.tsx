import { BaseTemplate } from '../templates/Base';
import { GridTwoColumns } from '../components/GridTwoColumns/index';
import { GridContent } from '../components/GridContent/index';
import { GridText } from '../components/GridText/index';
import { baseData } from '../data/initialData';
import img from '../img/feliz.jpg';
import gif from '../img/udemy.gif';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import axios from 'axios';

export type post = {
  title: string;
  body: string;
};
export type HomeTypes = {
  posts: post[];
};
export default function Home({ posts }: HomeTypes) {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="An Landing Page styled Udemy" />
      </Head>
      <BaseTemplate {...baseData}>
        <GridTwoColumns
          title={'Start your Carreer'}
          text={posts[1].body}
          srcImg={img.src}
          background={false}
          bottom={true}
          nameID="Start"
        />
        <GridTwoColumns
          title={posts[2].title}
          text={posts[2].body}
          srcImg={gif.src}
          shadow={true}
          nameID="View"
        />

        <GridContent
          title={posts[3].title}
          text={posts[3].body}
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

export const getStaticProps: GetStaticProps<HomeTypes> = async () => {
  const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts'))
    .data;

  return {
    props: {
      posts,
    },
  };
};
