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

                    <form id="myForm">
                        <!-- Tekstveld -->
                        <label for="tekstveld">OnderWerp:</label>
                        <input type="text" id="tekstveld" name="tekstveld" required>

                        <br>

                        <!-- Tekstarea -->
                        <label for="tekstarea">Jouw idee of suggestie:</label>
                        <textarea id="tekstarea" name="tekstarea" rows="12" cols="50" required></textarea>

                        <br>

                        <!-- Selectie -->
                        <select id="selectie" name="selectie" required>
                            <option value="" disabled selected>Selecteer afdeling</option>
                            <option value="webdevelopment">Webdevelopment</option>
                            <option value="marketing">Marketing</option>
                            <option value="webdesign">Webdesign</option>
                            <option value="administratie">Administratie</option>
                            <option value="management">Management</option>
                            <option value="hrm">HRM</option>
                        </select>

                        <br>

                        <br>
                        <br>

                        <!-- Verzendknop -->
                        <div class="submit_button">
                            <button type="button" onclick="saveIdeaForm()">Opslaan</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
  </template>
  
  <script>
  export default {
    name: 'Uploaden'
  }
  </script>

  

