<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/RefAndReactive">RefAndReactive</router-link>|
    <router-link to="/Computed">Computed</router-link>|
    <router-link to="/Provide">Provide</router-link>|
    <router-link to="/Composable">Composable</router-link>|
    <router-link to="/VBindInStyle">VBindInStyle</router-link>|
    <router-link to="/Teleport">Teleport</router-link>|
    <router-link to="/Slot">Slot</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
