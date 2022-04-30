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
    background: var(--footer-color);
    color: var(--footer-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    top: 0px;
    font-size: 25px;
}
</style>