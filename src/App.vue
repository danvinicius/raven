<template>
  <router-view/>
</template>

<style>
/*css reset*/ 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300&display=swap');
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p 
  {
  padding: 0;
  margin: 0;
  font-family: Inter, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
ul {
  list-style: none;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
  transition: all .3s;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
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
  border-color: #87f;
}

</style>
