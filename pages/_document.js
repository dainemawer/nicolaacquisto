import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en" prefix='og: http://ogp.me/ns#'>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="preload" as="style" onLoad="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Playfair+Display:ital@0;1&display=swap" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <body itemScope itemType='http://schema.org/WebPage'>
                <Main />
                <NextScript />
                <noscript>
                    This website requires JavaScript to function.
                </noscript>
                </body>
            </Html>
        )
    }
}

export default MyDocument;
