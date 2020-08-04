import React, { useEffect } from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import {useRouter} from 'next/router'

import {bodyClassName} from '../util/body'

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {

        const bodyClass = bodyClassName(router.pathname);

        /**
         * Add dynamic class to body
         */
        document.body.classList.add(bodyClass);

        /** Clean up */
        return () => {
            document.body.classList.remove(bodyClass);
        }
    }, [router.pathname]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;