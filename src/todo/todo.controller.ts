import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  // Route to get all todos
  @Get('getalltodos')
  getAllTodos() {
    return this.todoService.getTodos();
  }

  // Route to get a specific todo by ID
  @Get('gettodo/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Post('createtodo')
  createTodo(@Body() data: any) {
    return this.todoService.createTodo(data);
  }

  // Route to update an existing todo by ID
  @Patch('updatetodo/:id')
  updateTodo(@Param('id') id: string, @Body() data: any) {
    return this.todoService.updateTodo(id, data);
  }

  // Route to delete a todo by ID
  @Delete('deletetodo/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
