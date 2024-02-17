<template>
  <footer class="section_footer container--grey">
    <div class="grey_container container--narrow">
      <div class="widget widget_one">
        <h3>WebKnight B.V. Ideeënbus</h3>
        <p>
          Deze website is een onderdeel<br>
          van WebKnight B.V. en dient<br>
          als platform voor het verzamelen<br>
          en delen van ideeën.<br>
        </p>

        <a href="#"><img src="../assets/images/social_one.png" class="socials" alt="Facebook logo"></a>
        <a href="#"><img src="../assets/images/social_two.png" class="socials" alt="Twitter logo"></a>
        <a href="#"><img src="../assets/images/social_three.png" class="socials" alt="Instagram logo"></a>
      </div>
      <div class="widget widget_two">
        <h3>Adres</h3>
        <p>Ideeplezier</p>
        <p>Ideeenbusplein 12</p>
        <p>7645ZH Halmelo</p>
        <p>www.ideeplezier.nl</p>
        <p>053-43256678</p>
      </div>

      <div class="widget widget_three">
        <h3>Sitemap</h3>
        <ul>
          <li><router-link to="/" class="footer-link">Home</router-link></li>
          <li><router-link to="/uploaden" class="footer-link">Uploaden</router-link></li>
          <li><router-link to="/ideeen" class="footer-link">Ideeën</router-link></li>
          <li><router-link to="/ideeenbus" class="footer-link">Over Ideeënbus</router-link></li>
        </ul>
      </div>
      <div class="widget widget_fout">
        <h3>Links</h3>
        <ul>
          <li><a href="#" class="footer-link">Ideeplezier</a></li>
          <li><a href="#" class="footer-link">Ideefun</a></li>
          <li><a href="#" class="footer-link">Idea box</a></li>
          <li><a href="#" class="footer-link">Some Idea</a></li>
          <li><a href="#" class="footer-link">Suggestion box</a></li>
          <li><a href="#" class="footer-link">De Ideeënbus</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSite'
}
</script>

<style scoped>
/* Voeg hier je CSS-stijlen toe */
</style>
