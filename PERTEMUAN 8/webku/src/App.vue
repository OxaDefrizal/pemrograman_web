<template>
  <HomeAku />
  <h1>hello world</h1>
  <h1>nama saya adalah {{ nama }}</h1>
  <h1>umur saya adalah {{ umur }}</h1>
  <h1>{{ bilangan }}</h1>
  <button v-on:click="tambah">tambah</button>
</template>

<script>
import HomeAku from './components/HomeAku.vue'; 

export default {
  name: 'App',
  data(){
    return{
      nama : "why",
      umur : "17",
      bilangan : 1,
    }
  },
  components: {
    HomeAku,
  },
  methods:{
  tambah(){
    this.bilangan += 1;
  }
}
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
