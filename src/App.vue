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

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style></style>
