"use server";
export async function toggleTodo(id: string, complete: boolean) {
  try {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        complete: complete,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}
