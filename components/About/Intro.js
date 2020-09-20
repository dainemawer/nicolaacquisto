import React from 'react'

import {Article, Em, Image, Paragraph, Title} from './About.styled'

const Intro = ({ isShown, setIsShown }) => {
    return (
        <Article>
            <Title>I am a South African born <Em onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>creative</Em>, currently living in London. I am still on the hunt for the best porridge in the city.</Title>
            <Paragraph>
                I spent some time as an art director before realising I’m interested in the why behind a story and not just the how.
            </Paragraph>
            <Paragraph>When I am not working, typically I'll be shooting street photography, constructing the hardest 'would you rather' questions and reading futurist novels.</Paragraph>
            <Paragraph>I enjoy working the most when I am creating thoughtful, people-centric, honest designs. I am interested in building digital products that sync human truths with a strong creative strategy.</Paragraph>
            <Image className={isShown ? 'image-is-overlay' : ''} src="/nicola.jpg" alt="Nicola Acquisto" />
        </Article>
    )
}

export default Intro;
