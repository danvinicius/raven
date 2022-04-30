<template>
  <router-view/>
</template>

<style>
/*css reset*/ 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300&family=Leckerli+One&family=Roboto:wght@300&display=swap');
* {
  box-sizing: border-box;
}

:root {
  --main-color: #0C4271;
  --main-color-hover: #082e4e;
  --secondary-color: #0A81AB;
  --text-color: #fff;
  --background-color: #F9DFDC;
  --footer-color: #0C4271;
  --footer-text-color: #fff;
}

body, ul, li, h1, h2, p 
  {
  padding: 0;
  margin: 0;
  font-family: Inter, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h3 {
        color: var(--main-color);
    }
    
ul {
  list-style: none;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text-color);
}
a {
  color: var(--text-color);
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}

form {
  padding: 40px;
  border-radius: 10px;
  background: #dedede;
  box-shadow: 5px 10px 8px rgba(30, 60, 90, .2);
}

.btn {
  display: block;
  padding: 10px 30px;
  background: var(--main-color);
  border-radius: 4px;
  color: var(--text-color);
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
  transition: all .3s;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.btn:hover {
  background: var(--main-color-hover);
  color: var(--text-color);
  transform: scale(1.1);
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
}
input{
  width: 100%;
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
  transition: all .3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}
input:hover, input:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
  border-color: var(--main-color);
}

</style>
