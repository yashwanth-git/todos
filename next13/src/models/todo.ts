import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
