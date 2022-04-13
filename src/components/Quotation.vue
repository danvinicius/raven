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
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "Quotation",

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
    background: #344FA1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 110%;

}
.currencies {
    text-align: center;
}
    span {
        display: block;
        font-size: 25px;
    }
    .value {
        font-weight: bold;
        margin-bottom: 15px;
    }
</style>