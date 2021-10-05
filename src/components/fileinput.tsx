import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import inputAction from '../redux/actions/inputActions';
import cloudinaryUrlActions from '../redux/actions/cloudinaryUrlActions';
import axios from 'axios';

const getCloudinaryUri = async (endpoint: string, data:any, dispatch:any)=>{
  const res = await axios.post(endpoint, data);
  dispatch(cloudinaryUrlActions(res.data.url));
};

const FileInput = (): JSX.Element => {
	const dispatch = useDispatch();
	const handleFileInputChange = (e: any) => {
		if (e.target.files[0] && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
        if (typeof reader.result === 'string'){
            //console.log(reader.result);
            dispatch(inputAction(reader.result));
        }
			});
			reader.readAsDataURL(e.target.files[0]);
      const data = new FormData();
      data.append('file', e.target.files[0]);
      data.append('upload_preset', 'cropTool');
      data.append('cloud_name', 'atul-silori');
      data.append('folder', 'cropdata');

      getCloudinaryUri('https://api.cloudinary.com/v1_1/atul-silori/image/upload', data, dispatch);
		}
	};
	return (
		<div>
			<input type='file' accept='image/*' onChange={handleFileInputChange} />
		</div>
	);
};

export default FileInput;
