import React from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";

import {LinkItem, Section, Title} from './Banner.styled'

const Banner = () => {
    return (
        <Section>
            <Title>I love telling purpose-driven brand stories through digital experiences. I spend my time doing <Link href="/branding" passHref><LinkItem>branding <sup>01</sup></LinkItem></Link> and <Link href="/ux-design" passHref><LinkItem>UX designs <sup>02</sup></LinkItem></Link> for interesting brands.</Title>
        </Section>
    )
}

Banner.propTypes = {}
Banner.defaultProps = {}

export default Banner;