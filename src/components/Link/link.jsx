import React from 'react';

const Link = (link) => {
    return (
    <a href={link.href} className={link.classes}>{link.text}</a>
    );
}

export default Link;