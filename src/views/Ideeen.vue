<template>
    <section class="hero-section uploaden">
      <h1 class="interior">Idee&euml;n</h1>
            </section>
            <picture>
              <source media="(max-width: 320px)" srcset="../assets/images/header_image_medium_sv_idee.webp" type="image/webp">
              <source media="(min-width: 321px) and (max-width: 1200px)" srcset="../assets/images/header_image_medium_sv_upload.webp" type="image/webp">
              <source media="(min-width: 1201px)" srcset="../assets/images/interior_header_two.webp" type="image/webp">
              <img src="../assets/images/interior_header_two.jpg" alt="Header Banner" class="header-image">
            </picture>
            <div>
      <div v-for="formulier in formulieren" :key="formulier.id">
        <p>{{ formulier.onderwerp }}</p>
        <p>{{ formulier.ideeArea }}</p>
        <p>{{ formulier.selectie }}</p>
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