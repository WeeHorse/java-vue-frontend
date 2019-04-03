<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Magazines/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Magazines from '@/components/Magazines.vue'
import store from '@/store.js';

setInterval(() => {
  store.commit('when', new Date());
},1000);

export default {
  name: 'home',
  components: {
    HelloWorld,
    Magazines
  }
}
</script>
