import { Todo } from "./todo";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodosService {
  public async get(): Promise<Todo[]> {
    const allTodos = await prisma.todo.findMany()
    console.log(allTodos)
    return allTodos;
  }

  public async create(todoCreationParams: TodoCreationParams): Promise<Todo> {

    const todo = await prisma.todo.create({
      data: {
        title: todoCreationParams.title,
        description: todoCreationParams.description
      }
    })

    return todo
  }
}
