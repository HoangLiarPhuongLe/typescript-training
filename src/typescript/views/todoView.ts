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

    /**
     * Render a todo in todo list.
     * @param {Todo} todo
     */
    renderTodo = (todo: Todo): void => {
        const todoTemplate = TodoTemplate.createTodo(todo);

        this.todoListEl.innerHTML += todoTemplate;
    };

    /**
     * Add event listener searching todos to the search input.
     */
    addEventSearch = (): void => {
        const inputSearchEl: HTMLInputElement = document.querySelector('.input-search')!;
        const btnSearchEl: HTMLElement = document.querySelector('.btn-search')!;

        btnSearchEl?.addEventListener('click', async (e: MouseEvent) => {
            e.preventDefault();

            const value: string = inputSearchEl.value;
            const nameTodos: NodeList = document.querySelectorAll('.todo-info-name');

            nameTodos.forEach((nameTodo) => {
                const todoSearchEl = nameTodo.parentNode?.parentNode as HTMLElement;
                const nameTodoText = nameTodo.textContent as string;

                todoSearchEl.classList.remove('todo-hidden');
                if (nameTodoText.includes(value)) {
                    todoSearchEl.classList.add('todo-show');
                } else {
                    todoSearchEl.classList.add('todo-hidden');
                }
            });
        });
    };
}

export default TodoView;
