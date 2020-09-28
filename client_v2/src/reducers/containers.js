const containers = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CONTAINER':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'DELETE_CONTAINER':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default containers
  