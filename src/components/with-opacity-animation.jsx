import React, {useEffect, useState} from "react";
import {useSpring, animated, useTransition} from 'react-spring'
import {InView} from 'react-intersection-observer'

const WithOpacityAnimation = ({children}) => {
	const [toggle, set] = useState(false);

	const props = useSpring({opacity: toggle ? 1 : 0, delay: 1000});

	return (
		<InView onChange={(inView) => set(inView)}>
			<animated.div style={props}>
				{children}
			</animated.div>
		</InView>
	)
};

export default WithOpacityAnimation
