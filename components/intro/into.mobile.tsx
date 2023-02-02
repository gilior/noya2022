import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/home/home.mobile.module.css'
const IntroMobile: FC<any> = ({  }) => {
  return (
    <div className={styles.main}>
         <div className={styles['image-wrap']}>
      <Image
        alt="Mountains"
        src="https://res.cloudinary.com/lior/image/upload/v1675196681/noya2022/assets/6ddb5b_1d6982e2b09e497895d9cd759833133c_mv2.jpg"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>

    </div>
  )
};

export default IntroMobile;
