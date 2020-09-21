import React from 'react';

const TodoItems = (props) => {
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
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TodoItems;
