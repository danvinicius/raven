<template>
  <form>
        <h3>Entre com sua conta</h3>
    <br>
      <input type="email" placeholder="E-mail" v-model="email">
      <br>
      <input type="password" placeholder="Senha" v-model="password">
      <br>
      <button class="btn" @click.prevent="signin">Entrar</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignIn",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        signin(){
            axios.post("http://localhost/user/login", {
                email: this.email,
                password: this.password
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

<style scoped>
</style>