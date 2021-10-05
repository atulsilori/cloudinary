import React from 'react';
import { Layout, Menu, Image} from 'antd';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const { Header} = Layout;
const Navbar = (): JSX.Element=>{
  return (
		<>
			<Header className='header'>
				<img src={Logo} style={{ width: '3%', marginTop: '1%', marginRight: '1%', float: 'left' }} />
				<Menu theme='dark' mode='horizontal'>
					<Menu.Item key='1' style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#001529' }}>
						<Link to="/">Image Cropper Widget</Link>
					</Menu.Item>
					<Menu.Item key='2'>
						<Link to="/croppedImage">Cropped Image</Link>
					</Menu.Item>
				</Menu>
			</Header>
		</>
  );
};

export default Navbar;
