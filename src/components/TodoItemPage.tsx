import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TodoType } from '../types/types';

type TodoItemPageParams = {
    id: string;
}

const TodoItemPage:FC = () => {
    const [todo, setTodo] = useState<TodoType>();
    const params = useParams<TodoItemPageParams>();
    const navigate = useNavigate();

    useEffect (() =>{
        fetchTodos()
      }, [])

      async function fetchTodos() {
        try {
          const response = await axios.get<TodoType>('https://jsonplaceholder.typicode.com/todos/' + params.id)
          setTodo(response.data)
        } catch(e) {
          alert(e)
        }
      }

  return (
    <div>
        <button onClick={()=> {navigate('/todos')}}  >Назад</button>
        <h1>Задача № {todo?.id}</h1>
        <div>{todo?.title}</div>
    </div>
  )
}

export default TodoItemPage