<template>
  <div>
    <Header />
    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Contact from '../components/contact/Contact.vue';

export default {
  components: { Header, Contact },
};
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>
