import React from 'react';

const SidePanel = () => {
    return (
        <div className="sidepanel">
            <div className="sidepanel__text"><span>Социальные сети</span></div>
            <div className="sidepanel__divider"></div>
            <a href="#" className="sidepanel__icon">
                <img src="assets/icons/instagram.svg" alt="instagram"></img>
            </a>
            <a href="#" className="sidepanel__icon">
                <img src="assets/icons/facebook.svg" alt="facebook"></img>
            </a>
        </div>
    );
}

export default SidePanel;