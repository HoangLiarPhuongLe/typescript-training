import { API_BASE_URL } from '../constants/urls';
import Todo from '../models/todoModel';
import ApiService from './apiService';

class TodoService {
    private api: ApiService;
    private todoList: Todo[];

    constructor() {
        this.api = new ApiService(API_BASE_URL, '/todos');
        this.todoList = [];
    }

    /**
     * Initializing the Todos object
     */
    initTodoList = async (): Promise<void> => {
        const data = await this.api.get();
        this.todoList = this.parseData(data);
        console.log(this.todoList);
    };

    parseData = (data): Todo[] => {
        return data.map((item) => new Todo(item.name, item.description, item.categoryId, item.category));
    };

    getTodoList(): Todo[] {
        return this.todoList;
    }
}

export default TodoService;
