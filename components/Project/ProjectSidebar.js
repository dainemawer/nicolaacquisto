import React from 'react'

import {Figure} from './Project.styled'

const ProjectSidebar = () => (
    <aside>
        <Figure>
            <img itemProp="image" src="/project-01-01.jpg" alt="Project Image" />
        </Figure>
        <Figure>
            <img itemProp src="/project-01-02.jpg" alt="Project Image" />
        </Figure>
        <Figure>
            <img itemProp src="/project-01-03.jpg" alt="Project Image" />
        </Figure>
        <Figure>
            <img itemProp src="/project-01-04.jpg" alt="Project Image" />
        </Figure>
    </aside>
);

export default ProjectSidebar