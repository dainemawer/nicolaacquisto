import React from 'react'
import dynamic from 'next/dynamic'
import Contentful from "../../contentful/contentful";
import Meta from '../../components/Meta/Meta'
import {useRouter} from "next/router";

const Layout = dynamic(() => import('../../components/Layout/Layout'));
const Projects = dynamic(() => import('../../components/Projects/Projects'));

const Work = ({ projects }) => {
    const router = useRouter()
    return (
        <Layout>
            <Meta
                title="Branding | Nicola Acquisto"
                description="Branding | Work by Nicola Acquisto"
                url="https://nicolaacquisto.com/work/branding"
            />
            <Projects title="Work" projects={projects} active={router.pathname} />
        </Layout>
    )
}

export async function getServerSideProps() {
    const ProjectsAPI = new Contentful();
    const projects = await ProjectsAPI.fetchEntriesByCategory('Branding');
    return {
        props: { projects }
    }
}

Work.propTypes = {}
Work.defaultProps = {}

export default Work;