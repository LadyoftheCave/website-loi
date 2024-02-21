<template>
    <section class="hero-section uploaden" >
      <h1 class="interior">Idee&euml;n</h1>
            </section>
            <picture>
              <source media="(max-width: 320px)" srcset="../assets/images/header_image_medium_sv_idee.webp" type="image/webp">
              <source media="(min-width: 321px) and (max-width: 1200px)" srcset="../assets/images/header_image_medium_sv_upload.webp" type="image/webp">
              <source media="(min-width: 1201px)" srcset="../assets/images/interior_header_two.webp" type="image/webp">
              <img src="../assets/images/interior_header_two.jpg" alt="Header Banner" class="header-image">
            </picture>
            <div class="container--parent">
            <div class="container--ideeen" >
      <div v-for="(formulier, index) in formulieren" :key="formulier.id" class="idee--container">
        <h3>Idee: {{ index + 1 }}</h3> 
        <p><strong>Onderwerp: </strong>{{ formulier.onderwerp }}</p>
        <p><strong>Idee: </strong>{{ formulier.ideeArea }}</p>
        <p><strong>Afdeling: </strong>{{ formulier.selectie }}</p>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Ideeen',
    data() {
      return {
        formulieren: []
      }
    },
    async created() {
      const response = await fetch('http://localhost:3001/formulieren');
      if (response.ok) {
        this.formulieren = await response.json();
      }
    }
  }
  </script>

  <style scoped>
  .container--parent {
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem 0;
}

.idee--container {
  background-color: var(--kleur-oranje);
  padding: 0.62rem;
  border-radius: 0.3rem;
  margin-block-end: 2rem;
}

.container--parent .container--ideeen {
  inline-size: 63rem;
}
  </style>