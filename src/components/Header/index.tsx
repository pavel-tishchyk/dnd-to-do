import React from "react";
import { Grid, Menu, Input } from 'semantic-ui-react'

const Header = () => {
		return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu pointing>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    );
};

export default Header;

