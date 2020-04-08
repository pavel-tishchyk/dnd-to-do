import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { State } from "../../store";
import LoginForm from '../LoginForm'; 
import { login } from '../../thunks/login';
import { Grid, Header, Form, Segment, Button, Message } from "semantic-ui-react";
import Logo from '../../images/logo.png'

const style: React.CSSProperties = {
	maxWidth: '450px',
	position: 'absolute',
	width: '100%',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}

const Login: FC<ReduxProps> = (props) => {
	return (
		<div style={style}>
			<Header as="h2" color="teal" textAlign="center">
				<img src={Logo} alt="logo" className="image" />{" "}
				Login to your account
			</Header>
			<LoginForm/>
			<Message>
				New to us? <a href="#root">Sign Up</a>
			</Message>
		</div>
	);
};

const mapStateToProps = (state: State) => {
	return {
		
	};
};

const mapDispatchToProps = {
	login
};

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(Login)

