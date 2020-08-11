import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import ProjectContent from "../../components/Project/ProjectContent";
import ProjectSidebar from "../../components/Project/ProjectSidebar";

import {Grid} from '../../components/Project/Project.styled'

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleWork = () => {
    return (
        <Layout className="projects">
            <Grid>
                <ProjectContent />
                <ProjectSidebar />
            </Grid>
        </Layout>
    )
}

SingleWork.propTypes = {}
SingleWork.defaultProps = {}

export default SingleWork;