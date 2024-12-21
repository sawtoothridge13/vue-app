<template>
  <HeaderComp />
  <div>
    <router-view />
  </div>
  <FooterComp />
</template>

<script>
import FooterComp from '@components/FooterComp.vue';
import HeaderComp from '@components/HeaderComp.vue';
import { store } from './components/store.js';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
