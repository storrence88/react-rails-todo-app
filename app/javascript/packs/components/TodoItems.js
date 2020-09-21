import React, { useState } from 'react';

const TodoItems = (props) => {
  const [todoItems, setTodoItems] = useState({ todoItems: [] });

  return (
    <React.Fragment>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Status</th>
              <th scope='col'>Item</th>
              <th scope='col' className='text-right'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TodoItems;
