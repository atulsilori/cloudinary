const inputFileReducer = (state = '', actions: IAction): string => {
	switch (actions.type) {
		case 'IMAGEURL':
			return actions.value;
		default:
			return state;
	}
};

export default inputFileReducer;
