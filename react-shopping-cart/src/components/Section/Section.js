import React from 'react'
import Image from '../Image/Image';
import Content from '../Content/Content';
import './Section.scss';


const Section = ({url, heading, text, button, order, id}) => {
    return (
        <section className="container">
            {order % 2 === 0 ? (
                <>
                    <Content className="container__content" heading={heading} text={text} button={button} id={id} />
                    <Image source={url} alt={`${heading} Image`} />
                </>
            )
            :
            (
                <>
                    <Image source={url} alt={`${heading} Image`} />
                    <Content className="container__content" heading={heading} text={text} button={button} id={id} />

                </>
            )
        }

        </section>
    )
}

export default Section;