import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    const { list, onDelete } = this.props;
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => onDelete(index)}>x</button>
          </li>
        ))}
      </ul>
    )
  }
}

TodoItem.propsTypes = {
  List: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
}