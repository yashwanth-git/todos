import { connectToDB } from "@utils/database";
import Todo from "@models/todo";

export const GET = async (req) => {
  try {
    await connectToDB();
    const todos = Todo.find({}).exec();
    console.log(todos);
  } catch (err) {
    console.log("Failed to fetch the todos", { status: 500 });
  }
};
