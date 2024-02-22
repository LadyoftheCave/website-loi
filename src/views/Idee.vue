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
          <div class="container--ideeen" ></div></div>
    <div>
      <h2>Idee Details</h2>
      <div v-if="idee">
        <h3>Idee: {{ id }}</h3>
        <p><strong>Onderwerp: </strong>{{ idee.onderwerp }}</p>
        <p><strong>Idee: </strong>{{ idee.ideeArea }}</p>
        <p><strong>Afdeling: </strong>{{ idee.selectie }}</p>
      </div>
      <div v-else>
        <p>Dit idee kon niet worden gevonden.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Idee',
  props: ['id'],
  data() {
    return {
      idee: null
    }
  },
  async created() {
    const response = await fetch(`http://localhost:3000/formulieren/${this.$route.params.id}`);
    console.log(response); // voeg deze regel toe
    if (response.ok) {
      this.idee = await response.json();
    }
  }
}
</script>