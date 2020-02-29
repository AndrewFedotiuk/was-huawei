import React from 'react'
import Helmet from 'react-helmet'
import BannerSection from '../components/banner-section'
import '../styles/index.scss'

export const I18nContext = React.createContext();

const Layout = ({ data }) => {

    return (
        <I18nContext.Provider value={data}>
            <Helmet
                title="Gatsby Default Starter"

                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            >
                <link rel='stylesheet' href='https://use.typekit.net/hkx6ahs.css' />
            </Helmet>
            
            <BannerSection />

        </I18nContext.Provider>
    );
};

export default Layout;