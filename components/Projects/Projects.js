import React, { useState } from "react"
import Link from "next/link"

import {
  Button,
  Header,
  Heading,
  IsoTope,
  IsoTopeItem,
  IsoTopMenu,
  ImageLink,
  Sticky,
  ImageGridImage,
  ImageGrid,
  ImageGridItem,
  List,
  ListItem,
  LinkItem,
  Seperator,
  Sup,
  Section,
} from "./Projects.styled"

const Projects = ({ projects, title, active }) => {
  const [hover, setHover] = useState(false)

  return (
    <Section>
      <Sticky>
        <Header onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          {title && <Heading>{title}</Heading>}
          <Seperator />
          {hover && (
            <IsoTope className="hover">
              <IsoTopeItem className={active === "/work" ? "is-active all" : "all"}>
                <Link href="/work">
                  <Button>
                    <span className="sr-only">View </span> All
                  </Button>
                </Link>
              </IsoTopeItem>

              <IsoTopeItem className={active === "/work/branding" ? "is-active branding" : "branding"}>
                <Link href="/work/branding">
                  <Button>
                    <span className="sr-only">View </span> Branding
                  </Button>
                </Link>
              </IsoTopeItem>

              <IsoTopeItem className={active === "/work/ux-design" ? "is-active ux-design" : "ux-design"}>
                <Link href="/work/ux-design">
                  <Button>
                    <span className="sr-only">View </span> UX Design
                  </Button>
                </Link>
              </IsoTopeItem>
            </IsoTope>
          )}
          {!hover && (
            <IsoTope>
              {active === "/work" ? (
                <IsoTopeItem className={active === "/work" ? "is-active all" : "all"}>
                  <Link href="/work">
                    <Button>
                      <span className="sr-only">View </span> All
                    </Button>
                  </Link>
                </IsoTopeItem>
              ) : null}

              {active === "/work/branding" ? (
                <IsoTopeItem className={active === "/work/branding" ? "is-active branding" : "branding"}>
                  <Link href="/work/branding">
                    <Button>
                      <span className="sr-only">View</span> Branding
                    </Button>
                  </Link>
                </IsoTopeItem>
              ) : null}

              {active === "/work/ux-design" ? (
                <IsoTopeItem className={active === "/work/ux-design" ? "is-active ux-design" : "ux-design"}>
                  <Link href="/work/ux-design">
                    <Button>
                      <span className="sr-only">View</span> UX Design
                    </Button>
                  </Link>
                </IsoTopeItem>
              ) : null}
            </IsoTope>
          )}
        </Header>
        <List>
          {projects &&
            projects.map((project) => {
              const { id, slug, title } = project
              const increment = `0${id}`

              return (
                <ListItem key={id}>
                  <Link as={`/work/${slug}`} href={{ pathname: `/work/[slug]`, query: { post: slug } }} passHref>
                    <LinkItem>
                      <span className="sr-only">View</span> {`${title}`}
                      <Sup>{increment}</Sup>
                    </LinkItem>
                  </Link>
                </ListItem>
              )
            })}
        </List>
      </Sticky>
      <ImageGrid>
        {projects &&
          projects.map((project) => {
            const { hero, slug, id } = project
            const { fields } = hero
            const { file, title } = fields
            const { url } = file
            return (
              <ImageGridItem key={`thumbnail-${id}`} key={id}>
                <Link as={`/work/${slug}`} href={{ pathname: `/work/[slug]`, query: { post: slug } }} passHref>
                  <ImageLink>
                    <ImageGridImage
                      loading="lazy"
                      src={`${url}?w=1560&h=1168&q=100`}
                      alt={title}
                      width="780"
                      height="560"
                    />
                  </ImageLink>
                </Link>
              </ImageGridItem>
            )
          })}
      </ImageGrid>
    </Section>
  )
}

export default Projects
