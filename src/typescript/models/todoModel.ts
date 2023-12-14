import Category from './categoryModel';
class Todo {
    name: string;
    description: string;
    status: boolean;
    categoryId: string;
    category: Category;

    /**
     * Constructor of Todo object
     * @param {Object} todo
     */
    constructor(name: string, description: string, status: boolean, categoryId: string, category: Category) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.categoryId = categoryId;
        this.category = category;
    }
}

export default Todo;
