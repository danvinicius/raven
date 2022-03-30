<template>
  <div id="container">
      <div v-if="news">
          <div v-for="(news, index) in news" :key="index">
                {{news.title}}  
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "News",
    data(){
        return {
            news: null,
            baseURL: `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=`
        }
    },
    methods: {
        getNews(){
            axios.get(`${this.baseURL}${process.env.VUE_APP_NEWS_API_KEY}`).then((response)=> {
                this.news = response.data.articles
            })
        }
    },
    created(){
        this.getNews()
    }
}
</script>

<style scoped>

</style>