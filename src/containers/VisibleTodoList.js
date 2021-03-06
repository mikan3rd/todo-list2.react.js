import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, deleteTodo, fetchTodos } from '../actions'

const getFilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( todo => todo.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( todo => !todo.completed )
    default:
      return
  }
}

const mapStateToProps = state => {
  console.log(state.todos.toJS())
  return {
    todos: getFilter(state.todos.todoList, state.filter),
    hasError: state.fetchError,
    isLoading: state.loadTodos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    fetchData: url => dispatch(fetchTodos(url))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
