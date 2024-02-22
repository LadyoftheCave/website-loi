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
    <div class="idee_solo">
      <h2 class="container--narrow">Idee Details</h2>
      <div v-if="idee" class="container--narrow">
        <!-- <h3>Idee: {{ id }}</h3> -->
        <h3 class="idee_link">Idee: {{ id }}</h3>
        <p class="onderwerp"><strong>Onderwerp: </strong>{{ idee.onderwerp }}</p>
        <p class="onderwerp"><strong>Idee: </strong>{{ idee.ideeArea }}</p>
        <p class="onderwerp"><strong>Afdeling: </strong>{{ idee.selectie }}</p>
      </div>
      <div v-else>
        <p>Dit idee kon niet worden gevonden.</p>
      </div>

      <router-link to="/ideeen" class="nav-link-idee">Ideeën</router-link>
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
    console.log(response); 
    if (response.ok) {
      this.idee = await response.json();
    }
  }
}
</script>

<style scoped>
.idee_solo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.nav-link-idee {
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 0.6rem 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: -2rem 0 2rem 0;
  cursor: pointer;
}

.nav-link-idee:hover {
  background: var(--kleur-oranje);
}

.onderwerp {
    margin-block-end: 1rem;
}

.idee_link a, .idee_link {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}
</style>