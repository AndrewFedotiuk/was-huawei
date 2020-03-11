import React, {useContext} from "react";
import {InView} from "react-intersection-observer";
import {PlayerDataContext} from "../layouts/base-layout";

const SongIndexHelper = (index) => {
	const playerData = useContext(PlayerDataContext);

	const setActiveIndex = (inView)=>{
		if(inView && !playerData.playing){
			playerData.setActiveSong({...playerData.playlist[index-1], index: index-1});
		}
	};

	return (
		<InView as="span" onChange={(inView) => setActiveIndex(inView)} className='song-index' id={`songIndex${index}`}>
			{index}
		</InView>
	)
};

export default SongIndexHelper
