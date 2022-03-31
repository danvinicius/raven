<template>
  <div id="container">
      <div v-if="weather">
        Clima {{user.city}}: {{temp}}°C | {{weatherMain}} <img :src="iconLink" alt="">
      </div>
  </div>
</template>

<script>
import axios from "axios"
import {mapState} from "vuex"
export default {
    name: "Weather",
    data(){
        return {
            weather: null,
            iconLink: null
        }
    },
    methods: {
        getWeather(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.user.city}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`).then((response)=> {
                this.weather = response.data
                this.iconLink = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
            })
        }   
    },
    computed: {
        ...mapState(["user"]),
        temp(){
            return Math.ceil(this.weather.main.temp)
        },
        weatherMain(){
            return this.weather.weather[0].main
        }
    },
    created(){
        this.getWeather()
    }
}
</script>

<style scoped>

</style>