import {useTranslation} from "react-i18next";
import React from "react";

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('О сайте')}</h2>
        </div>
    );
};

export default About;
