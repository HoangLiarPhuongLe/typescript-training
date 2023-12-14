import Todo from '../models/todoModel';

class TodoTemplate {
    /**
     * Constructor of TemplateTodo object
     */
    constructor() {}

    /**
     * HTML TemplateTodo for render an Todo object
     * @param {object} todo
     */

    static createTodo = (todo: Todo): string => {
        return `
            <li class="todo-detail">
                <div class="todo-info">
                    <p class="todo-info-text todo-info-name">${todo.name}</p>
                    <p class="todo-info-text">Description: ${todo.description}</p>
                    <p class="todo-info-text">Category: ${todo.category.name}</p>
                </div>
                <input type="checkbox" ${todo.status ? 'checked' : ''} />
            </li>
        `;
    };
}

export default TodoTemplate;
