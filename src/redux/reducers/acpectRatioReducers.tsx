const aspectRatioReducers = (state = 16 / 9, action: IAspect): number => {
	switch (action.type) {
		case '16:9':
			return action.value;
		case '1:1':
			return action.value;
		case '4:3':
			return action.value;
		case '16:10':
			return action.value;
		default:
			return state;
	}
};

export default aspectRatioReducers;
