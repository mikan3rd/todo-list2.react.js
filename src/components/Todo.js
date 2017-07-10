import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    const link = this.props.completed? '元に戻す' : '完了！';
    const className = this.props.completed? 'done' : 'undone';
    const todoDelete = this.props.completed? '削除' : '';
    console.log(this.props);
    return(
      <li className={className}>
        <span>{this.props.id + 1}</span>
        <span>：{this.props.text}　　</span>
        <a href="#" onClick={() => this.props.toggleTodo()}>{link}</a>　　
        <a href="#" onClick={() => this.props.deleteTodo()}>{todoDelete}</a><br/>
      </li>
    );
  }

}

export default Todo
