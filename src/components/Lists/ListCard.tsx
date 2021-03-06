import React, { FC } from "react";
import { connect, ConnectedProps } from 'react-redux'; 
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { List } from "../../types";
import { Card, Icon, Label, Progress, SemanticCOLORS, Popup } from "semantic-ui-react";
import { deleteList } from '../../actions/lists';
import { compose } from "recompose";
import { withRouter, RouteComponentProps } from "react-router-dom";

const style: React.CSSProperties = {
  cursor: 'grab',
}

const popupStyles: React.CSSProperties = {
  borderRadius: 0,
  opacity: 0.65,
  padding: '1em'
}

const colors: Array<SemanticCOLORS> = [
  "red", "orange", 
  "yellow", "olive", 
  "green", "teal", 
  "blue", "violet", 
  "purple", "pink", 
  "brown", "grey", "black"
]

const getRandomColor = (): SemanticCOLORS => {
  return colors[Math.floor(Math.random()*colors.length)]
}

type Props = List & ReduxProps & RouteComponentProps

const ListCard: FC<Props> = (props) => {
  const { id, title, description, date, tasksCount, completedCount, ongoingCount, deleteList, history } = props;

  const color = getRandomColor();
  console.log(new Date(date).toLocaleDateString())
  const [{ opacity }, drag] = useDrag({
    item: { id, type: 'box' },
    end: (item: { id: number, type: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        deleteList(item.id)
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  const onClick = () => {
    history.push(`lists/${id}`)
  }

  return (
    <div className='ui fluid card' ref={drag} style={{ ...style, opacity }} onClick={onClick}>
      <Card.Content header={title} />
      <Card.Meta>{}</Card.Meta>
      <Card.Content description={description} />
      <Card.Content >
        <Progress percent={completedCount/(tasksCount/100)} size='tiny' color={color}/>
      </Card.Content>
      <Popup
        trigger={
          <Label color={color} floating>
            {tasksCount}
          </Label>
        }
        content={
          <Label.Group>
            <Label>
              <Icon name='check'/>
              {`Completed ${completedCount}`}
            </Label>
            <Label>
              <Icon name='sync'/>
              {`Ongoing ${ongoingCount}`}
            </Label>
          </Label.Group>
        }
        style={popupStyles}
        inverted
        position='bottom right'
      />
    </div>
  )
}

const mapDispatchToProps = {
  deleteList
}

const connector = connect(null, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector> 

export default compose<any, any>(
  connector,
  withRouter
)(ListCard)

