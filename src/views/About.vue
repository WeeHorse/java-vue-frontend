<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ tick }}</h2>
    <h3>Payloads length: {{ payloads.length }}</h3>
    <button @click="clicky">{{ increase }}</button>
    <button @click="clickier">actionB</button>
    <button @click="clickOne">One</button>
    <button @click="clickTwo">Two</button>
    <FileUpload/>
  </div>
</template>

<script>
// @ is an alias to /src
import FileUpload from '@/components/FileUpload.vue';
import store from '@/store.js';

export default {
  name: 'about',
  components:{
    FileUpload
  },
  computed: {
    tick(){
      return this.$store.state.tick;
    },
    increase(){
      return this.$store.state.increase;
    },
    payloads (){
      return this.$store.state.payloads;
    }
  },
  methods:{
    clicky(){
      store.commit('increase');
    },
    clickier(){
      store.dispatch('actionB')
    },
    clickOne(){
      store.dispatch('one');
    },
    clickTwo(){
      store.dispatch('two');
    }
  }
}
</script>