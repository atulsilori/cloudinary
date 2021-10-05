import React from 'react';
import { Layout, Menu} from 'antd';
import { ExpandOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import aspectRatioAction from '../redux/actions/aspectRatioActions';
import cropActions from '../redux/actions/cropActions';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Rightsidepane = (props:any): JSX.Element => {
  const dispatch = useDispatch();
	return (
		<Sider width={200} className='site-layout-background'>
			<Menu
				mode='inline'
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
			>
				<SubMenu
					key='sub1'
					icon={<ExpandOutlined />}
					title='Aspect Ratio'
					style={{ color: 'black', fontWeight: 'bold' }}
				>
					<Menu.Item key='1' onClick={() => dispatch(aspectRatioAction('16:9'))}>
						16:9
					</Menu.Item>
					<Menu.Item key='2' onClick={() => dispatch(aspectRatioAction('1:1'))}>
						1:1
					</Menu.Item>
					<Menu.Item key='3' onClick={() => dispatch(aspectRatioAction('4:3'))}>
						4:3
					</Menu.Item>
					<Menu.Item key='4' onClick={() => dispatch(aspectRatioAction('16:10'))}>
						16:10
					</Menu.Item>
				</SubMenu>
				<SubMenu key='sub2' title='Actions' style={{ color: 'black', fontWeight: 'bold' }}>
					<Menu.Item key='5' onClick={() => {dispatch(cropActions(props.cropdata)); }}>
						Crop
					</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};

export default Rightsidepane;
