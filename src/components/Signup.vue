<template>
  <form>
      <input type="text" placeholder="Name" v-model="name">
      <br>
      <input type="email" placeholder="E-mail" v-model="email">
      <br>
      <input type="password" placeholder="Password" v-model="password">
      <br>
      <input type="text" placeholder="City" v-model="city">
      <br>
      <button @click.prevent="signup">Sign Up</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "Signup",
    data(){
        return {
            name: "",
            email: "",
            password: "",
            city: ""
        }
    },
    methods: {
        signup(){
            axios.post("http://localhost/user", {
                name: this.name,
                email: this.email,
                password: this.password,
                city: this.city
            }).then((response)=> {
                this.$store.commit("UPDATE_LOGIN", true)
                this.$store.commit("UPDATE_USER", response.data.user)
                this.$store.commit("UPDATE_TOKEN", response.data.token)
            }).then(()=> {
                this.$router.push("/home")
            })
        }
    }
}
</script>

<style>

</style>