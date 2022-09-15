import React from 'react';
import './styles.css';
const FloatingDiv = ({image,text1,text2}) => {
    return (
        <div className="floating-div">
            <img src={image} alt=""/>
            <span>{text1} <br/>{text2}</span>
        </div>
    );
};

export default FloatingDiv;
