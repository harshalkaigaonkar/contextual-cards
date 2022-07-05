import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import HC1 from '../components/HC1/HC1'
import HC3 from '../components/HC3/HC3'
import HC5 from '../components/HC5/HC5'
import HC6 from '../components/HC6/HC6'
import HC9 from '../components/HC9/HC9'

type Data = {
  card_groups: DataElement
} | {
  error: string,
  type: string,
}

type DataElement = {
  id: number,
  name: string,
  design_type: string,
  is_scrollable: boolean,
  card_type: number,
  height?: number,
  level?: string,
  cards: {
    name: string,
    title?: string,
    description?: string,
    url: string,
    is_disabled: boolean,
    formatted_title?: {
      text: string,
      align?: string,
      entities: [] | any,
    }[],
    formatted_description?: {
      text: string,
      align: string,
      entities: [] | any,
    }[],
    icon: {
      image_type: string,
      image_url: string,
      aspect_ratio?: number
    }[],
    bg_image?: {
      image_type?: string,
      image_url?: string,
      aspect_ratio?: number
    },
  }[],
}

const Home: NextPage = (props :any) => {

  const [hc3, setHc3] = useState(props.card_groups.find((element : DataElement) => element?.design_type === "HC3"));
  const [hc6, setHc6] = useState(props.card_groups.find((element : DataElement) => element?.design_type === "HC6"));
  const [hc9, setHc9] = useState(props.card_groups.find((element : DataElement) => element?.design_type === "HC9"));
  const [hc1, setHc1] = useState(props.card_groups.find((element : DataElement) => element?.design_type === "HC1"));
  const [hc5, setHc5] = useState(props.card_groups.find((element : DataElement) => element?.design_type === "HC5"));
  return (
    <div className={styles.container}>
      <Head>
        <title>Fampay Assignment</title>
        <meta name="description" content="Assignment for Fampay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        {(hc1 && hc3 && hc5 && hc6 && hc9) ? (
          <>
            <HC3 cards={hc3.cards} id={hc3.id}  />
            <HC6 />
            <HC5 />
            <HC9 />
            <HC1 />
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </main>
    </div>
  )
}

export const getStaticProps = async() => {
  const res : Data = await fetch('https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad').then(res => res.json());
  return {
    props: res,
  }
}

export default Home
