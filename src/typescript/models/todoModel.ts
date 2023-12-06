import Category from './categoryModel';

class Todo {
    /**
     * Constructor of Todo object
     * @param {Object} todo
     */
    name: string;
    description: string;
    categoryId: string;
    category: Category;

    constructor(name: string, description: string, categoryId: string, category: Category) {
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;
        this.category = category;
    }
}

export default Todo;
