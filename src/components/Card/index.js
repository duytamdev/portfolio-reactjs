import React from 'react';
import './styles.css';
import {useTranslation} from "react-i18next";

const Card = ({item}) => {
    const {t}= useTranslation();
    const {icon, title, skills} = item;
    const renderSkills = skills.join(', ').toString();
    return (
        <div className={'card'}>
            <img src={icon} alt=""/>

            <span className={'card-title'}>{title}</span>
            <span className={'card-skills'}>{renderSkills}</span>
            <button className="card-button">{t('learn-more')}</button>
        </div>
    );
};

export default Card;
