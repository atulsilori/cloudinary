import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/combinedReducers';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
const { Content } = Layout;

const Displayimage = ():JSX.Element=>{
  const cropData = useSelector((state: RootState)=>state.cropDataReducer);
  const cropImageUrl = useSelector((state: RootState) => state.cloudinaryUrlReducers);
  console.log(cropImageUrl);
  let id = '';
  let fullUrl='';
  if (cropImageUrl != '' && cropData.width!=0){
    const arr = cropImageUrl.split('/');
    id = arr[arr.length - 1];
    const cropParameters = `c_crop,h_${Math.ceil(cropData.height)},w_${Math.ceil(cropData.width)},x_${Math.ceil(cropData.x)},y_${Math.ceil(cropData.y)}`;
    arr.splice(6, 0, cropParameters);
    fullUrl = arr.join('/');
    console.log(fullUrl);
  }
  return (
		<Layout>
			<Content style={{ padding: '0 50px' }}>
				<img src={fullUrl } style={{ marginTop: '1em', marginBottom: '1em'}}/>
			</Content>
		</Layout>
  );
};

export default Displayimage;
