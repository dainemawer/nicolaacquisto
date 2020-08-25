import React, {useState} from 'react'
import Link from "next/link";

import {Button, Header, Heading, IsoTope, IsoTopeItem, IsoTopMenu, List, ListItem, LinkItem, Seperator, Sup, Section} from './Projects.styled'


const Projects = ({ projects, title, active }) => {

    const [hover, setHover] = useState(false);

    return (
        <Section>
            <Header onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {title && <Heading>{title}</Heading>}
                <Seperator />
                <IsoTope>
                    {active === '/work' ? (
                        <IsoTopeItem className={active === '/work' ? 'is-active' : ''}>
                            <Link href="/work">
                                <Button>All</Button>
                            </Link>
                        </IsoTopeItem>
                    ) : null}

                    {active === '/work/branding' ? (
                        <IsoTopeItem className={active === '/work/branding' ? 'is-active' : ''}>
                            <Link href="/work/branding">
                                <Button>Branding</Button>
                            </Link>
                        </IsoTopeItem>
                    ) : null }

                    {active === '/work/ux-design' ? (
                        <IsoTopeItem className={active === '/work/ux-design' ? 'is-active' : ''}>
                            <Link href="/work/ux-design">
                                <Button>UX Design</Button>
                            </Link>
                        </IsoTopeItem>
                    ) : null }
                </IsoTope>
                {hover && (
                    <IsoTope className="hover">
                        <IsoTopeItem className={active === '/work' ? 'is-active' : ''}>
                            <Link href="/work">
                                <Button>All</Button>
                            </Link>
                        </IsoTopeItem>

                        <IsoTopeItem className={active === '/work/branding' ? 'is-active' : ''}>
                            <Link href="/work/branding">
                                <Button>Branding</Button>
                            </Link>
                        </IsoTopeItem>

                        <IsoTopeItem className={active === '/work/ux-design' ? 'is-active' : ''}>
                            <Link href="/work/ux-design">
                                <Button>UX Design</Button>
                            </Link>
                        </IsoTopeItem>
                    </IsoTope>
                )}
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
        </Section>
    )
}

export default Projects