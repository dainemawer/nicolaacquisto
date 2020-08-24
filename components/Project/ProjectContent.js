import React from 'react'
import Router from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {Back, Heading, Role, Credits, Content, Sticky } from './Project.styled'

const ProjectContent = ({ title, role, description, credits }) => (
    <section>
            <Sticky>
                    {title && <Heading>{title}</Heading>}
                    {role && <Role>Role: {role}</Role>}
                    <Credits>{documentToReactComponents(credits)}</Credits>
                    <Content>{documentToReactComponents(description)}</Content>
                    <Back onClick={() => Router.back()}>
                            <svg width="22" height="22" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 2L3 16.5M3 16.5L17.5 31M3 16.5H35" stroke="#000000" strokeWidth="3"/>
                            </svg>
                    </Back>
            </Sticky>
    </section>
);

export default ProjectContent