export default {
    template: /*html*/ `
<form class="container row pt-3 mx-auto d-flex" @:submit.prevent="addNewTodo">
            <input  type="text" v-model="newTodo" class="focus col-xl-2 col-xs-1 col-md-3  rounded  fs-5 pl-2 shadow-sm" placeholder="Add new todo...">
            <input  type="text" v-model="newType" class="focus col-xl-1 col-xs-1 col-md-2  rounded  fs-5 pl-2 shadow-sm mx-2" placeholder="type">
            <button type="submit" class="form col-xl-1  col-xs-1 col-md-2 display-4 text-light btn-lg btn btn-dark btn-outline-secondary fw-bold" >Add...</button>
        </form>
`,
    data() {
        return {
            newTodo: "",
            newType: "",
        }
    },
    methods: {
        addNewTodo() {
            if (this.newTodo == "" || this.newType == "")
                return
            // this.todos.push({ id: this.todos.length++, title: this.newTodo, isCompleted: false })
            this.$emit("add", this.newTodo, this.newType)
            this.newTodo = "",
                this.newType = ""
        }
    },
}