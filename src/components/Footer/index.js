import React from "react";
import "./styles.css";
import Wave from "../../assets/img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import {LINKS} from "../../utils/constants";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>tamduynguyen0819@gmail.com</span>
                <div className="f-icons">
                    <a href={LINKS.instagram}>
                        <Instagram color="white" size={"3rem"} />
                    </a>
                    <a href={LINKS.facebook}>
                        <Facebook color="white" size={"3rem"} />
                    </a>
                    <a href={LINKS.github}>
                        <Github color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
