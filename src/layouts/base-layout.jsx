import React from 'react'
import Helmet from 'react-helmet'
import BannerSection from '../components/banner-section'
import '../styles/index.scss'
import Player from '../components/player'
import SongSection1 from '../components/song-section-1'
import SongSection2 from '../components/song-section-2'
import SongSection3 from '../components/song-section-3'
import SongSection4 from '../components/song-section-4'
import SongSection5 from '../components/song-section-5'
import SongSection6 from '../components/song-section-6'

export const I18nContext = React.createContext();

const Layout = ({ data }) => {

    return (
        <I18nContext.Provider value={data}>
            <Helmet
                title="Gatsby Default Starter"

                link={[
                    { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=PT+Serif&display=swap" },
                ]}

                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            >
            </Helmet>

            <Player />

            <BannerSection />
            <SongSection1 />
            <SongSection2 />
            <SongSection3 />
            <SongSection4 />
            <SongSection5 />
            <SongSection6 />

        </I18nContext.Provider>
    );
};

export default Layout;
