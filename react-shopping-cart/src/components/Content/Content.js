import React from 'react';
import './Content.scss';
import Button from '../Button/Button';

const Content = ({heading, text, button}) => {
    return (
        <article className="content">
            <h3 className="content__header">{heading}</h3>
            <p className="content__text">{text}</p>
            <Button button={`Explore ${button}`} />
        </article>
    )
}

export default Content;