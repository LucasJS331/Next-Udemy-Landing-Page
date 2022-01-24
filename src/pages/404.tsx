import Head from 'next/head';
import { GridTwoColumns } from '../components/GridTwoColumns/index';
import img from '../img/triste.png';
export default function Page404() {
  return (
    <>
      <Head>
        <title>Not Found!</title>
      </Head>
      <GridTwoColumns
        title="hmmm...WE NOT FOUND THE PAGE YOU ASKED FOR"
        background={false}
        srcImg={img.src}
        shadow={true}
        text="Make sure you typed correctly :)"
        nameID="404"
      />
    </>
  );
}
