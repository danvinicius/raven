<template>
  <div>
      <div v-if="weather" class="weather">
        <img :src="iconLink" alt="">
        <p>{{temp}}°C</p> 
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
        console.log("hi");
        this.getWeather()
    }
}
</script>

<style scoped>
.weather {
    display: flex;
    align-items: center;
    justify-self: flex-end;
    position: relative;
    top: 30px;
}
p {
    font-size: 30px;
}
</style>