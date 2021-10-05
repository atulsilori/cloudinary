import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/combinedReducers';

const ReactImageCropper = (props: any): JSX.Element=> {
  const aspectRatio = useSelector((state: RootState) => state.aspectRatioReducers);
  const src = useSelector((state: RootState) => state.inputFileReducer);
	const [crop, setCrop] = React.useState({ aspect: aspectRatio } as Crop);
  useEffect(() => {
    setCrop({ aspect: aspectRatio } as Crop);
    //console.log(aspectRatio);
  }, [aspectRatio]);

  useEffect(() => {
    //console.log(crop);
    const cropData: Idata={'x':crop.x, 'y':crop.y, 'width':crop.width, 'height':crop.height};
    props.setCropData(cropData);
  }, [crop]);
return <ReactCrop src={src} crop={crop} onChange={(newCrop) => setCrop(newCrop)} />;
};

export default ReactImageCropper;
