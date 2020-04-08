import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux'; 
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { Task } from "../../types";
import { Card, Progress } from "semantic-ui-react";
import { editTask } from "../../actions/tasks";

const style: React.CSSProperties = {
  // margin: '.875em .5em',
  cursor: 'grab',
  borderTop: '.5em solid black'
}

export interface SourceBoxProps {

}

type Props = Task & SourceBoxProps & ReduxProps

const TaskCard: FC<Props> = (props) => {
  const { editTask, ...task } = props;
  const { id, title, body, priority } = task;

  const [{ opacity }, drag] = useDrag({
    item: { id, type: 'box', priority },
    begin: (monitor: DragSourceMonitor) => {
      console.log(monitor.getInitialClientOffset())
      console.log(monitor.getInitialSourceClientOffset())
      console.log(monitor.getDifferenceFromInitialOffset())

    },
    end: (item: Task | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        if(dropResult.type === 'priority') {
          editTask({
            ...task,
            priority: dropResult.priority
          })
        }
        
      }

    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    }),
  })

  return (
    <div className='ui fluid card' id={`task-${priority}-${id}`} ref={drag} style={{ ...style, opacity }}>
      <Card.Content header={title} />
      {/* <Card.Meta>{date}</Card.Meta> */}
      <Card.Content description={body} />
      <Card.Content extra>
      </Card.Content>
    </div>
  )
}

const mapDispatchToProps = {
  editTask
}

const connector = connect(null, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default connector(TaskCard);
