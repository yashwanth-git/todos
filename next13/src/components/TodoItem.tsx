type TodoItemProps = {
    id: string,
    title: string,
    complete: Boolean
}
const TodoItem = ({id, title, complete}: TodoItemProps) => {
  return (
    <li className="todo-item">
        <input id={id} type="checkbox" className="todo-check"/>
        <label htmlFor={id} className="todo-label">{title}</label>
    </li>
  )
}

export default TodoItem