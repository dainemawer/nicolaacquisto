import React from 'react'
import Content from '../components/About/Content'
import dynamic from 'next/dynamic'
import Meta from '../components/Meta/Meta'

const Layout = dynamic(() => import('../components/Layout/Layout'));

const About = () => {
    return (
        <Layout>
            <Meta
                title="About | Nicola Acquisto"
                description="About Nicola Acquisto"
                url="https://nicolaacquisto.com/work"
            />
            <Content />
        </Layout>
    )
}

export default About;