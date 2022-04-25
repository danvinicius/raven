<template>
  <div class="todo">
      <h3 style="text-decoration: underline;">Minhas tarefas</h3>
      <ol>
          <li v-for="(task, index) in this.$store.state.tasks" :key="index">
              {{task}}
          </li>
      </ol>
      <input type="text" id="task" v-model="task" required autofocus>
      <button class="btn" @click.prevent="addTask">Add task</button>
  </div>
</template>

<script scoped>
export default {
    name: "ToDo",
    data(){
        return {
            task: ""
        }
    }, 
    methods: {
    addTask(){
        if (this.task.trim() != "") {
                document.getElementById("task").focus()
                this.$store.commit("UPDATE_TASKS", this.task)
                this.task = ""
            }
        }
    }
}
</script>

<style scoped>
.todo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    background: #3f3697;
    padding: 30px 20px;
    border-radius: 20px;
}

.todo input {
    padding: 10px;
}
</style>