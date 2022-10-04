import DisplayTodo from "./DisplayTodo";



export default function Todolist({ todo = [] }) {
  return (
    <div>
      {todo.map((p, i) => (
        <DisplayTodo {...p} key={p.id} />
      ))}
    </div>
  );
}