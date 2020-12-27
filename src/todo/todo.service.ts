import { Injectable } from '@nestjs/common'

@Injectable()
export class TodoService {
  private todoArray = []

  create(todoData) {
    const id = this.todoArray.length + 1
    this.todoArray.push({
      id: id,
      ...todoData,
    })
    return {
      id: id,
    }
  }

  getAll() {
    return this.todoArray
  }
}
