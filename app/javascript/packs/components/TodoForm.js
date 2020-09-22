import React, { useState } from 'react';

const TodoForm = (props) => {
  const [data, setData] = useState('');
  handleChange = (event) => {
    setData(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/v1/todo_items', {
        todo_item: {
          title: data,
          complete: false
        }
      })
      .then((response) => {
        const todoItem = response.data;
        this.props.createTodoItem(todoItem);
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
      </div>
    </form>
  );
};

export default TodoForm;
