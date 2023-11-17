import { ToDo } from "./todo.interface";
import { User } from "./users.interface";

export interface Task {
  id?: string;
  description: string;
  isCompleted: boolean;
  toDo: ToDo;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
