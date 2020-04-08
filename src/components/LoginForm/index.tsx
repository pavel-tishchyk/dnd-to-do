import React, { FC } from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { Segment, Button, Form } from 'semantic-ui-react' 
//@ts-ignore
import { LabelInputField } from 'react-semantic-redux-form';

const LoginForm: FC<InjectedFormProps> = (props) => {
		return (
      <Form size="large">
				<Segment stacked>
					<Form.Input
						fluid
						icon="user"
						iconPosition="left"
						placeholder="E-mail address"
					/>
					<Form.Input
						fluid
						icon="lock"
						iconPosition="left"
						placeholder="Password"
						type="password"
					/>
					<Button color="teal" fluid size="large">
						Login
					</Button>
				</Segment>
			</Form>
    );
};

export default reduxForm<{}, {}>({form: 'login'})(LoginForm)
