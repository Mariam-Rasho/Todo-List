import todoList from "./todoList.js"
import todoAdd from "./todoAdd.js"
import todoLoad from "./todoLoad.js"
export default {
    components: {
        todoList,
        todoAdd,
        todoLoad
    },
    template:
        /*html*/
        `
        <div>
            <todo-add @add="addNewTodo"></todo-add>
            <todo-list class="inProgress" title="In Progress" :todoArray="filteredArray.inProgress"></todo-list>
            <todo-list class="done" title="Done" :todoArray="filteredArray.done"></todo-list>
            <todo-load></todo-load>
        </div>
    `,
    data() {
        return {
            todos: [
                { id: 1, title: "study vue js from docs", isCompleted: true, type: "course" },
                { id: 2, title: "read the js tutorial", isCompleted: false, type: "course" },
                { id: 3, title: "do the homework", isCompleted: true, type: "design" },
                { id: 2, title: "solve the vue tutorial", isCompleted: false, type: "homework" },
            ],

        }
    },
    computed: {
        filteredArray() {
            return {
                done: this.todos.filter((a) => a.isCompleted),
                inProgress: this.todos.filter((a) => !a.isCompleted),
            }

        }
    },
    methods: {
        addNewTodo(newTodo, newType) {
            // if (newTodo == "" || newType == "")
            //     return
            this.todos.push({ id: this.todos.length++, title: newTodo, isCompleted: false, type: newType })
        },

    },

}