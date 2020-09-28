import React, { useState } from 'react';
import AxiosHeaders from './AxiosHeaders';
import axios from 'axios';

const TodoForm = (props) => {
  const [data, setData] = useState('');
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AxiosHeaders();
    axios
      .post('/api/v1/todo_items', {
        todo_item: {
          title: data,
          complete: false
        }
      })
      .then((response) => {
        const todoItem = response.data;
        props.createTodoItem(todoItem);
      })
      .catch((error) => {
        console.log(error);
      });
    event.target.reset();
  };

  return (
    <form className='my-3' onSubmit={handleSubmit}>
      <div className='form-row'>
        <div className='form-group col-md-8'>
          <input
            onChange={handleChange}
            className='form-control'
            type='text'
            name='title'
            id='title'
            required
            placeholder='Enter To Do Title'
          />
        </div>
        <div className='form-group col-md-4'>
          <button className='btn btn-outline-success btn-block'>Add To Do Item</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
