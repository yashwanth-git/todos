"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
type TodoProps = {
  _id: String,
  title: String,
  complete: Boolean,
  createdAt: Date,
  updatedAt: Date
} 
const Home = () => {
  const [todos, setTodos]  = useState<TodoProps[]>([]);
  // const createTodo = async () => {
  //   try {
  //     const response = await fetch("/api/todos/new", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: "test",
  //         title: "test",
  //         complete: 1,
  //         createdAt: Date.now(),
  //         updatedAt: Date.now(),
  //       }),
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("api/todos");

      const data = await response.json();
      console.log(data);
      setTodos(data);
    };
    fetchTodos();
  }, []);
  console.log(todos);
  return (
    <>
      <header className="header">
        <h1 className="logo-text">Todos</h1>
        <Link className="new-cta" href="/new">
          New
        </Link>
      </header>
      <ul className="">
        {todos.map(todo => (
          <p>{todo._id}</p>
        ))}
      </ul>
    </>
  );
};

export default Home;
