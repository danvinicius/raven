<template>
  <div class="about">
    <Signin/>
    <Signup/>
    </div>
</template>

<script>
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
export default {
  name: 'Welcome',
  components: {
    Signin,
    Signup
  }
}
</script>