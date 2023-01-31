import React, { FC } from 'react';
import Image from 'next/image'

const HomeMobile: FC<any> = ({  }) => {
  return (
    <>
    <Image
        alt="Next.js logo"
        src="https://res.cloudinary.com/lior/image/upload/v1675196681/noya2022/assets/6ddb5b_1d6982e2b09e497895d9cd759833133c_mv2.jpg"
        width={1200}
        height={400}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </>
  )
};

export default HomeMobile;
