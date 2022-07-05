import Image from 'next/image';
import React from 'react'
import styles from './HC3.module.css';

type HC3Props = {
 cards : any[],
 id: string
}

const HC3 = ({cards, id}: HC3Props) => {
 console.log(cards[0].bg_image.image_url)
 const loader = () => cards[0].bg_image.image_url;
  return (
    <>
     <div className={styles.hc3_container}>
      <div style={{width: "500px", position: "absolute", display: "flex", justifyContent: "center", margin: "0.7rem 0rem", aspectRatio: `${cards[0].bg_image.aspect_ratio}`}}>
      <Image
      loader={loader}
      src={cards[0].bg_image.image_url}
      alt="wallet panel"
      width='480'
      height='580'
      />
      </div>
      <div style={{position: "relative"}}>

      </div>
     </div>
    </>
  )
}

export default HC3