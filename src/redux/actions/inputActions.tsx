const inputAction = (url: string): IAction => {
	return {
		type: 'IMAGEURL',
		value: url,
	};
};
export default inputAction;
