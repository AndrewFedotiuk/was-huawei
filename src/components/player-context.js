const PlayerModel = {
	activeId: 'mOlIqozu3Fg',
	activeText: 'test 1',
	playing: false,
	volume: 100,
	mute: false,
	playlist: [
		{
			id: 'mOlIqozu3Fg',
			text: 'test 1'
		},
		{
			id: 'GG5f9jvrv2c',
			text: 'test 2'
		},
		{
			id: 'ds7sikMNoCk',
			text: 'test 3'
		},
		{
			id: '_W0NRh-RhiE',
			text: 'test 4'
		},
		{
			id: '92cwKCU8Z5c',
			text: 'test 5'
		},
		{
			id: 'XrvXGdDNYd4',
			text: 'test 6'
		}
	],

	setPlaying(status) {
		this.playing = status;
	},
};

export default PlayerModel
