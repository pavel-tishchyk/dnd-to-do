import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { State } from "../../store";
import TaskGroup from "./TaskGroup";
import Trash from "../Trash";
import { Task, TaskGroup as TaskGroupType } from "../../types";
import { Card } from "semantic-ui-react";
import { compose } from "recompose";
import { withRouter, RouteComponentProps } from "react-router-dom";

const getTaskGroups = (tasks: Array<Task>) => {
  return tasks.reduce((groups: Array<TaskGroupType>, task) => {
    let group = groups[task.priority];
    group.tasks.push(task)
    return groups
  }, [
    {
      name: 'Low',
      color: 'blue',
      priority: 0,
      tasks: []
    },
    {
      name: 'Medium',
      color: 'green',
      priority: 1,
      tasks: []
    },
    {
      name: 'High',
      color: 'yellow',
      priority: 2,
      tasks: []
    },
    {
      name: 'Critical',
      color: 'red',
      priority: 3,
      tasks: []
    }
  ])
}

const Tasks: FC<ReduxProps & RouteComponentProps<any>> = (props) => {
  const { tasksData, match: { params } } = props;

  const currentTasks = tasksData.filter(task => task.listId === +params.listId);

  const groupsElements = getTaskGroups(currentTasks).reverse().map((group: TaskGroupType) => 
    <TaskGroup key={`${group.priority}`} {...group}/>
  )

  return (
    <div>
      <Card.Group centered itemsPerRow={4}>
        {groupsElements}
      </Card.Group>
      <Trash/>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  tasksData: state.tasks.tasksData
})

const mapDispatchToProps = {

}

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default compose<any, any>(
  connector,
  withRouter
)(Tasks);

