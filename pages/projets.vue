<template>
  <div>
    <Header />
    <ProjectsSection />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProjectsSection from '../components/projects/ProjectsSection.vue';

export default {
  components: { Header, ProjectsSection },
};
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>
