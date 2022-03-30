<template>
  <div id="container">
      <input type="text" id="task" v-model="task" required autofocus>
      <button @click.prevent="addTask">Add task</button>
      <ul>
          <li v-for="(task, index) in tasks" :key="index">
              {{task}}
          </li>
      </ul>
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

<style>

</style>