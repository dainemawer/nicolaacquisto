import React from 'react'
import dynamic from 'next/dynamic'
import projects from '../data/projects'

const Layout = dynamic(() => import('../components/Layout/Layout'));
const Projects = dynamic(() => import('../components/Projects/Projects'));

const Work = () => {
    return (
        <Layout>
            <Projects title="Work" projects={projects} />
        </Layout>
    )
}

Work.propTypes = {}
Work.defaultProps = {}

export default Work;