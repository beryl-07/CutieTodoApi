import { Task } from './tasks.interface';
import { User } from './users.interface';


export interface ToDo {
  id: string;
  day: Date;
  toDoId: string;
  userId: string;
  tasks: Task[];
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
