import { ToDo } from "./todo.interface";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  toDos?: ToDo[];
  createdAt?: Date;
  updatedAt?: Date;
}
