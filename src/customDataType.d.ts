declare interface IAction {
	type: string;
	value: string;
}

declare interface IAspect {
	type: string;
	value: number;
}

declare interface Idata {
	x: number;
	y: number;
	width: number;
	height: number;
}

declare interface ICropdata {
	type: string;
	value: Idata;
}

declare module 'cloudinary-react';
