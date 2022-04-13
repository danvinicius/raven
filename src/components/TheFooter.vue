<template>
  <footer>
      <span>Raven &copy; {{year}}</span>
  </footer>
</template>

<script>
export default {
    name: "TheFooter",
    computed: {
        year(){
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
footer {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    background: #f0ebcc;
    color: #041C32;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    top: 50px;
    font-size: 25px;
}
</style>