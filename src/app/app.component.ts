import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Todo } from './todo'

const STORAGE_KEY = 'todos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  todos: Todo[]

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.todos = this.restore()
    this.cdRef.detectChanges()
  }

  create(input: HTMLInputElement): void {
    this.todos.push({
      title: input.value,
      completed: false,
    })
    input.value = ''
    this.save()
    this.cdRef.detectChanges()
  }

  toggle(todo: Todo): void {
    todo.completed = !todo.completed
    this.save()
    this.cdRef.detectChanges()
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    this.save()
    this.cdRef.detectChanges()
  }

  private restore(): Todo[] {
    const todosJson = localStorage.getItem(STORAGE_KEY)
    if (todosJson) {
      return JSON.parse(todosJson)
    }
    return []
  }

  private save(): void {
    const todosJson = JSON.stringify(this.todos)
    localStorage.setItem(STORAGE_KEY, todosJson)
  }
}
