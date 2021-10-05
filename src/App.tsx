import './App.css';
import React from 'react';
import { Layout} from 'antd';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Crop from './components/crop';
import Displayimage from './components/displayimage';

const {  Content} = Layout;
function App(): JSX.Element {
  return (
		<div className='App'>
			<div className='cropContainer'>
				<Switch>
					<Layout>
						<Navbar />
						<Route path='/' exact={true} component={Crop} />
						<Route path='/croppedImage' component={Displayimage} />
					</Layout>
				</Switch>
			</div>
		</div>
  );
}

export default App;
