<template>
  <div id="container">
      <div v-if="weather">
        Clima {{user.city}}: {{Math.ceil(weather.main.temp)}}°C | {{weather.weather[0].main}} <img :src="iconLink" alt="">
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
            iconLink: null,
            baseURL: `https://api.openweathermap.org/data/2.5/weather`
        }
    },
    methods: {
        getWeather(){
            axios.get(`${this.baseURL}?q=${this.user.city}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`).then((response)=> {
                this.weather = response.data
                this.iconLink = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
            })
        }
        
    },
    computed: {
        ...mapState(["user"])
    },
    created(){
        this.getWeather()
    }
}
</script>

<style scoped>

</style>