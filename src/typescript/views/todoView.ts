import Todo from '../models/todoModel';
import TodoTemplate from '../templates/todoTemplate';

class TodoView {
    todoListEl: HTMLElement;

    /**
     * Constructor of TodoView object
     */

    constructor() {
        this.todoListEl = document.querySelector('.todo-list')!;
    }

    //----- RENDERING -----//

    /**
     * Display the todo list.
     * @param {Todo[]} transactions
     */
    renderTodoList = (todos: Todo[]): void => {
        todos.forEach((todo) => {
            this.renderTodo(todo);
        });
    };

    renderTodo = (todo: Todo): void => {
        const todoTemplate = TodoTemplate.createTodo(todo);

        this.todoListEl.innerHTML += todoTemplate;
    };
}

export default TodoView;
