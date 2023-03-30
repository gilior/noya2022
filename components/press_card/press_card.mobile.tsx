import React, { FC } from 'react';
import styles from 'components/press_card/press_card.mobile.module.scss';
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

export type PressCardMobileProps = {
    generalSiteProps: GeneralSiteProps;
    review: string;
    reviewer: string;
};
const PressCardMobile: FC<PressCardMobileProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles['press-card-mobile-wrap']}>
            {t(props.review)}
            <div className={styles['reviewer']}>
                {t(props.reviewer)}
            </div>
        </div>


    )
};

export default PressCardMobile;
