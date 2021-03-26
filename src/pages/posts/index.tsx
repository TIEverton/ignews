import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipis lorem</p>
          </a>
          <a href="#">
            <time>12 de março de 2020</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipis lorem</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publications')
  ], {
    fetch: ['publications.title', 'publications.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}