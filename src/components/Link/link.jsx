import React from 'react';

const Link = (link) => {
    return (
    <a href="#" className={link.classes}>{link.text}</a>
    );
}

export default Link;