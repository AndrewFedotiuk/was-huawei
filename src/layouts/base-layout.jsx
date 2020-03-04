import React from 'react'
// import 'intersection-observer'
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

import bannerImage1 from '../assets/box.png'
import bannerImage2 from '../assets/box-v.png'
import bannerImage3 from '../assets/box-v-out.png'
import bannerImage4 from '../assets/box-h.png'

import Banner from '../components/banner'
import Footer from "../components/footer/footer";

export const I18nContext = React.createContext();

const Layout = ({ data }) => {
    async function loadPolyfills() {
        if (typeof window.IntersectionObserver === 'undefined') {
            await import('intersection-observer')
        }
    }
    return (
        <I18nContext.Provider value={data}>
            <Helmet
                title="HUAWEI FreeBuds 3"

                link={[
                    { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=PT+Serif&display=swap" },
                ]}

                meta={[
                    { name: 'description', content: 'HUAWEI FreeBuds 3.' },
                ]}
            >
            </Helmet>

            <Player />


            <BannerSection />
            <SongSection1 />
            <Banner image={bannerImage1} text={data.banner1} />
            <SongSection2 />
            <Banner image={bannerImage2} text={data.banner2} />
            <SongSection3 />
            <Banner image={bannerImage3} text={data.banner3} />
            <SongSection4 />
            <SongSection5 />
            <Banner image={bannerImage4} text={data.banner4} />
            <SongSection6 />
            <Footer/>
        </I18nContext.Provider>
    );
};

export default Layout;
