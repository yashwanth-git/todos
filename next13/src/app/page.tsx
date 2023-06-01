"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import TodoItem from "@components/TodoItem";
type TodoProps = {
  _id: string,
  title: string,
  complete: Boolean,
  createdAt: Date,
  updatedAt: Date
} 
const Home = () => {
  const [todos, setTodos]  = useState<TodoProps[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("api/todos");

      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <>
      <header className="header">
        <h1 className="logo-text">Todos</h1>
        <Link className="cta" href="/new">
          New
        </Link>
      </header>
      <ul className="">
        {todos.map(todo => (
          <TodoItem key={todo._id} id={todo._id} title={todo.title} complete={1>0} />
        ))}
      </ul>
    </>
  );
};

export default Home;
