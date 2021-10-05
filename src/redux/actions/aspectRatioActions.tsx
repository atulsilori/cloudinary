const aspectRatioAction = (aspectRatio: string): IAspect => {
	if (aspectRatio === '16:9') {
		return {
			type: '16:9',
			value: 16 / 9,
		};
	} else if (aspectRatio === '1:1') {
		return {
			type: '1:1',
			value: 1 / 1,
		};
	} else if (aspectRatio === '4:3') {
		return {
			type: '4:3',
			value: 4 / 3,
		};
	} else if (aspectRatio === '16:10') {
		return {
			type: '16:10',
			value: 16 / 10,
		};
	}
};

export default aspectRatioAction;
