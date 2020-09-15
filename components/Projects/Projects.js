import React, {useState} from 'react'
import Link from "next/link";

import {Button, Header, Heading, IsoTope, IsoTopeItem, IsoTopMenu, ImageLink, Sticky, ImageGridImage, ImageGrid, ImageGridItem, List, ListItem, LinkItem, Seperator, Sup, Section} from './Projects.styled'


const Projects = ({ projects, title, active }) => {

    const [hover, setHover] = useState(false);

    return (
        <Section>
            <Sticky>
                <Header onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {title && <Heading>{title}</Heading>}
                    <Seperator />
                    {hover && (
                        <IsoTope className="hover">
                            <IsoTopeItem className={active === '/work' ? 'is-active all' : 'all'}>
                                <Link href="/work">
                                    <Button>All</Button>
                                </Link>
                            </IsoTopeItem>

                            <IsoTopeItem className={active === '/work/branding' ? 'is-active branding' : 'branding'}>
                                <Link href="/work/branding">
                                    <Button>Branding</Button>
                                </Link>
                            </IsoTopeItem>

                            <IsoTopeItem className={active === '/work/ux-design' ? 'is-active ux-design' : 'ux-design'}>
                                <Link href="/work/ux-design">
                                    <Button>UX Design</Button>
                                </Link>
                            </IsoTopeItem>
                        </IsoTope>
                    )}
                    {!hover &&
                    <IsoTope>
                        {active === '/work' ? (
                            <IsoTopeItem className={active === '/work' ? 'is-active all' : 'all'}>
                                <Link href="/work">
                                    <Button>All</Button>
                                </Link>
                            </IsoTopeItem>
                        ) : null}

                        {active === '/work/branding' ? (
                            <IsoTopeItem className={active === '/work/branding' ? 'is-active branding' : 'branding'}>
                                <Link href="/work/branding">
                                    <Button>Branding</Button>
                                </Link>
                            </IsoTopeItem>
                        ) : null }

                        {active === '/work/ux-design' ? (
                            <IsoTopeItem className={active === '/work/ux-design' ? 'is-active ux-design' : 'ux-design'}>
                                <Link href="/work/ux-design">
                                    <Button>UX Design</Button>
                                </Link>
                            </IsoTopeItem>
                        ) : null }
                    </IsoTope>
                    }
                </Header>
                <List>
                    {projects && projects.map( project => {
                        const { id, slug, title } = project;
                        const increment = `0${id}`;

                        return (
                            <ListItem key={id}>
                                <Link as={`/work/${slug}`} href={{ pathname: `/work/[slug]`, query: {post: slug}}} passHref>
                                    <LinkItem>{`${title}`}<Sup>{increment}</Sup></LinkItem>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </Sticky>
            <ImageGrid>
                {projects && projects.map( project => {
                    const { hero, slug, id } = project;
                    const { fields, sys } = hero;
                    const { file, postId } = fields;
                    const { url } = file;
                    return <ImageGridItem key={`thumbnail-${id}`}><Link as={`/work/${slug}`} href={{ pathname: `/work/[slug]`, query: {post: slug}}} passHref><ImageLink><ImageGridImage src={url} /></ImageLink></Link></ImageGridItem>
                })}
            </ImageGrid>
        </Section>
    )
}

export default Projects