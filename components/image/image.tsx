import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from 'components/home_card/home.card.moblie.module.scss'
import LinkComponent from 'components/link/link'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

export type CustomImageProps = {
    generalSiteProps:GeneralSiteProps;
    img:StaticImageData;
  
};
const CustomImage: FC<CustomImageProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles['image-wrap']}>
             <Image
          alt="Mountains"
          src={props.img}
         fill/>
        </div>
    )
};

export default CustomImage;
