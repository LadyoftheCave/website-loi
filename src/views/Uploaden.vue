<template>
  <!-- <section class="header_container"> -->
    <section class="hero-section uploaden">
      <h1 class="interior">Uploaden</h1>
            </section>
    <picture>
      <source media="(max-width: 320px)" srcset="../assets/images/header_image_medium_sv_upload.webp" type="image/webp">
  <source media="(min-width: 321px) and (max-width: 1200px)" srcset="../assets/images/header_image_medium_sv_upload.webp" type="image/webp">
  <source media="(min-width: 1201px)" srcset="../assets/images/interior_header.webp" type="image/webp">
  <img src="../assets/images/interior_header.jpg" alt="Header Banner" class="header-image">
</picture>
<!-- </section> -->
<main>
            <section class="uploaden_section">
                <div class="white_container container--narrow">
                    <div class="introtext">
                        <h2>Idee uploaden</h2>
                        <p>Jouw idee kan het verschil maken!</p>
                    </div>

                    <form @submit.prevent="submitForm">
                        <label for="tekstveld">OnderWerp:</label>
                        <input type="text" v-model="formData.onderwerp" required>

                        <br>

                        <label for="tekstarea">Jouw idee of suggestie:</label>
                        <textarea v-model="formData.ideeArea" required></textarea>

                        <br>

                        <select v-model="formData.selectie" required>
                            <option value="" disabled selected>Selecteer afdeling</option>
                            <option value="Webdevelopment">Webdevelopment</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Webdesign">Webdesign</option>
                            <option value="Administratie">Administratie</option>
                            <option value="Management">Management</option>
                            <option value="HRM">HRM</option>
                        </select>

                        <br>

                        <br>
                        <br>

                        <div class="submit_button">
                          <button type="submit">Verstuur</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          onderwerp: '',
          ideeArea: '',
          selectie: ''
        }
      }
    },
    name: 'Uploaden',
    methods: {
      async submitForm() {
        const response = await fetch('http://localhost:3001/formulieren', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        if (response.ok) {
          this.formData.onderwerp = '';
          this.formData.ideeArea = '';
          this.formData.selectie = '';
          this.$router.push('/ideeen'); 
        }
      }
    }
  }
  </script>

  <style scoped>

  .submit_button button {
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

.submit_button button:hover {
  background: var(--kleur-oranje);
}

select {
  block-size: 2.5rem;
  background-color: var(--kleur-oranje);
}


  </style>

  

