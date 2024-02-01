<template>
  <div>
    <Header />
    <Hero />
    <ProjectsCards />
    <Career />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/index/Hero.vue';
import ProjectsCards from '../components/index/ProjectsCards.vue';
import Career from '../components/index/Career.vue';
import About from '../components/index/About.vue';
import Footer from '../components/Footer.vue';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { Header, Hero, ProjectsCards, Career, About, Footer },
  data() {
    return {};
  },
  methods: {
    addBgTitle(title) {
      if (window.scrollY > (title.offsetTop - 1)) {
        title.classList.add('title-section-background');
      } else if (window.scrollY < title.offsetTop) {
        title.classList.remove('title-section-background');
      }
    },
    changeTitle() {
      let docTitle = document.title;
      window.addEventListener('blur', () => {
        document.title = 'Revenez vite !';
      });
      window.addEventListener('focus', () => {
        document.title = docTitle;
      });
    },
    animGsapToBottom() {
      let fadein = gsap.utils.toArray('.events');
      fadein.forEach((item, index) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
            end: 'bottom 90%',
          },
        });

        tl.from(item, {
          opacity: 0,
          y: -50,
          duration: 0.5,
        });
      });
    },
  },
  mounted() {
    let titles = document.querySelectorAll('.title-section');
    titles.forEach((title) => {
      window.addEventListener('scroll', () => {
        this.addBgTitle(title);
      });
    });

    this.animGsapToBottom();
    this.changeTitle();
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
</style>
