<template>
  <article>
    <h2>Magazines</h2>
    <section
      v-for="magazine in magazines"
      v-bind:key="magazine.id"
    >
      <h2>{{magazine.name}}</h2>
      <p>{{magazine.price}}</p>
    </section>
  </article>
</template>

<script>
  import store from '@/store.js';

  export default{
    name: 'Magazines',
    computed: {
      magazines(){
        return this.$store.state.magazines;
      }
    },
    created(){
      store.dispatch('getMagazines');
    }
  }
</script>
