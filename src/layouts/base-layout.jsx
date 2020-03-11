import React, {useState, createContext} from 'react'
// import 'intersection-observer'
import Helmet from 'react-helmet'
import BannerSection from '../components/banner-section'
import '../styles/index.scss'
import playerModel from '../components/player-context'
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
import Footer from "../components/footer/footer"

import cover from '../assets/cover.png'
import ReactTooltip from "react-tooltip"

import icon from '../assets/icons/favicon.ico'
import icon16 from '../assets/icons/favicon-16x16.png'
import icon32 from '../assets/icons/favicon-32x32.png'
import iconApple from '../assets/icons/apple-touch-icon.png'

export const I18nContext = createContext();
export const PlayerDataContext = createContext();

const Layout = ({data}) => {
	async function loadPolyfills() {
		if (typeof window.IntersectionObserver === 'undefined') {
			await import('intersection-observer')
		}
	}

	const setActiveSong = ({id, text, index}) => {
		setState({
			...state,
			activeId: id,
			activeText: text,
			index
		});
	};

	const setPlaying = (status) => {
		setState(prevState => {

			return {
				...prevState,
				playing: status
			}
		})
	};

	const toggleMute = () => {
		setState(prevState => ({
			...prevState,
			muted: !prevState.muted
		}))
	};

	const setVolume = (e) => {
		e.persist();
		setState(prevState => ({
			...prevState,
			volume: e.target.value
		}))
	};

	const [state, setState] = useState({
		...playerModel,
		setActiveSong,
		setPlaying,
		toggleMute,
		setVolume
	});


	return (
		<I18nContext.Provider value={data}>
			<PlayerDataContext.Provider value={state}>
				<ReactTooltip place="top" type="dark" effect="float" className='custom-tooltip'/>
				<Helmet
					title={data.metaRu.title}
					link={[
						{"rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=PT+Serif&display=swap"},
					]}

					meta={[
						{property: 'description', name: 'description', content: data.metaRu.description},
						{property: 'og:description', name: 'og:description', content: data.metaRu.description},
						{property: 'og:title', name: 'og:title', content: data.metaRu.title},
						{property: 'og:locale', name: 'og:locale', content: data.metaRu.lang},
						{property: 'og:url', name: 'og:url', content: data.metaRu.url},
						{property: 'og:image', name: 'og:image', content: `https://huawei.was.media${cover}`},
						{property: 'fb:app_id', name: 'fb:app_id', content: '266741733751086'},
						{property: 'og:image:width', name: 'og:image:width', content: '1920'},
						{property: 'og:image:height', name: 'og:image:height', content: '1080'},
						{property: 'og:site_name', name: 'og:site_name', content: "HUAWEI WAS MEDIA"},
						{property: 'og:type', name: 'og:type', content: "website"},
					]}
				>
					<link rel="icon" type="image/ico" href={icon}/>
					<link rel="icon" type="image/png" sizes="32x32" href={icon16}/>
					<link rel="icon" type="image/png" sizes="32x32" href={icon32}/>
					<link rel="apple-touch-icon" href={iconApple}/>
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

				<Player/>

				<BannerSection/>
				<SongSection1/>
				<Banner image={bannerImage1} text={data.banner1}/>
				<SongSection2/>
				<Banner image={bannerImage2} text={data.banner2}/>
				<SongSection3/>
				<Banner image={bannerImage3} text={data.banner3}/>
				<SongSection4/>
				<SongSection5/>
				<Banner image={bannerImage4} text={data.banner4}/>
				<SongSection6/>
				<Footer/>
			</PlayerDataContext.Provider>
		</I18nContext.Provider>
	);
};

export default Layout;
