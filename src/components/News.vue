<template>
      <div v-if="news" class="container">
        <div v-for="(news, index) in news" :key="index" class="card" style="width: 18rem;">
            <a :href="news.url" target="_blank">
                <img :src="news.urlToImage" :alt="news.title" class="card-img-top">
            <div class="card-body">
                <p class="card-text" >{{news.title}}</p>
            </div>
            </a>
            
        </div>
      </div>
</template>

<script>
import axios from "axios"
export default {
    name: "News",
    data(){
        return {
            news: null
        }
    },
    methods: {
        getNews(){
            axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`).then((response)=> {
                this.news = response.data.articles.slice(1,10)
            })
        }
    },
    created(){
        this.getNews()
        console.log(this.news);
    }
}
</script>

<style scoped>
    .container {
        padding: 50px 20px 50px 10px;
        grid-column: 1 / 5;
        grid-row: 2 / 3;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
    .card {
        background: var(--secondary-color);
        border-radius: 20px;
        overflow: hidden;
        margin: 5px;
    }

    a {
        font-size: 20px;
        cursor: pointer;
    }

    a:hover {
        color: var(--main-text-color);
    }
    .card img {
        height: 200px;
    }
</style>