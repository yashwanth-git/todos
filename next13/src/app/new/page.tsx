import Link from "next/link";
import { redirect } from "next/navigation";
async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }
  try {
    const response = await fetch("http://localhost:3000/api/todos/new", {
      method: "POST",
      body: JSON.stringify({
        title,
        complete: false,
      }),
    });
  } catch (err) {
    console.log(err);
  }
  redirect("/");
}
const New = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo-text">New</h1>
      </header>
      <form action={createTodo} className="todo-form">
        <input type="text" name="title" className="todo-input" />
        <div className="form-ctas">
          <Link href=".." className="cta">
            Cancel
          </Link>
          <button type="submit" className="cta">
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default New;
