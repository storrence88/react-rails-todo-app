import React, { useState, useEffect } from 'react';
import TodoItems from './TodoItems';
import TodoItem from './TodoItem';
import axios from 'axios';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState({ todoItems: [] });
  useEffect(() => {
    axios
      .get('/api/v1/todo_items')
      .then((response) => {
        const getTodoItems = response.data;
        setTodoItems({ todoItems: getTodoItems });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createTodoItem = (todoItem) => {
    todoItems.todoItems.push(todoItem);
    setTodoItems({ todoItems: todoItems.todoItems });
  };

  return (
    <React.Fragment>
      <TodoForm createTodoItem={createTodoItem} />
      <TodoItems>
        {todoItems?.todoItems?.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </TodoItems>
    </React.Fragment>
  );
};

export default TodoApp;
