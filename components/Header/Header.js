import React from 'react'
import Link from 'next/link'
import {useRouter} from "next/router"

import {Header, List, ListItem, LinkItem, Nav, LogoLink} from './Header.styled'

const SiteHeader = () => {
    const router = useRouter()

    return (
        <Header itemScope=""itemType="http://schema.org/WPHeader" role="banner">
            <div itemScope itemType="https://schema.org/Organization">
                <Link href="/home" passHref>
                    <LogoLink itemProp="url">
                        <svg width="154" height="18" viewBox="0 0 424 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.0482 1.2619H27.2331V33.0461H26.8384L4.73618 1.2619H0V41.6429H4.89406V9.9375H5.28874L27.312 41.6429H32.0482V1.2619Z" fill="#000000"/>
                            <path d="M41.7655 41.6429H46.4227V11.3571H41.7655V41.6429ZM44.1335 6.30952C45.9491 6.30952 47.4489 4.88988 47.4489 3.15476C47.4489 1.41964 45.9491 0 44.1335 0C42.318 0 40.8182 1.41964 40.8182 3.15476C40.8182 4.88988 42.318 6.30952 44.1335 6.30952Z" fill="#000000"/>
                            <path d="M67.8226 42.2738C74.5322 42.2738 78.9526 38.1726 79.742 32.8095H75.0847C74.2164 36.122 71.4536 38.0938 67.8226 38.0938C62.297 38.0938 58.7449 33.5193 58.7449 26.5C58.7449 19.6384 62.3759 15.1429 67.8226 15.1429C71.9273 15.1429 74.3743 17.6667 75.0847 20.4271H79.742C78.9526 14.7485 74.1375 10.9628 67.7436 10.9628C59.5342 10.9628 54.0876 17.4301 54.0876 26.6577C54.0876 35.7277 59.2974 42.2738 67.8226 42.2738Z" fill="#000000"/>
                            <path d="M99.42 42.2738C107.629 42.2738 113.155 36.0432 113.155 26.6577C113.155 17.1935 107.629 10.9628 99.42 10.9628C91.2106 10.9628 85.6851 17.1935 85.6851 26.6577C85.6851 36.0432 91.2106 42.2738 99.42 42.2738ZM99.42 38.0938C93.184 38.0938 90.3423 32.7307 90.3423 26.6577C90.3423 20.5848 93.184 15.1429 99.42 15.1429C105.656 15.1429 108.498 20.5848 108.498 26.6577C108.498 32.7307 105.656 38.0938 99.42 38.0938Z" fill="#000000"/>
                            <path d="M125.477 1.2619H120.82V41.6429H125.477V1.2619Z" fill="#000000"/>
                            <path d="M143.483 42.3527C148.771 42.3527 151.534 39.5134 152.481 37.5417H152.718V41.6429H157.376V21.689C157.376 12.067 150.034 10.9628 146.167 10.9628C141.588 10.9628 136.378 12.5402 134.01 18.061L138.431 19.6384C139.457 17.4301 141.884 15.064 146.324 15.064C150.607 15.064 152.718 17.3315 152.718 21.2158V21.3735C152.718 23.6213 150.429 23.4241 144.904 24.1339C139.279 24.8635 133.142 26.1057 133.142 33.0461C133.142 38.9613 137.72 42.3527 143.483 42.3527ZM144.193 38.1726C140.483 38.1726 137.799 36.5164 137.799 33.2827C137.799 29.7336 141.036 28.6295 144.667 28.1562C146.64 27.9196 151.929 27.3676 152.718 26.4211V30.6801C152.718 34.4658 149.719 38.1726 144.193 38.1726Z" fill="#000000"/>
                            <path d="M184.906 41.6429L205.311 30.2068L209.376 41.6429H214.507L199.667 1.2619H194.615L179.775 41.6429H184.906ZM187.115 35.4164L196.71 8.41823L196.983 7.6503H197.299L203.772 25.869L187.115 35.4164Z" fill="#000000"/>
                            <path d="M233.041 42.2738C239.75 42.2738 244.171 38.1726 244.96 32.8095H240.303C239.434 36.122 236.672 38.0938 233.041 38.0938C227.515 38.0938 223.963 33.5193 223.963 26.5C223.963 19.6384 227.594 15.1429 233.041 15.1429C237.145 15.1429 239.592 17.6667 240.303 20.4271H244.96C244.171 14.7485 239.356 10.9628 232.962 10.9628C224.752 10.9628 219.306 17.4301 219.306 26.6577C219.306 35.7277 224.515 42.2738 233.041 42.2738Z" fill="#000000"/>
                            <path d="M277.663 53V11.3571H273.163V16.1682H272.611C271.584 14.5908 269.769 10.9628 263.849 10.9628C256.192 10.9628 250.903 17.0357 250.903 26.5789C250.903 36.2009 256.192 42.2738 263.77 42.2738C269.611 42.2738 271.584 38.6458 272.611 36.9896H273.005V53H277.663ZM273.084 26.5C273.084 33.3616 270.006 38.0938 264.401 38.0938C258.56 38.0938 255.56 32.9673 255.56 26.5C255.56 20.1116 258.481 15.1429 264.401 15.1429C270.085 15.1429 273.084 19.7173 273.084 26.5Z" fill="#000000"/>
                            <path d="M305.846 29.2604C305.846 34.939 301.505 37.5417 298.031 37.5417C294.163 37.5417 291.401 34.7024 291.401 30.2857V11.3571H286.743V30.6012C286.743 38.3304 290.848 42.0372 296.532 42.0372C301.11 42.0372 304.109 39.5923 305.53 36.5164H305.846V41.6429H310.503V11.3571H305.846V29.2604Z" fill="#000000"/>
                            <path d="M319.589 41.6429H324.246V11.3571H319.589V41.6429ZM321.957 6.30952C323.773 6.30952 325.272 4.88988 325.272 3.15476C325.272 1.41964 323.773 0 321.957 0C320.142 0 318.642 1.41964 318.642 3.15476C318.642 4.88988 320.142 6.30952 321.957 6.30952Z" fill="#000000"/>
                            <path d="M354.803 18.1399C353.342 13.8415 350.067 10.9628 344.067 10.9628C337.674 10.9628 332.937 14.5908 332.937 19.7173C332.937 23.8973 335.424 26.6972 340.989 27.9985L346.041 29.1815C349.1 29.8914 350.54 31.3504 350.54 33.4405C350.54 36.0432 347.777 38.1726 343.436 38.1726C339.627 38.1726 337.239 36.5361 336.411 33.2827L331.99 34.3869C333.076 39.5331 337.318 42.2738 343.515 42.2738C350.56 42.2738 355.355 38.4289 355.355 33.2039C355.355 28.9844 352.711 26.3225 347.304 25.0015L342.804 23.8973C339.213 23.01 337.595 21.8073 337.595 19.4807C337.595 16.878 340.357 14.9851 344.067 14.9851C348.133 14.9851 349.81 17.2329 350.619 19.3229L354.803 18.1399Z" fill="#000000"/>
                            <path d="M376.104 11.3571H369.631V4.10119H364.974V11.3571H360.396V15.3006H364.974V34.2292C364.974 39.5134 369.237 42.0372 373.183 42.0372C374.92 42.0372 376.025 41.7217 376.657 41.4851L375.709 37.3051C375.315 37.3839 374.683 37.5417 373.657 37.5417C371.605 37.5417 369.631 36.9107 369.631 32.9673V15.3006H376.104V11.3571Z" fill="#000000"/>
                            <path d="M395.654 42.2738C403.863 42.2738 409.389 36.0432 409.389 26.6577C409.389 17.1935 403.863 10.9628 395.654 10.9628C387.444 10.9628 381.919 17.1935 381.919 26.6577C381.919 36.0432 387.444 42.2738 395.654 42.2738ZM395.654 38.0938C389.418 38.0938 386.576 32.7307 386.576 26.6577C386.576 20.5848 389.418 15.1429 395.654 15.1429C401.89 15.1429 404.731 20.5848 404.731 26.6577C404.731 32.7307 401.89 38.0938 395.654 38.0938Z" fill="#000000"/>
                            <path d="M420.448 41.9583C422.402 41.9583 424 40.3612 424 38.4092C424 36.4572 422.402 34.8601 420.448 34.8601C418.494 34.8601 416.896 36.4572 416.896 38.4092C416.896 40.3612 418.494 41.9583 420.448 41.9583Z" fill="#000000"/>
                        </svg>
                    </LogoLink>
                </Link>
            </div>
            <Nav itemScope="" itemType="https://schema.org/SiteNavigationElement" role="navigation">
                <List>
                    <ListItem className={router.pathname === '/work' ? 'active' : null}>
                        <Link href="/work" passHref>
                            <LinkItem>Work</LinkItem>
                        </Link>
                    </ListItem>
                    <ListItem className={router.pathname === '/about' ? 'active' : null}>
                        <Link href="/about" passHref>
                            <LinkItem>About</LinkItem>
                        </Link>
                    </ListItem>
                </List>
            </Nav>
        </Header>
    )
}

SiteHeader.propTypes = {}
SiteHeader.defaultProps = {}

export default SiteHeader;