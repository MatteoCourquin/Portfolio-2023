<template>
  <div class="container-section">
    <div class="title-section">
      <h2>À propos</h2>
    </div>
    <section class="section about">
      <div class="about-description">
        <div class="line"></div>
        <img preload src="/images/logos/quote.svg" quality="10" class="anim-about quote" alt="" />

        <p class="anim-about">Je suis Matteo, développeur, depuis {{ years }} ans.</p>

        <p class="anim-about">Initialement intéressé par l'architecture, ma passion pour le développement web a émergé
          pendant le confinement, consolidée par des études à l'<a class="links" href="https://www.iim.fr/"
            target="_blank">IIM</a>.</p>

        <p class="anim-about">Tout a commencé depuis <a class="links" href="https://openclassrooms.com/"
            target="_blank">OpenClassrooms</a>. Le premier site vers lequel on se dirige lorsque l'on s'intéresse au web
          !</p>

        <p class="anim-about">Actuellement en alternance chez <a class="links" href="https://www.fortuneo.fr/"
            target="_blank">Fortuneo</a>, entouré d'experts, je perfectionne mes compétences jour après jour. </p>

        <p class="anim-about">Ma rigueur, ma persévérance et ma sensibilité esthétique se reflètent dans ma vision du
          développement.</p>

        <p class="anim-about">« Un code propre en vaut 10 »</p>

        <a href="documents/CV.pdf" target="_blank"><button class="anim-about button">Mon CV</button></a>
      </div>
      <div class="anim-about about-cv">
        <a href="documents/CV.pdf" target="_blank"><img sizes="sm:100vw md:100vw lg:100vw" alt="cv de matteo courquin"
            src="/images/about/CV.png" /></a>
      </div>
    </section>
  </div>
</template>

<script>

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      years: "",
      months: "",
    };
  },
  mounted() {

    let animAbout = gsap.utils.toArray('.anim-about')
    animAbout.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 70%",
          toggleActions: "restart none none reverse",
          end: "bottom 90%",
        },
      })
        .to(item, {
          opacity: 1,
          y: 0,
          duration: .5,
        }).delay(index * .1)
    })

    let dateNow = new Date()
    let codingSince = new Date('Wed Jan 15 2019 16:00:00 GMT+0100')

    let tmp = dateNow - codingSince;

    this.years = Math.floor(tmp / 31536000000)
    this.months = Math.floor((tmp % 31536000000) / 2628000000)
  }
}

</script>

<style scoped lang='scss'>
@import '~/assets/scss/main.scss';

.anim-about {
  opacity: 0;
  transform: translateY(-50px);
}

.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include screen-m {
    grid-template-columns: 1fr;
  }

  .about-description {
    padding: 50px 50px 50px 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .quote {
      width: clamp(70px, 6vw, 90px);
      margin-bottom: 20px;
    }

    @include screen-m {
      padding: 0;
    }

    p {
      margin-bottom: 30px;
    }

    .line {
      width: 2px;
      height: 60%;
      background: $color-black;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      @include screen-m {
        display: none;
      }
    }
  }

  .about-cv {
    display: flex;
    justify-content: center;
    align-items: center;

    @include screen-m {
      display: none;
    }

    img {
      cursor: pointer;
      padding-left: 50px;
      width: clamp(20px, 100%, 600px);

    }
  }
}
</style>