<template>
  <div class="container-section">
    <div class="title-section">
      <h2>Projets</h2>
    </div>
    <section class="section project">

      <div v-for="(project, i) in projects" class="card-project events" :key="i">
        <div class="project-image">
          <a :href="'projets/#' + (i + 1)" class="links-img" aria-label="lien vers le projet">
            <img :src="project.image" alt="" loading="lazy" quality="10" />
          </a>
        </div>
        <div class="project-description">
          <span class="number"><span v-if="i < 9">0</span>{{ i + 1 }}</span>
          <div class="line"></div>
          <h3>{{ project.title }}</h3>
          <p v-html="project.description"></p>
          <a :href="project.link" target="_blank" class="links" aria-label="lien vers le projet">voir le projet
            <img class="img-links" alt="" src="/images/logos/arrow-link.svg" /></a>
        </div>
      </div>

      <nuxt-link to="/projets"><button class="button all-project">Tous les projets</button></nuxt-link>

    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {
          title: 'zLawyer',
          description: "<a class='links' href='https://www.zlawyer.fr/logiciel-avocats/' target='_blank'>zLawyer</a> est un logiciel de gestion de cabinets d'avocats. Ils m'ont contacté pour la refonte de leur site afin de vendre et présenter leur logiciel. <br><br>J’ai réalisé le projet en collaboration avec <a class='links' href='https://august1.dev' target='_blank'>Augustin Briolon</a>.",
          image: '/images/projects/zLawyer.png',
          link: 'https://www.zlawyer.fr/logiciel-avocats/'
        },
        {
          title: 'Silver',
          description: "Intégration de la maquette animée de <a class='links' href='https://dribbble.com/TheGlyphStudio' target='_blank'>The Glyph Studio</a>",
          image: '/images/projects/silver.png',
          link: 'https://silver-matteocourquin.vercel.app/'
        },
        {
          title: 'NL • Architecture',
          description: "Intégration de la maquette de <a class='links' href='https://dribbble.com/shots/16631037-Architectural-Studio-Landing-Page' target='_blank'>Nadya Lazurenko</a>",
          image: '/images/projects/nlArchitecture.png',
          link: 'https://nl-architecture.courqu.in/'
        },
      ]
    };
  },
}

</script>

<style scoped lang='scss'>
@import '~/assets/scss/main.scss';

.project {
  max-width: 2000px;
  margin: 0 auto;

  .card-project {
    display: grid;
    align-items: center;
    gap: 2vw;
    margin-bottom: 100px;

    &:nth-child(even) {
      .project-description {
        grid-column: 1 / 2;
      }

      .project-image {
        grid-column: 2 / 3;
      }
    }

    .project-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-row: 1 / 2;

      @include screen-m {
        margin-top: 50px;
      }

      .line {
        width: 20%;
        height: 2px;
        background: $color-black;
        margin: 20px 0;
      }

      .links {
        margin-top: 40px;
      }
    }

    .project-image {
      height: fit-content;
      display: flex;
      position: relative;
      grid-row: 1 / 2;

      img {
        padding: 10px;
        width: 93%;
        height: auto;
        z-index: 3;
      }
    }

    grid-template-columns: 3fr 2fr;

    @include screen-m {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    &:nth-child(even) {
      grid-template-columns: 2fr 3fr;
    }
  }

  .all-project {
    display: block;
    margin: 0 auto;
  }
}
</style>