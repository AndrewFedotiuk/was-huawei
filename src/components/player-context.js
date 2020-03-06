
class PlayerModel {
	constructor() {
		this.activeSongId = null;
	}
	changeId(id){
		this.activeSongId = id;
	}
}

export default new PlayerModel
