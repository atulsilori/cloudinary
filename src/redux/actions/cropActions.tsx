const cropActions = (data: Idata): ICropdata => {
	return {
		type: 'cropdata',
		value: data,
	};
};

export default cropActions;
