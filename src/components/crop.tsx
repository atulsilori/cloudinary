import React, { useState } from 'react';
import { Layout } from 'antd';
import Rightsidepane from '../components/rightsidepane';
import ReactImageCropper from '../components/reactImageCropper';
import FileInput from './fileinput';
const { Content } = Layout;
const Crop = ():JSX.Element=>{
  const [cropdata, setCropData] = useState({'x':0, 'y':0, 'width':0, 'height':0});
  return (
		<Layout>
			<Layout style={{ padding: '0 24px 24px' }}>
				<Rightsidepane cropdata={cropdata} />
				<Content
					className='site-layout-background'
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
				>
					<FileInput />
					<br />
					<ReactImageCropper setCropData={setCropData} />
				</Content>
			</Layout>
		</Layout>
  );
};

export default Crop;
