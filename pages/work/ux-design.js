import React from 'react'
import dynamic from 'next/dynamic'
import Contentful from "../../contentful/contentful";
import Meta from '../../components/Meta/Meta'

const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Projects = dynamic(() => import('../../components/Projects/Projects'));

const Work = ({ projects }) => {
    return (
        <Layout>
            <Meta
                title="UX Design | Nicola Acquisto"
                description="UX Design | Work by Nicola Acquisto"
                url="https://nicolaacquisto.com/work/ux-design"
            />
            <Projects title="Work" projects={projects} />
        </Layout>
    )
}

export async function getServerSideProps() {
    const ProjectsAPI = new Contentful();
    const projects = await ProjectsAPI.fetchEntriesByCategory('UX Design');
    return {
        props: { projects }
    }
}

Work.propTypes = {}
Work.defaultProps = {}

export default Work;