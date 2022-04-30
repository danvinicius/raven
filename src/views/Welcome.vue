<template>
<div>
  
    <TheHeader/>
    <div class="welcome">
      <img id="raven-img" src="../assets/raven-svgrepo-com.svg" alt="">
      <div class="forms">
        
        <Signin />
        <Signup />
      </div>
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
  background: linear-gradient(to right, var(--secondary-color), var(--main-color-hover)) ;
  display: flex;
  justify-content: space-evenly;
  gap: 100px;
  min-height: 100vh;
  padding: 50px 0;
}

#raven-img {
  max-width: 600px;
  transform: rotateY(180deg);
}

.forms {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

footer {
  min-height: 150px;
}
  
</style>
