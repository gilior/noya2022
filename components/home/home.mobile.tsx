import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/home/home.mobile.module.css'
import mic from '../../public/1.jpg'

const HomeMobile: FC<any> = ({  }) => {
  return (
    // <div className={styles.main}>
         <div className={styles['image-wrap']}>
      <Image
        alt="Mountains"
        src={mic}
       fill

      />
    </div>

    // </div>
  )
};

export default HomeMobile;
