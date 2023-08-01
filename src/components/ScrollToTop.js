import React from "react";
import './ScrollToTop.scss';

function ScrollToTop(props) {

    const scrollOnClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div className={`ScrollToTop ${props.showComponent ? 'active' : ''}`}
        onClick={scrollOnClick}>
        <svg width="55" height="55" xmlns="http://www.w3.org/2000/svg">
            <g>
                <title>Layer 1</title>
                <ellipse stroke="#000" ry="25" rx="25.04546" id="svg_1" cy="26.40674" cx="26.22725" strokeWidth="2.5" fill="transparent" />
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_3" y2="13.45312" x2="28.18182" y1="24.45312" x1="16.18182" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
                <line strokeLinecap="null" strokeLinejoin="null" id="svg_4" y2="26.45312" x2="28.18182" y1="37.45312" x1="16.18182" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
                <line transform="rotate(89 31.86143684387207,18.953125) " strokeLinecap="null" strokeLinejoin="null" id="svg_8" y2="13.45312" x2="37.86144" y1="24.45312" x1="25.86144" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
                <line transform="rotate(90 31.683355331420902,31.81893539428711) " strokeLinecap="null" strokeLinejoin="null" id="svg_9" y2="26.31893" x2="37.68336" y1="37.31893" x1="25.68336" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
                <path id="svg_10" d="m-180.9016,-9.69646l0.74251,-0.74001l0.74251,0.74001l-0.37125,0l0,0.74357l-0.74251,0l0,-0.74357l-0.37125,0z" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
            </g>
        </svg>

    </div>
}

export default ScrollToTop;