import {combineReducers} from 'redux';
import inputFileReducer from './inputReducer';
import aspectRatioReducers from './acpectRatioReducers';
import cropDataReducer from './cropDataReducers';
import cloudinaryUrlReducers from './cloudinaryUrlReducers';

export const combinedReducers = combineReducers({
	inputFileReducer: inputFileReducer,
	aspectRatioReducers: aspectRatioReducers,
	cropDataReducer: cropDataReducer,
	cloudinaryUrlReducers: cloudinaryUrlReducers,
});
export type RootState = ReturnType<typeof combinedReducers>;
