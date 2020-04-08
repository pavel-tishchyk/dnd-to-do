import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { State } from "../../store";

const Loader: FC<ReduxProps> = (props) => {
	const { isLoading } = props;

	return isLoading !== -1 ?
		<div>
			Loader
		</div> : null
};

const mapStateToProps = (state: State) => {
	const isLoading = Object.values(state).findIndex((reducer: any) => reducer.isLoading === true);
	return {
		isLoading
	}
};

const connector = connect(mapStateToProps, null)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(Loader)

