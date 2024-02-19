<template>
    <div>
      <section class="hero-section uploaden">
                <h1 class="interior">Uploaden</h1>
            </section>

            <picture>
              <source media="(max-width: 320px)" srcset="images/header_image_medium_sv_upload.webp" type="image/webp">
              <source media="(min-width: 321px) and (max-width: 1200px)" srcset="images/header_image_medium_sv_upload.webp" type="image/webp">
              <source media="(min-width: 1201px)" srcset="images/interior_header.webp" type="image/webp">
              <img src="images/interior_header.jpg" alt="Header Banner" class="header-image">
            </picture>
      <p>Je tekst voor uploadenpagina hier</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Uploaden'
  }
  </script>