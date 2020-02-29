import React from 'react'
import Helmet from 'react-helmet'
import BannerSection from '../components/banner-section'
import '../styles/index.scss'
import SongSection1 from '../components/song-section-1';
import SongSection2 from '../components/song-section-2';

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
            <SongSection1 />
            <SongSection2 />

        </I18nContext.Provider>
    );
};

export default Layout;