import React, { FC } from 'react'
import { TodoType } from '../types/types'

type PropType = {
  todo: TodoType;
  onClick: (todo: TodoType) => void;
}

const TodoItem: FC<PropType> = ({todo, onClick}) => {
  return (
    <div onClick={()=> {onClick(todo)}}>
      <input  type='checkbox' checked={todo.completed} />
      {todo.id}. {todo.title}
      </div>
  )
}

export default TodoItem