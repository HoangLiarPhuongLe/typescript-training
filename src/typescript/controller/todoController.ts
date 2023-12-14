import Todo from '../models/todoModel';
import Service from '../services/service';
import View from '../views/view';

class TodoController {
    service: Service;
    view: View;

    constructor(service: Service, view: View) {
        this.service = service;
        this.view = view;
    }

    init = (): void => {
        this.initTodos();
    };

    //----- TODO CONTROLLER -----//
    async initTodos(): Promise<void> {
        await this.service.todoService.initTodoList();
        this.loadListTodos();
    }

    /**
     * Load and display the transaction list.
     */
    async loadListTodos(): Promise<void> {
        const todos: Todo[] = this.service.todoService.getTodoList();
        await this.view.todoView.renderTodoList(todos);
    }
}

export default TodoController;
