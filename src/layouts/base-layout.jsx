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

import cover from '../assets/cover.png'

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
                title={data.metaRu.title}
                link={[
                    { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=PT+Serif&display=swap" },
                ]}

                meta={[
                    { name: 'description', content: data.metaRu.description },
                    { name: 'og:description', content: data.metaRu.description},
                    { name: 'og:title', content: data.metaRu.title },
                    { name: 'og:locale', content: data.metaRu.lang },
                    { name: 'og:url', content: data.metaRu.url },
                    { name: 'og:image', content: `https://huawei.was.media${cover}` },
                    { name: 'fb:app_id', content: '266741733751086' },
                    { name: 'og:image:width', content: '1920' },
                    { name: 'og:image:height', content: '1080' },
                    { name: 'og:site_name', content: "HUAWEI WAS MEDIA" },
                ]}
            >
                <script async src='https://www.googletagmanager.com/gtag/js?id=UA-159640096-1'/>
                <script type="text/javascript">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'UA-159640096-1');
                    `}
                </script>
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
