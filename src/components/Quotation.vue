<template>
  <div class="container">
    <div v-if="quotation">
        <div class="currencies">
            <span class="currency"> Dólar (USD)</span> <span class="value">{{getCurrency(quotation.USDBRL.low)}}</span>
            <span class="currency"> Euro (EUR)</span> <span class="value">{{getCurrency(quotation.EURBRL.low)}}</span>
            <span class="currency"> Bitcoin (BTC)</span> <span class="value">{{getCurrency(quotation.BTCBRL.low)}}</span>
            <span class="currency"> Ethereum (ETH)</span> <span class="value">{{getCurrency(quotation.ETHBRL.low)}}</span>
        </div>
    </div>
    <ScoreBoard/>
    <span @click="logout" id="sair">Sair <i class="fa-solid fa-power-off"></i></span>
  </div>
</template>

<script>
import axios from "axios"
import ScoreBoard from '@/components/ScoreBoard.vue'
export default {
    name: "Quotation",
    components: {
        ScoreBoard
    },
    data(){
        return {
            quotation: null
        }
    },
    methods: {
        getQuotation(){
            axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL").then((response)=> {
                this.quotation = response.data
            })
        },
        getCurrency(currency){
            return Number(currency).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        },
        logout(){
            this.$store.commit("UPDATE_LOGIN", false)
                this.$store.commit("UPDATE_TOKEN", "")
                this.$router.push("/")
        }
    },
    created(){
        this.getQuotation()
        
    }
}
</script>

<style scoped>
.container {
    padding: 15px 0;
    grid-column: 5/6;
    grid-row: 2/3;
    background: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    height: 110%;
    

}
.currencies {
    text-align: center;
    background: var(--main-color);
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
}
    span {
        display: block;
        font-size: 25px;
    }
    .value {
        font-weight: bold;
        margin-bottom: 15px;
    }
    #sair {
        margin-top: 40px;
        color: rgb(255, 40, 2);
        cursor: pointer;
        transition: .3s;
    }
    #sair:hover {
        text-decoration: underline;
    }
</style>