<template>
<div>
  
    <TheHeader/>
    <div class="welcome">
    <Signin />
    <Signup />
  </div>
    <TheFooter/>
</div>
  
</template>

<script>
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  name: "Welcome",
  components: {
    Signin,
    Signup,
    TheHeader,
    TheFooter
  },
};
</script>

<style scoped>

.welcome {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 100px;
  min-height: 100vh;
  padding-top: 150px;
}

footer {
  min-height: 100px;
}
  
</style>
