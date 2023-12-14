import { Status } from '../constants/enum';
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
     * @param {Todo[]} todos
     */
    renderTodoList = (todos: Todo[]): void => {
        this.todoListEl.innerHTML = '';
        todos.forEach((todo) => {
            this.renderTodo(todo);
        });
    };

    /**
     * Display the todo checked list.
     * @param {Todo[]} todos
     */
    renderTodoListChecked = (todos: Todo[]): void => {
        this.todoListEl.innerHTML = '';

        const todoListChecked: Todo[] = todos.filter((todo) => todo.status === true);

        this.renderTodoList(todoListChecked);
    };

    /**
     * Display the todo none checked list.
     * @param {Todo[]} todos
     */
    renderTodoListNoneChecked = (todos: Todo[]): void => {
        this.todoListEl.innerHTML = '';

        const todoListNoneChecked: Todo[] = todos.filter((todo) => todo.status === false);

        this.renderTodoList(todoListNoneChecked);
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
                if (nameTodoText.toUpperCase().includes(value.toUpperCase())) {
                    todoSearchEl.classList.add('todo-show');
                } else {
                    todoSearchEl.classList.add('todo-hidden');
                }
            });
        });
    };

    /**
     * Add event listener show list todos by status.
     */
    addEventRenderByStatus = (todoList: Todo[]): void => {
        const radioForm: HTMLFormElement = document.querySelector('.radio-button-form')!;

        radioForm.addEventListener('change', async (e) => {
            e.preventDefault();

            if (e.target instanceof HTMLInputElement) {
                const selectValue: string = e.target.value;

                switch (selectValue) {
                    case Status.All:
                        this.renderTodoList(todoList);
                        break;
                    case Status.Checked:
                        this.renderTodoListChecked(todoList);
                        break;
                    case Status.NoneChecked:
                        this.renderTodoListNoneChecked(todoList);
                        break;

                    default:
                        this.renderTodoList(todoList);
                        break;
                }
            }
        });
    };
}

export default TodoView;
