<template>
  <div>
    <section class="hero-section">
                <h1>Idee&euml;nbus</h1>
                <p>Ontdek en deel creatieve idee&euml;n binnen WebKnight B.V..</p>
                <a href="idee_overzicht.html" class="hero-button">Ontdek meer</a>
            </section>
    <picture>
      <source media="(max-width: 320px)" srcset="../assets/images/header_image_medium_sv.webp" type="image/webp">
      <source media="(min-width: 321px) and (max-width: 1200px)" srcset="../assets/images/header_image_medium_sv.webp" type="image/webp">
      <source media="(min-width: 1201px)" srcset="../assets/images/high_fidelity_vp.webp" type="image/webp">
      <img src="../assets/images/high_fidelity_vp.jpg" alt="Header Banner" class="header-image">
    </picture>
    <p>Je tekst hier</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
section.hero-section {
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
}

.header-image {
  inline-size: 100%;
}

.hero-section a {
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 0.6rem 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1rem 0 0.3rem 0;
  cursor: pointer;
}

section.hero-section h1 {
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

@media (min-width: 388px) {
  section.hero-section h1 {
    font-size: 3.5rem;
  }
}

@media (min-width: 768px) {
  section.hero-section h1 {
    font-size: 5rem;
  }

  section.hero-section {
    position: absolute;
    top: 11rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    inline-size: 100%;
  }
}
</style>
