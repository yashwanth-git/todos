import { connectToDB } from "@utils/database";
import Todo from "@models/todo";

export const GET = async (req) => {
  try {
    await connectToDB();
    const todos = await Todo.find({}).exec();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (err) {
    console.log("Failed to fetch the todos", { status: 500 });
  }
};
