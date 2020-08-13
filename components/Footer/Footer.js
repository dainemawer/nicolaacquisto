import React from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";

import {Footer, List, ListItem, LinkItem} from './Footer.styled'

const SiteFooter = () => {
    return (
        <Footer itemScope="" itemType="http://schema.org/WPFooter" role="contentinfo">
            <nav itemScope="" itemType="https://schema.org/SiteNavigationElement" role="navigation">
                <List>
                    <ListItem>
                        <LinkItem href="mailto:nicolaacquisto@gmail.com">
                            Say Hi
                        </LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="https://medium.com/@nicolaacquisto" target="_blank" rel="noopener noreferrer">
                            Thoughts
                        </LinkItem>
                    </ListItem>
                </List>
            </nav>
            <nav itemScope="" itemType="https://schema.org/SiteNavigationElement" role="navigation">
                <List>
                    <ListItem>
                        <LinkItem href="https://www.linkedin.com/in/nicola-acquisto-766730100/" rel="noopener noreferrer">
                            <svg role="img" aria-hidden="true" width="18" height="17" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.32153 0.90625C1.60795 0.90625 0.21875 2.29545 0.21875 4.00903C0.21875 5.72261 1.60795 7.1118 3.32153 7.1118C5.03511 7.1118 6.4243 5.72261 6.4243 4.00903C6.4243 2.29545 5.03511 0.90625 3.32153 0.90625ZM19.6252 9.14271C17.0372 9.14271 15.3166 10.5601 14.6043 11.907H14.4915V9.53761H9.41425V26.6875H14.7172V18.2254C14.7172 15.99 15.1614 13.8251 17.9328 13.8251C20.6618 13.8251 20.6971 16.3496 20.6971 18.3382V26.6875H26V17.2663C26 12.6545 25.0198 9.14271 19.6252 9.14271ZM0.726477 9.53761V26.6875H6.08582V9.53761H0.726477Z" fill="black"/>
                            </svg>
                            <span className="sr-only">Connect on LinkedIn (Open In New Tab)</span>
                        </LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="https://www.instagram.com/skinandglass/" rel="noopener noreferrer">
                            <svg role="img" aria-hidden="true" width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3809 0.9375C23.5974 0.9375 27.0625 4.39795 27.0625 8.61914V19.3809C27.0625 23.5974 23.6021 27.0625 19.3809 27.0625H8.61914C4.40259 27.0625 0.9375 23.6021 0.9375 19.3809V8.61914C0.9375 4.40259 4.39795 0.9375 8.61914 0.9375H19.3809ZM19.3809 3.3125H8.61914C5.68286 3.3125 3.3125 5.68286 3.3125 8.61914V19.3809C3.3125 22.3171 5.68286 24.6875 8.61914 24.6875H19.3809C22.3171 24.6875 24.6875 22.3171 24.6875 19.3809V8.61914C24.6875 5.68286 22.3171 3.3125 19.3809 3.3125ZM6.98633 5.91016C7.58472 5.91016 8.0625 6.38794 8.0625 6.98633C8.0625 7.58472 7.58472 8.0625 6.98633 8.0625C6.38794 8.0625 5.91016 7.58472 5.91016 6.98633C5.91016 6.38794 6.38794 5.91016 6.98633 5.91016ZM14 6.875C17.9197 6.875 21.125 10.0803 21.125 14C21.125 17.9197 17.9197 21.125 14 21.125C10.0803 21.125 6.875 17.9197 6.875 14C6.875 10.0803 10.0803 6.875 14 6.875ZM14 9.25C11.3606 9.25 9.25 11.3606 9.25 14C9.25 16.6394 11.3606 18.75 14 18.75C16.6394 18.75 18.75 16.6394 18.75 14C18.75 11.3606 16.6394 9.25 14 9.25Z" fill="black"/>
                            </svg>
                            <span className="sr-only">Follow Me on Instagram (Open In New Tab)</span>
                        </LinkItem>
                    </ListItem>
                </List>
            </nav>
        </Footer>
    )
}

SiteFooter.propTypes = {}
SiteFooter.defaultProps = {}

export default SiteFooter;