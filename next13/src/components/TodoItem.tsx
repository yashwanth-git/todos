import { useTransition } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
  let [isPending, startTransition] = useTransition();
  return (
    <li className="todo-item">
      <input
        id={id}
        type="checkbox"
        className="todo-check"
        defaultChecked={complete}
        onChange={(e) =>
          startTransition(() => toggleTodo(id, e.target.checked))
        }
      />
      <label htmlFor={id} className="todo-label">
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
