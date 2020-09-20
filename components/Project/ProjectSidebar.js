import React from 'react'

import {Figure} from './Project.styled'

const ProjectSidebar = ({ images }) => {
    console.log(images);
    return (
        <aside>
            {images && images.map( image => {
                const { fields } = image;
                const { title, file } = fields;
                const { url } = file;
                return (
                    <Figure>
                        <img itemProp="image" src={`https:${url}`} alt={title} />
                    </Figure>
                );
            })}
        </aside>
    )
};

export default ProjectSidebar
