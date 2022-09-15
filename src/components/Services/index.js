import React from 'react';
import './styles.css';
import {motion} from "framer-motion"
import {DATA_SKILLS} from "../../utils/constants";
import Card from "../Card";
import {useTranslation} from "react-i18next";

const DATA_POSITION_CARD = [
    {
        initial: {
            left: '29rem',
        },
        whileInView: {
            left: '20rem',
        }
    },
    {
        initial: {
            left: '-11rem',
            top: '14rem',
        },
        whileInView: {
            left: '-6rem',
        }
    },
    {
        initial: {
            left: '25rem',
            top: '24rem',
        },
        whileInView: {
            left: '12rem',
        }
    }
]
const transition = {
    duration: 1,
    type: "spring",
};
const dataCard = DATA_SKILLS.map((item, index) => {
    return {
        ...item,
        position: DATA_POSITION_CARD[index]
    }
});
const Services = () => {
    const {t} = useTranslation();
    return (
        <div className="services">
            <div className="awesome">
                <span>{t('skill')}</span>
                <span>{t('intro-skill')}</span>
                <a href={'https://drive.google.com/file/d/1KR_NTTe6VHwVER3Ww-5nNdVc4a31kISa/view?usp=sharing'}>
                    <button className={'s-button'}>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                {dataCard.map((item, index) => {
                    return (
                        <motion.div
                            transition={transition}
                            key={index}
                            initial={item.position.initial}
                            whileInView={item.position.whileInView}>
                            <Card item={item}/>
                        </motion.div>)
                })}
            </div>
        </div>
    );
};

export default Services;
