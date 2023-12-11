import { API_BASE_URL } from '../constants/urls';
import Todo from '../models/todoModel';
import ApiService from './apiService';

class TodoService extends ApiService<Todo> {
    private todoList: Todo[];

    constructor() {
        super(API_BASE_URL, '/todos');
        this.todoList = [];
    }

    /**
     * Initializing the Todos object
     */
    initTodoList = async (): Promise<void> => {
        const relationship = '?_expand=category';
        const data: Todo[] = await this.get(relationship);
        this.todoList = this.parseData(data);
    };

    parseData = (data: Todo[]): Todo[] => {
        return data.map((item) => new Todo(item.name, item.description, item.categoryId, item.category));
    };

    getTodoList(): Todo[] {
        return this.todoList;
    }
}

export default TodoService;
