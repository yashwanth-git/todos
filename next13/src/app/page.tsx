"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("api/todos");
      console.log(response);
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
        {/* {todos.map(todo => (
          <p>todo</p>
        ))} */}
      </ul>
    </>
  );
};

export default Home;
