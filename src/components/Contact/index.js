import React, {useRef, useState} from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [send, setSend] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVER_KEY_MAILJS, process.env.REACT_APP_TEMPLATE_ID_MAILJS, form.current, process.env.REACT_APP_PUBLIC_KEY_MAILJS)
            .then(() => {
              setSend(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact">
            <div className="c-left">
                <div className="c-awesome">
                    <span>Get it touch</span>
                    <span>Contact me</span>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name={'user_name'} placeholder="Name" className={'user'}/>
                    <input type="email" name={'user_email'} placeholder="Email" className={'user'}/>
                    <textarea name="message" cols="30" rows="10" placeholder="Message" className="user"></textarea>
                    <button className="submit" value={'Send'}>Send</button>
                    {
                        send && <span className={'send'}>Thank for contact</span>
                    }
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;
