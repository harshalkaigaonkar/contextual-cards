import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css';

const Header = () => {
 const loader = () => "https://fampay.in/assets/images/icons/common/headerWhiteLogoIcon.svg";
  return (
    <div className={styles.header_container}>
     <Image
       loader={loader}
       src="https://fampay.in/assets/images/icons/common/headerBlackLogoIcon.svg"
       alt="Fampay_logo"
       width={150}
       height={25}
       />
    </div>
  )
}

export default Header