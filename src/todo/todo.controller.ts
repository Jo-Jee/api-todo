import { Body, Controller, Get, Post } from '@nestjs/common'
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() todoData) {
    return this.todoService.create(todoData)
  }

  @Get()
  getTodo() {
    return this.todoService.getAll()
  }
}
