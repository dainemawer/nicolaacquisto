import React from 'react'
import Router from 'next/router'

import {Back, Heading, Role, Credits, Content, Sticky } from './Project.styled'

const ProjectContent = () => (
    <section>
            <Sticky>
                    <Heading>Project 01</Heading>
                    <Role>Role: Lead UX Designer</Role>
                    <Credits>Credits: Creative Director - Person One, Developer - Person Two Creative Director - Person One, Developer - Person Two</Credits>
                    <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Senectus et netus et malesuada fames ac. Sapien eget mi proin sed libero enim sed faucibus. Vitae auctor eu augue ut. Suscipit adipiscing bibendum est ultricies integer. Sit amet mattis vulputate enim nulla aliquet. Nunc sed blandit libero volutpat sed. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ut placerat orci nulla pellentesque dignissim enim. Eget lorem dolor sed viverra. Donec enim diam vulputate ut pharetra sit amet aliquam id. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Erat velit scelerisque in dictum non consectetur a. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet cursus sit amet. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Sit amet est placerat in egestas.</Content>
                    <Back onClick={() => Router.back()}>
                            <svg width="22" height="22" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 2L3 16.5M3 16.5L17.5 31M3 16.5H35" stroke="#000000" strokeWidth="3"/>
                            </svg>
                    </Back>
            </Sticky>
    </section>
);

export default ProjectContent