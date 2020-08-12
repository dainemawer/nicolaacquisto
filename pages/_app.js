import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import Router, {useRouter} from 'next/router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import {bodyClassName} from '../util/body'

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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