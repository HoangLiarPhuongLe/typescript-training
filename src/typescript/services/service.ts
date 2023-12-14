import TodoService from './todoService';

class Service {
    todoService: TodoService;

    constructor() {
        this.todoService = new TodoService();
    }
}

export default Service;
