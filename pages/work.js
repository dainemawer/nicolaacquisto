import React from 'react'
import dynamic from 'next/dynamic'
import Contentful from "../contentful/contentful";
import Meta from '../components/Meta/Meta'

const Layout = dynamic(() => import('../components/Layout/Layout'));
const Projects = dynamic(() => import('../components/Projects/Projects'));

const Work = ({ projects }) => {
    return (
        <Layout>
            <Meta
                title="Work | Nicola Acquisto"
                description="Work by Nicola Acquisto"
                url="https://nicolaacquisto.com/work"
            />
            <Projects title="Work" projects={projects} />
        </Layout>
    )
}

export async function getServerSideProps() {
    const ProjectsAPI = new Contentful('work');
    const projects = await ProjectsAPI.fetchEntries();
    return {
        props: { projects }
    }
}

Work.propTypes = {}
Work.defaultProps = {}

export default Work;