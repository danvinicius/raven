<template>
  <div class="scoreboard">
      <h3 style="text-decoration: underline;">Brasileirão</h3>
      <ul>
          <li v-for="(match, index) in matches" :key="index">
              {{match.awayTeam.name}} {{match.score.fullTime.awayTeam}} x {{match.score.fullTime.homeTeam}} {{match.homeTeam.name}}
          <hr>
          </li>
      </ul>
  </div>
</template>

<script scoped>
import axios from "axios"
export default {
    name: "ScoreBoard",
    data(){
        return {
            matches: null
        }
    },
    methods: {
        getResults(){
            let today = new Date()
            let date = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`
            let month = today.getMonth() < 10 ? `0${today.getMonth()}` : `${today.getMonth()}`
            let year = today.getFullYear() < 10 ? `0${today.getFullYear()}` : `${today.getFullYear()}`
            let startDate = +date-4 < 10 ? `0${+date-4}` : +date-4
            axios.get(`https://api.football-data.org/v2/competitions/BSA/matches/?dateFrom=${year}-${month}-${startDate}&dateTo=${year}-${month}-${date}`, {
            headers: {
                'X-Auth-Token': 'f19fece10e7e45b2a4ba0ef5fa77573e'
            }})
            .then(response => {
            this.matches = response.data.matches.reverse()
        })
        }
    },
    created(){
        this.getResults()
    }
}
</script>

<style scoped>
.scoreboard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    background: var(--main-color);
    padding: 30px 5px;
    border-radius: 20px;
    text-align: center;
    width: 90%;
}

.scoreboard h3 {
    color: var(--text-color);
    text-align: center;
    margin-bottom: 25px;
}

.scoreboard input {
    padding: 10px;
}

.task-button {
    background: var(--secondary-color);
    color: var(--text-color);
}

</style>