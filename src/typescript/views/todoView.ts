import Todo from '../models/todoModel';
import TodoTemplate from '../templates/todoTemplate';

class TodoView {
    todoListEl: HTMLElement;
    btnSearchEl: HTMLElement;
    inputSearchEl: HTMLInputElement;

    /**
     * Constructor of TodoView object
     */

    constructor() {
        this.todoListEl = document.querySelector('.todo-list')!;
        this.btnSearchEl = document.querySelector('.btn-search')!;
        this.inputSearchEl = document.querySelector('.input-search')!;
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

    addEventSearch = (): void => {
        this.btnSearchEl?.addEventListener('click', async (e: MouseEvent) => {
            e.preventDefault();

            const value: string = this.inputSearchEl.value;

            const nameTodos: NodeList = document.querySelectorAll('.todo-info-name');

            nameTodos.forEach((nameTodo) => {
                if (nameTodo.textContent?.toLocaleLowerCase().includes(value)) {
                    (nameTodo.parentNode?.parentNode as HTMLElement).style.display = 'flex';
                } else {
                    (nameTodo.parentNode?.parentNode as HTMLElement).style.display = 'none';
                }
            });
        });
    };
}

export default TodoView;
