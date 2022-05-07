import React from 'react'
import Image from '../Image/Image';
import Content from '../Content/Content';
import './Section.scss';


const Section = ({url, heading, text, button, order}) => {
    return (
        <section className="container">
            {order % 2 === 0 ? (
                <>
                    <div className="container__content">
                        <Content heading={heading} text={text} button={button} />
                    </div>
                    <Image source={url} alt={`${heading} Image`} />
                </>
            )
            :
            (
                <>
                    <Image source={url} alt={`${heading} Image`} />
                    <div className="container__content">
                        <Content heading={heading} text={text} button={button} />
                    </div>

                </>
            )
        }

        </section>
    )
}

export default Section;