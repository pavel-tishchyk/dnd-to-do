import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Lists from '../Lists';
import Tasks from '../Tasks';

const Routes = () => (
	<Grid.Column width={16} style={{position: 'relative'}} >		
		<Switch>
			<Route exact path={"/login"} component={Login}/>
			<Route path={"/lists"}>
				<Route exact path={"/lists"} component={Lists}/>
				<Route path={"/lists/:listId"} component={Tasks}/>
				{/* <Route path={"/dashboard/test/qwe"} component={() => <div>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</div>}/> */}
				{/* <Route path={"/dashboard/qwe"} component={() => <div>1111111111111111111111111111111111</div>}/> */} 
			</Route>
		</Switch>
	</Grid.Column>
);

export default Routes;
