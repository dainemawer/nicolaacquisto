import React from 'react'
import Link from "next/link";

import {Button, Header, Heading, IsoTope, IsoTopeItem, List, ListItem, LinkItem, Seperator, Sup, Section} from './Projects.styled'

const Projects = ({ projects, title }) => (
    <Section>
        <Header>
            {title && <Heading>{title}</Heading>}
            <Seperator />
            <IsoTope>
                <IsoTopeItem>
                    <Button type="button">All</Button>
                </IsoTopeItem>
                <IsoTopeItem>
                    <Button type="button">Branding</Button>
                </IsoTopeItem>
                <IsoTopeItem>
                    <Button type="button">UX Design</Button>
                </IsoTopeItem>
            </IsoTope>
        </Header>
        <List>
            {projects && projects.map( project => {
                const { id, cat, slug, title, increment } = project;

                return (
                    <ListItem key={id} data-category={cat}>
                        <Link href={`/work/${slug}`} passHref>
                            <LinkItem>{`${title} ${increment}`}<Sup>{increment}</Sup></LinkItem>
                        </Link>
                    </ListItem>
                )
            })}
        </List>
    </Section>
)

export default Projects