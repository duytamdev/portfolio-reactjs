import React from 'react';
import './styles.css';
import vector1 from '../../assets/img/Vector1.png';
import vector2 from '../../assets/img/Vector2.png';
import boy from '../../assets/img/boy.png'
import glassesimoji from "../../assets/img/glassesimoji.png";
import crown from '../../assets/img/crown.png';
import {IconImage, LINKS} from "../../utils/constants";
import FloatingDiv from "../FloatingDiv";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const transition = {duration: 2, type: "spring"};

const Intro = () => {
    const {t} = useTranslation();
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>{t('welcome')}</span>
                    <span>Duy Tam</span>
                    <span>{t('intro')}</span>
                </div>
                <button className="i-button">{t('hire')}</button>
                <div className="i-icons">
                    <a href={LINKS.github}> <img src={IconImage.github} alt="github"/></a>
                    <a href={LINKS.linkedin}><img src={IconImage.linkedin} alt="linkedin"/></a>
                    <a href={LINKS.instagram}><img src={IconImage.instagram} alt="instagram"/></a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt=""/>
                <img src={vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img
                    initial={{left: "-36%"}}
                    whileInView={{left: "-24%"}}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />
                <motion.div
                    initial={{top: "-4%" ,left: "30rem"}}
                    whileInView={{left: "25rem"}}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv text1={'Web'} text2={'Developer'} image={crown}/>
                </motion.div>
                <motion.div
                    initial={{left: "9rem", top: "18rem"}}
                    whileInView={{left: "1rem"}}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv text1={'Mobile'} text2={'Developer'} image={crown}/>
                </motion.div>
                <div className="blur" style={{background: "rgb(238 210 255)"}}/>
                <div className="blur" style={{
                    background: "#c1f588",
                    top: "17rem",
                    left: "-9rem",
                    height: "11rem",
                }}/>
            </div>
        </div>
    );
};

export default Intro;
