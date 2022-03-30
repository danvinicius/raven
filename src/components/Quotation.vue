<template>
  <div id="container">
    <div v-if="quotation">
        Dólar americano: {{getCurrency(quotation.USDBRL.low)}}
        <br>
        Euro: {{getCurrency(quotation.EURBRL.low)}}
        <br>
        Bitcoin: {{getCurrency(quotation.BTCBRL.low)}}
        <br>
        Ethereum: {{getCurrency(quotation.ETHBRL.low)}}
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: "Quotation",
    data(){
        return {
            quotation: null,
            baseURL: "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL"
        }
    },
    methods: {
        getQuotation(){
            axios.get(this.baseURL).then((response)=> {
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

</style>