<template>
  <Header />
  <Body />
  <Footer />
</template>

<script>
import Body from './components/body.vue';
import Footer from './components/footer.vue';
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>

<style></style>
