<template>
  <div class="home">
    <TheHeader/>
    <Quotation/>
    <News/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Quotation from '@/components/Quotation.vue'
import News from '@/components/News.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    Quotation,
    News,
    TheFooter,
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
<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 120px auto 150px;
  background: #3D84B8;
  }

</style>
