import React from 'react'
import { useDrop } from 'react-dnd'
import { Card, Icon } from 'semantic-ui-react'

const style: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  right: 0

}

const Trash: React.FC = () => {
  const [{ isActive }, drop] = useDrop({
    accept: 'box',
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  })
  console.log(isActive)
  return (
    <div ref={drop} style={style}>
      <Card>
        <Card.Content textAlign='center' header={isActive ? 'Release to drop' : 'Drag item here to delete'} />
        <Card.Content textAlign='center'>
          <Icon name='trash' size='huge'/>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Trash;
