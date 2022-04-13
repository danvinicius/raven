<template>
  <div class="container">
      <p style="text-decoration: underline;">Lista de tarefas</p>
      <ol>
          <li v-for="(task, index) in tasks" :key="index">
              {{task}}
          </li>
      </ol>
      <input type="text" id="task" v-model="task" required autofocus>
      <button @click.prevent="addTask">Add task</button>
  </div>
</template>

<script>
export default {
    name: "ToDo",
    data(){
        return {
            task: "",
            tasks: []
        }
    }, 
    methods: {
        addTask(){
            if (this.task.trim() != "") {
                this.tasks.push(this.task)
                this.task = ""
            }
            document.getElementById("task").focus()
        }
    },
    created(){

    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    background: #3f3697;
}
</style>