import { connectToDB } from "@utils/database";
import Todo from "@models/todo";

export const POST = async (req) => {
  const { id, complete, createdAt, updatedAt } = await req.json();

  try {
    await connectToDB();
    const newTodo = new Todo({ id, complete, createdAt, updatedAt });
    await newTodo.save();
    return new Response(JSON.stringify(newTodo), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
