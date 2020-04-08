import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Grid } from 'semantic-ui-react';
import Navigation from '../../components/Navigation';
import Routes from '../../components/Routes';

const App = () => {
	return (    
		<BrowserRouter basename={'/'}>
			<Grid container doubling style={{minHeight: '100vh'}}>
				<Grid.Row style={{minHeight: '100vh'}}>
					{/* <Navigation/> */}
					<DndProvider backend={Backend}>
						<Routes/>
					</DndProvider>
				</Grid.Row>
			</Grid>
		</BrowserRouter>
	);
}

export default App;
