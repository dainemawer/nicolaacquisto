import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import ProjectContent from "../../components/Project/ProjectContent";
import ProjectSidebar from "../../components/Project/ProjectSidebar";
import Contentful from "../../contentful/contentful";

import {Grid} from '../../components/Project/Project.styled'
import Meta from "../../components/Meta/Meta";

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleWork = ({ work }) => {

    const { title, slug, role, description, credits } = work;

    return (
        <Layout>
            <Meta
                title={`${title} | Branding | Nicola Acquisto`}
                description={`${title} by Nicola Acquisto`}
                url={`https://nicolaacquisto.com/work/${slug}`}
            />
            <Grid>
                <ProjectContent title={title} role={role} description={description} credits={credits} />
                <ProjectSidebar />
            </Grid>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const api = new Contentful();
    const work = await api.getEntryBySlug(context.query.slug);

    return {
        props: { work }
    }
}

SingleWork.propTypes = {}
SingleWork.defaultProps = {}

export default SingleWork;