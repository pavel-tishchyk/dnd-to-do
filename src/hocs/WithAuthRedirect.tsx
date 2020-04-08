import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from "react-router-dom";
import { State } from '../store';

const withAuthRedirect: FC<FC> = (Component): any => {
  const RedirectComponent: FC<ReduxProps> = (props) => {
    const { isAuth } = props;
      return (
          !isAuth ? <Redirect to='/login'/>
          : <Component {...props} />
      );
  }

  const mapStateToProps = (state: State) => {
      return {
        
      }
  }

  const mapDispatchToProps =  {
      
  }

  const connector = connect(mapStateToProps, null)

  type ReduxProps = ConnectedProps<typeof connector> 

  return connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);
}

export default withAuthRedirect;