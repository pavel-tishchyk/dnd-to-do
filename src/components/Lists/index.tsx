import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { State } from "../../store";
import ListCard from "./ListCard";
import Trash from "../Trash";

const Lists: FC<ReduxProps> = (props) => {
  const { listsData } = props;
  const listsElements = listsData.map(list => <ListCard key={list.id} {...list}/>)
		return (
      <div>
        <Card.Group centered itemsPerRow={4}>
          {listsElements}
        </Card.Group>
        <Trash/>
      </div>
    );
};

const mapStateToProps = (state: State) => ({
  listsData: state.lists.listsData
})

const mapDispatchToProps = {

}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(Lists);

