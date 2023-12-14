import TodoController from './controller/todoController';
import Service from './services/service';
import View from './views/view';

document.addEventListener('DOMContentLoaded', () => {
    const service: Service = new Service();
    const view: View = new View();
    const todoController: TodoController = new TodoController(service, view);
    todoController.init();
});
