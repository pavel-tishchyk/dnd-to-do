import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { useDrop } from 'react-dnd';
import { Card, Segment } from 'semantic-ui-react';
import TaskCard from "./TaskCard";
import { TaskGroup as TaskGroupType } from "../../types";

const TaskGroup: FC<TaskGroupType> = (group) => {
  const { color, name, priority, tasks } = group;

  const [{ isActive }, drop] = useDrop({
    accept: 'box',
    drop: (item: any, monitor) => ({
      type: 'priority',
      priority 
    }),
    hover: (item: any, monitor) => {
      
    },
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  })

  const taskElements = tasks.map(task => <TaskCard key={task.id} {...task}/>)
    
  return (
    <div className='ui fluid card' ref={drop}>
      <Card.Content header={name} style={{maxHeight: '47.16px'}}/>
      <Card.Content>
          {taskElements}
      </Card.Content>
    </div>
  );
};

const connector = connect(null, null)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(TaskGroup);

