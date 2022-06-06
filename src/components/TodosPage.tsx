import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoType } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: TodoType) =>
        <TodoItem
          onClick={(todo) => {navigate('/todos/' + todo.id)}}
          todo={todo}
          key={todo.id}
        />}
    />
  )
}

export default TodosPage;