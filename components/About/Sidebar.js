import React from 'react'

import {List, SkillsItem, Widget, WidgetHeading, Wrap} from './About.styled'

const Sidebar = () => {
    return (
        <aside>
            <Widget>
                <WidgetHeading>Skills</WidgetHeading>
                <Wrap>
                    <List>
                        <SkillsItem>Branding Design</SkillsItem>
                        <SkillsItem>Graphic Design</SkillsItem>
                        <SkillsItem>Wireframing</SkillsItem>
                        <SkillsItem>User Interface</SkillsItem>
                        <SkillsItem>Creative Strategy</SkillsItem>
                    </List>
                    <List>
                        <SkillsItem>User Research</SkillsItem>
                        <SkillsItem>Art Direction</SkillsItem>
                        <SkillsItem>Photography</SkillsItem>
                        <SkillsItem>Typography</SkillsItem>
                        <SkillsItem>Prototyping</SkillsItem>
                    </List>
                </Wrap>

            </Widget>
            <Widget>
                <WidgetHeading>Tools</WidgetHeading>
                <Wrap>
                    <List>
                        <SkillsItem>Adobe Design Apps</SkillsItem>
                        <SkillsItem>Sketch App</SkillsItem>
                        <SkillsItem>Invision</SkillsItem>
                        <SkillsItem>Figma</SkillsItem>
                    </List>
                    <List>
                        <SkillsItem>Microsoft Office</SkillsItem>
                        <SkillsItem>Apple iWork</SkillsItem>
                        <SkillsItem>Google Drive</SkillsItem>
                        <SkillsItem>Basic HTML/CSS</SkillsItem>
                    </List>
                </Wrap>
            </Widget>
        </aside>
    )
}

export default Sidebar;