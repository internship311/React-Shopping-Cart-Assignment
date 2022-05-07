import React from 'react';
import './Image.scss';

const Image = ({source, alt}) => {
    return (
            <img src={source} className="image-wrapper" alt={alt} />
    )
}

export default Image;