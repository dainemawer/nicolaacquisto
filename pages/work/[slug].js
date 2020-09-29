import React from 'react'
import dynamic from 'next/dynamic'
import Contentful from "../../contentful/contentful";
import Meta from "../../components/Meta/Meta";

import {Title, Role, Grid, GridDescription, Figure, Description, CreditTitle, DefinitionTitle, DefinitionGrid, DefinitionDescription, WorkLink, Quote, Side} from '../../components/Project/Project.styled'

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleWork = ({ work }) => {

    const { title, slug } = work;

    return (
        <Layout>
            <Meta
                title={`${title} | Branding | Nicola Acquisto`}
                description={`${title} by Nicola Acquisto`}
                url={`https://nicolaacquisto.com/work/${slug}`}
            />
            <div itemScope itemType="http://schema.org/CreativeWork">
                <Grid>
                    <article>
                        <Title>Project 01</Title>
                        <Role>Role: Lead UX Designer</Role>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium.</Description>
                    </article>
                    <aside>
                        <CreditTitle>Credits</CreditTitle>
                        <DefinitionGrid>
                            <DefinitionTitle>Creative Director</DefinitionTitle>
                            <DefinitionDescription>Human</DefinitionDescription>
                            <DefinitionTitle>Developer</DefinitionTitle>
                            <DefinitionDescription>Human</DefinitionDescription>
                            <DefinitionTitle>Creative Director</DefinitionTitle>
                            <DefinitionDescription>Human</DefinitionDescription>
                            <DefinitionTitle>Developer</DefinitionTitle>
                            <DefinitionDescription>Human</DefinitionDescription>
                        </DefinitionGrid>
                        <WorkLink href="http://google.com">
                            Visit {title}
                            <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.0023 24.4645L24.9169 9.51653M24.9169 9.51653L9.96899 9.43111M24.9169 9.51653L8.5169 25.9165" stroke="black" strokeWidth="2.5"/>
                            </svg>
                        </WorkLink>
                    </aside>
                </Grid>
                <Figure>
                    <img src="/project-01-05.jpg" />
                </Figure>
                <GridDescription>
                    <article>
                        <Quote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua magna .</p>
                        </Quote>
                    </article>
                    <aside>
                        <Side>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Senectus et netus et malesuada fames ac. Sapien eget mi proin sed libero enim sed faucibus. Vitae auctor eu augue ut. Suscipit adipiscing bibendum est ultricies integer.</Side>
                        <Side>Sit amet mattis vulputate enim nulla aliquet. Nunc sed blandit libero volutpat sed. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ut placerat orci nulla pellentesque dignissim enim. Eget lorem dolor sed viverra. Donec enim diam vulputate ut pharetra sit amet aliquam id. Risus nullam eget felis eget nunc lobortis.</Side>
                    </aside>
                </GridDescription>
                <Figure>
                    <img src="/project-01-05.jpg" />
                </Figure>
                <Figure>
                    <img src="/project-01-05.jpg" />
                </Figure>
                <Figure>
                    <img src="/project-01-05.jpg" />
                </Figure>
                <Figure>
                    <img src="/project-01-05.jpg" />
                </Figure>
            </div>
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
