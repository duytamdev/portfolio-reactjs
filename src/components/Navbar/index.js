import React from 'react';
import './styles.css';
import Toggle from "../Toggle";
import {useTranslation} from "react-i18next";
const Navbar = ({onPress}) => {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
    }
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Duy Tâm</div>
               <Toggle/>
                <div className="toggle-language" onClick={handleChangeLanguage}>
                    {i18n.language === 'en' ? 'VI' : 'EN'}
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li onClick={()=>onPress('home')}>{t('home')}</li>
                        <li onClick={()=>onPress('services')}>{t('skill')}</li>
                        <li onClick={()=> onPress('experience')}>{t('experience')}</li>
                    </ul>
                </div>
                <button onClick={()=>onPress('contact')} className="button n-button">{t('contact')}</button>
            </div>
        </div>
    );
};

export default Navbar;
