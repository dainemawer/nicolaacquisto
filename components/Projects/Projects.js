import React from 'react'
import Link from "next/link";

import {Button, Header, Heading, IsoTope, IsoTopeItem, List, ListItem, LinkItem, Seperator, Sup, Section} from './Projects.styled'
import {useRouter} from "next/router";

const Projects = ({ projects, title }) => {
    const router = useRouter()

    return (
        <Section>
            <Header>
                {title && <Heading>{title}</Heading>}
                <Seperator />
                <IsoTope>
                    <IsoTopeItem className={router.pathname === '/work' ? 'is-active' : ''}>
                        <Link href="/work">
                            <Button>All</Button>
                        </Link>
                    </IsoTopeItem>
                    <IsoTopeItem className={router.pathname === '/work/branding' ? 'is-active' : ''}>
                        <Link href="/work/branding">
                            <Button>Branding</Button>
                        </Link>
                    </IsoTopeItem>
                    <IsoTopeItem className={router.pathname === '/work/ux-design' ? 'is-active' : ''}>
                        <Link href="/work/ux-design">
                            <Button>UX Design</Button>
                        </Link>
                    </IsoTopeItem>
                </IsoTope>
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