import {
    Body,
    Controller,
    Get,
    Post,
    Route,
    SuccessResponse,
  } from "tsoa";
  import { Todo } from "./todo";
  import {  TodoCreationParams, TodosService } from "./todosService";
  
  @Route("todos")
  export class UsersController extends Controller {
    @Get()
    public async getTodos(
    ): Promise<Todo[]> {
      return new TodosService().get();
    }
  
    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createTodo(
      @Body() requestBody: TodoCreationParams
    ): Promise<void> {
      this.setStatus(201); // set return status 201
      new TodosService().create(requestBody);
      return;
    }
  }