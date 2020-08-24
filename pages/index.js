import React, {useEffect} from 'react'
import Meta from '../components/Meta/Meta'

import Splash from '../components/Splash/Splash'

const Index = () => {

    useEffect( () => {
        document.body.classList.add('splash-bg');

        return () => {
            document.body.classList.remove('splash-bg')
        }
    } );

    return (
        <>
            <Meta
                title="Nicola Acquisto"
                description="Welcome Nicola Acquisto"
                url="https://nicolaacquisto.com/"
            />
            <Splash />
        </>
    )
}

export default Index;