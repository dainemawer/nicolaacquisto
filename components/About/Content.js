import React, { useState } from 'react'

import Intro from './Intro'
import Sidebar from './Sidebar'

import {Section} from './About.styled'

const Content = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Section>
            <Intro isShown={isShown} setIsShown={setIsShown} />
            <Sidebar />
        </Section>
    )
}

export default Content;