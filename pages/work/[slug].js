import React from 'react'
import dynamic from 'next/dynamic'
import Contentful from "../../contentful/contentful";
import Meta from "../../components/Meta/Meta";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { toObject } from '../../util/toObject';
import ProgressiveImage from 'react-progressive-image'

import {Title, Role, Grid, GridDescription, Figure, Description, CreditTitle, DefinitionTitle, DefinitionGrid, DefinitionDescription, WorkLink, Quote, Side} from '../../components/Project/Project.styled'

const Layout = dynamic(() => import('../../components/Layout/Layout'));

const SingleWork = ({ work }) => {

    const { title, slug, role, excerpt, hero, images, quote, description, workUrl, credits, creditName } = work;

    const { fields } = hero;
    const { file } = fields;
    const { url } = file;
    const heroAlt = fields.title;

    const creditListing = toObject(credits, creditName);

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
                        {title && (<Title>{title}</Title>)}
                        {role && (<Role>Role: {role}</Role>)}
                        {excerpt && (<Description>{documentToReactComponents(excerpt)}</Description>)}
                    </article>
                    <aside>
                        <CreditTitle>Credits</CreditTitle>
                        <DefinitionGrid>
                            {Object.entries(creditListing).map( listing => {
                                return (
                                    <>
                                        <DefinitionTitle>{listing[0]}</DefinitionTitle>
                                        <DefinitionDescription>{listing[1]}</DefinitionDescription>
                                    </>
                                )
                            })}
                        </DefinitionGrid>
                        {workUrl && (
                            <WorkLink href={workUrl} target="_blank" rel="noopener noreferrer">
                                Visit {title}
                                <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.0023 24.4645L24.9169 9.51653M24.9169 9.51653L9.96899 9.43111M24.9169 9.51653L8.5169 25.9165" stroke="black" strokeWidth="2.5"/>
                                </svg>
                            </WorkLink>
                        )}
                    </aside>
                </Grid>
                <Figure>
                    <ProgressiveImage src={url} placeholder="tiny-image.jpg">
                        {(src, loading) => (
                            <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={heroAlt} />
                        )}
                    </ProgressiveImage>
                </Figure>
                <GridDescription>
                    <article>
                        {quote && (<Quote><p>{quote}</p></Quote>)}
                    </article>
                    <aside>
                        {description && <Side>{documentToReactComponents(description)}</Side>}
                    </aside>
                </GridDescription>
                {images && images.map( image => {
                    const { fields } = image;
                    const { file, title } = fields;
                    const { url } = file;
                    return (
                        <Figure>
                            <ProgressiveImage src={url} placeholder="tiny-image.jpg">
                                {(src, loading) => (
                                    <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={title} />
                                )}
                            </ProgressiveImage>
                        </Figure>
                    )
                })}
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
