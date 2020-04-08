import React, { FC } from "react";
import { Grid, Menu, MenuItemProps } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from "react-router-dom";

const Navigation: FC<RouteComponentProps> = (props) => {
  const { history, location: { pathname } } = props;
  const handleItemClick = 
  (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    {name}: MenuItemProps) => {
    history.push(`/${name}`)
  }
		return (
      <Grid.Column width={3}>
				<Menu fluid pointing vertical style={{height: '100%'}}>
          <Menu.Item
            name='lists'
            active={pathname.includes('lists')}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='bio'
            active={pathname.includes('bio')}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='pics'
            active={pathname.includes('pics')}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='companies'
            active={pathname.includes('companies')}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='links'
            active={pathname.includes('links')}
            onClick={handleItemClick}
          />
        </Menu>
      </Grid.Column>
    );
};

export default withRouter(Navigation);

