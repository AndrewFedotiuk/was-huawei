import React, {useState} from "react";
import {useTrail, animated} from 'react-spring'
import { InView } from 'react-intersection-observer'

const WithHeaderAnimation = (items) => {
	const [toggle, set] = useState(false);
	const config = { mass: 15, tension: 2700, friction: 200 };
	const trail = useTrail(items.length, {
		config,
		delay: 400,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 100,
		from: {opacity: 0, x: 500},
	});

	return (
		<InView as="div" onChange={(inView) => set(inView)}>
			{
				trail.map(({x, height, ...rest}, index) => (
					<animated.h2
						key={items[index]}
						className="trails-text"
						style={{...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}>
						<animated.div style={{height}}>{items[index]}</animated.div>
					</animated.h2>
				))
			}
		</InView>
	)
};

export default WithHeaderAnimation
