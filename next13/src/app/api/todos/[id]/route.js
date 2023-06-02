import { connectToDB } from "@utils/database";
import Todo from "@models/todo";
//PATCH
export const PATCH = async (req, { params }) => {
  const { id, complete } = await req.json();
  try {
    await connectToDB();
    const existingTodo = await Todo.findById(params.id);

    if (!existingTodo) return new Response("Todo not found", { status: 404 });

    existingTodo.complete = complete;

    await existingTodo.save();

    return new Response(JSON.stringify(existingTodo), { status: 200 });
  } catch (err) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};
