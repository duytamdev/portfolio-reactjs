import React from 'react';
import './styles.css';
import useTheme from "../../hooks/useTheme";
import {useTranslation} from "react-i18next";
const DATA_SECTION = [
    {
        number: 1,
        text: 'year',
        text2: 'experience'
    },
    {
        number: '5+',
        text: 'project',
        text2: 'completed',
    },
    {
        number: 1,
        text: 'companies',
        text2:'worked',
    }
]
const Experience = () => {
    const {darkMode} = useTheme();
    const {t}= useTranslation();
    return (
        <div className={'experience'}>

            {
                DATA_SECTION.map((item,index)=>{
                  return (
                      <div key={index} className="achievement">
                          <div style={{color: darkMode?'var(--orange)':''}} className="circle">{item.number}</div>
                          <span style={{color: darkMode?'var(--orange)':''}}>{t(item.text)}</span>
                          <span style={{color: darkMode?'var(--orange)':''}}>{t(item.text2)}</span>
                      </div>
                  )
                })
            }
        </div>
    );
};

export default Experience;
