<template>
  <div class="container-section solo-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section projects" id="projects">
      <!-- Card Project -->
      <div v-for="(project, i) in projects" :id="i + 1" class="card-project" :key="i">
        <div class="project-image">
          <a :href="project.link" target="_blank" aria-label="lien vers le projet">
            <img :src="project.image" alt="" loading="lazy" quality="10" class="links-img" />
          </a>
        </div>
        <div class="project-description">
          <span class="number"><span v-if="i < 9">0</span>{{ i + 1 }}</span>
          <div class="line"></div>
          <p v-html="project.description"></p>
          <h3 class="anim-projetcs">{{ project.title }}</h3>
          <a :href="project.link" target="_blank" aria-label="lien vers le projet"
            class="anim-projetcs links links-to-project">voir le projet
            <img class="img-links" src="/images/logos/arrow-link.svg" /></a>
        </div>
      </div>

      <div class="nav-projects">
        <li>
          <ul v-for="(project, i) in projects" :key="i">
            <a class="links" :href="'#' + (i + 1)">{{ i + 1 }}</a>
          </ul>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      projects: [
        {
          title: 'zLawyer',
          description:
            "<a class='links' href='https://www.zlawyer.fr/logiciel-avocats/' target='_blank'>zLawyer</a> est un logiciel de gestion de cabinets d'avocats. Ils m'ont contacté pour la refonte de leur site afin de vendre et présenter leur logiciel. <br><br>J’ai réalisé le projet en collaboration avec <a class='links' href='https://august1.dev' target='_blank'>Augustin Briolon</a>.",
          image: '/images/projects/zLawyer.png',
          link: 'https://www.zlawyer.fr/logiciel-avocats/',
        },
        {
          title: 'Silver',
          description: "Intégration de la maquette de <a class='links' href='https://dribbble.com/TheGlyphStudio' target='_blank'>The Glyph Studio</a>",
          image: '/images/projects/silver.png',
          link: 'https://silver-matteocourquin.vercel.app/',
        },
        {
          title: 'NL • Architecture',
          description:
            "Intégration de la maquette de <a class='links' href='https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page' target='_blank'>Nadya Lazurenko</a>",
          image: '/images/projects/nlArchitecture.png',
          link: 'https://nl-architecture.courqu.in/',
        },
        {
          title: 'Semicolon',
          description:
            "Un projet d'étude voué à sensibiliser sur les problématiques étudiantes.",
          image: '/images/projects/semicolon.png',
          link: 'https://semicolon.vercel.app',
        },
        {
          title: 'La défense',
          description:
            "Un projet d'étude dont le but était de réaliser une maquette UI. J'ai décidé de l'intégrer pour m'amuser !",
          image: '/images/projects/laDefense.png',
          link: 'https://la-defense.courqu.in/index.html',
        },
      ],
    };
  },
  mounted() { },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/main.scss';

.nav-projects {
  position: fixed;
  @include filter-background;
  bottom: 0px;
  width: calc(100vw - 220px);
  left: 0;
  padding: 10px 0;

  @include screen-m {
    width: 100vw;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    list-style-type: none;

    ul a {
      padding: 0 10px;
      transition: 0.1s;

      &:hover {
        font-size: 23px;
      }
    }
  }
}

.section.projects {
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-project {
    scroll-snap-align: start;
    padding: 0 clamp(20px, 4vw, 60px);
    flex-shrink: 0;
    width: 100%;
    height: fit-content;
    position: relative;

    .project-image {
      overflow: hidden;
      width: 88%;
      max-height: 70vh;

      margin-bottom: 20px;

      padding: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include screen-m {
        width: 100%;
      }
    }

    .project-description {
      h3 {
        @include screen-m {
          margin: 20px 0;
        }
      }

      p {
        margin-top: 40px;

        @include screen-m {
          margin-top: 0;
        }
      }

      .number {
        position: absolute;
        top: 15vh;
        right: 50px;

        @include screen-m {
          position: relative;
          right: 0;
          top: 0;
        }
      }

      .line {
        display: none;
        width: 10%;
        height: 2px;
        background: $color-black;
        margin: 20px 0;

        @include screen-m {
          display: block;
        }
      }

      .links.links-to-project {
        position: absolute;
        right: 50px;
        bottom: 10px;

        @include screen-m {
          right: 0;
          position: relative;
        }
      }
    }
  }
}
</style>
