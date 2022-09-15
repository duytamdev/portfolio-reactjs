import React,{useCallback} from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import './App.css';
const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth", block: "start"});
}
const App = () => {
    const {darkMode} = useTheme();
    const introRef = React.useRef(null);
    const servicesRef = React.useRef(null);
    const experienceRef = React.useRef(null);
    const contactRef = React.useRef(null);
    const dataScroll = new Map([
        ['intro', introRef],
        ['services', servicesRef],
        ['experience', experienceRef],
        ['contact', contactRef],
    ])
    const handleScroll = useCallback((key) => {
        scrollToDiv(dataScroll.get(key));
    },[])
    return (
        <div className="App" style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
        }}>
            <Navbar onPress={handleScroll}/>
            <div ref={introRef}>
                <Intro/>
            </div>
            <div ref={servicesRef}>
                <Services/>
            </div>
            <div ref={experienceRef}>
                <Experience/>
            </div>
            <div ref={contactRef}>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
