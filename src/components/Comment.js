import React, { PropTypes } from 'react';
import './Comment.css';

const Comment = ({ clickHandler, item, toggleHandler }) => {
  return(
    <li
      className={`Comment ${ item.type !== "customer" ? "" : item.body }` }
      id={item.id}
      onSubmit={clickHandler} 
    >
    <label>
        <input type="checkbox"  onClick={toggleHandler}/> Flag Comment
      </label>
      <h4>
        {item.author} says...
      </h4>

      { item.type !== 'customer'
        ? <form onSubmit={(val) => this.handleSubmit(val)} ><textarea defaultValue={item.body} /> <button type="submit">Update</button></form>
        : <p>{item.body}</p>
      }
    </li>
  );
}

Comment.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  toggleHandler: PropTypes.func.isRequired,
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, // { customer | tech }
  }).isRequired,
};

export default Comment;
