<template>
  <header>
      <div id="left">
          <div v-if="this.$store.state.login">
            <h1>{{greeting}} <b>{{username}}</b></h1>
          </div>
          <div v-else>
              <h1 id="logo">Raven</h1>
          </div>
      </div>
      
      <div id="right">
        <Weather/>
        <div id="time-container">
            <span id="time">{{time}}</span>
            <span id="date">{{date}}</span>
        </div>
      </div>
  </header>
</template>

<script>
import Weather from "./Weather.vue"
export default {
    name: "TheHeader",
    components: {
        Weather
    },
    data(){
        return {
            username: this.$store.state.user.name.split(" ")[0],
            time: '',
            date: ''
        }
    },
    computed: {
        greeting(){
            let greeting;
            const time = new Date().getHours()
            if (time >= 3 && time < 12) {
                greeting = "Bom dia, "
            } else if (time >= 12 && time < 18) {
                greeting = "Boa tarde, "
            } else {
                greeting = "Boa noite, "
            }
            return greeting
        }
    },
    mounted(){
        setInterval(()=> {
                let hours = new Date().getHours().toString()
                let minutes = new Date().getMinutes().toString()
                let options = {day: 'numeric', month: 'long', year: 'numeric'}
                let today = new Date().toLocaleDateString("pt-br", options)
                if (minutes < 10) {
                    minutes = `0${minutes}` 
                }
                if (hours < 10) {
                    hours = `0${hours}` 
                }
                this.time =`${hours}:${minutes}`
                this.date = today
            }, 1000)
    }
}
</script>

<style scoped>
header {
    background: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    grid-column: 1 / -1;
    grid: 1 / 2;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 1.);
}
h1 {
    font-size: 50px;
    font-weight: normal;
}

#logo {
    font-family: 'Leckerli One';
    font-weight: 100;
}

#right {
    display: flex;
    text-align: right;
    align-items: flex-end;
}

#time {
    font-size: 50px;
    text-align: right;
}
#date {
    display: block;
    font-size: 22px;
}

#time-container {
    min-width: 200px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 50px;
}
</style>