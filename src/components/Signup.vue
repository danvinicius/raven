<template>
  <form>
    <h3>Ainda não possui uma <br> conta? Cadastre-se</h3>
<br>
      <input type="text" placeholder="Nome" v-model="name">
      <br>
      <input type="email" placeholder="E-mail" v-model="email">
      <br>
      <input type="password" placeholder="Senha" v-model="password">
      <br>
      <input type="text" placeholder="Cidade" v-model="city">
      <br>
      <button class="btn" @click.prevent="signup">Cadastrar</button>
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

<style scoped>

</style>