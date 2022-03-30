<template>
  <div class="home">
    <Weather/>
    <Quotation/>
    <News/>
    <ToDo/>
    <button @click="signout">Sign out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Quotation from '@/components/Quotation.vue'
import Weather from '@/components/Weather.vue'
import News from '@/components/News.vue'
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'Home',
  components: {
    Quotation,
    Weather,
    News,
    ToDo
  },
  methods: {
    signout(){
      localStorage.clear()
      this.$store.commit("UPDATE_LOGIN", false)
      this.$store.commit("UPDATE_TOKEN", "")
      this.$store.commit("UPDATE_USER", {
      _id: "",
      name: "",
      city: "",
      email: "",
    })
      this.$router.push("/")
    }
  }
}
</script>
