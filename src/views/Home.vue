<template>
  <section class="header_container">
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
    <div class="usps container--narrow">
                <div class="usp usp_one">
                    <h2>Innovatie</h2>
                    <h3>Baanbrekende idee&euml;n</h3>
                    <p>Verken de idee&euml;n van jouw collega's. Ontdek hoe hun innovaties ons bedrijf vooruit helpen en blijf op de hoogte van de allerlaatste ontwikkelingen."</p>
                    <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                </div>
                <div class="usp usp_two">
                    <h2>Creativiteit</h2>
                    <h3>Kracht van creativiteit</h3>
                    <p>Ontdek hoe het aanmoedigen van creatief denken binnen ons bedrijf unieke oplossingen kan opleveren en de groei kan stimuleren.</p>
                    <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                </div>
                <div class="usp usp_three">
                    <h2>Realisaties</h2>
                    <h3>Kijkje achter de schermen</h3>
                    <p>Neem een kijkje binnen onze meest innovatieve projecten. Ontdek hoe we uitdagingen omzetten in kansen en bekijk de impact van onze oplossingen.</p>
                    <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                </div>
                <div class="usp usp_three">
                    <h2>Bijdragen</h2>
                    <h3>Bijdragen aan verandering</h3>
                    <p>Ontdek hoe jouw idee&euml;n een verschil kunnen maken en hoe je kunt bijdragen aan het bereiken van onze gemeenschappelijke doelen.</p>
                    <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                </div>
            </div>

          </section>
          <main>
            <section class="section_one">
                <div class="white_container container--narrow">
                    <div class="text_left">
                        <h3>
                            Ontdek en Deel Jouw idee&euml;n
                        </h3>
                        <p>
                            Welkom bij de idee&euml;nbus van WebKnight B.V., een platform voor het delen en ontdekken van idee&euml;n. Hier heb je de mogelijkheid om als medewerker bij te dragen aan de groei van ons bedrijf. Deel je
                            idee&euml;n, geef feedback en ontdek hoe jouw bijdrage het verschil kan maken.
                        </p>
                        <br>
                        <h3>Hoe Werkt Het?</h3>
                        <p>
                            <strong>Verken idee&euml;n:</strong> Bekijk idee&euml;n van collega's en ontdek wat er speelt binnen ons bedrijf.<br>

                            <strong>Deel Jouw Inzichten:</strong> Heb je een idee of suggestie? Deel het met de gemeenschap en draag bij aan positieve verandering.
                        </p>
                    </div>
                    
      



                      <div @click="changePicture" class="img_middle">
    <img :src="currentImage" id="light">
  </div>


                    
                    
                    <div class="text_right">
                        <p><strong>Betrokkenheid: </strong> Ontvang feedback, werk samen met collega's en zie hoe jouw inbreng de bedrijfscultuur beïnvloedt.</p>
                        <p><strong>Samen bouwen: </strong> Bij WebKnight B.V. bouwen we samen aan een betere toekomst. Jouw idee&euml;n en inzichten zijn de bouwstenen van onze vooruitgang.</p>
                        <br>

                        <h3>Jouw Stem Telt</h3>
                        <p>
                            Bij WebKnight B.V. waarderen we de inbreng van iedereen, dus ook van jou! De idee&euml;nbus is jouw kans om gehoord te worden en deel uit te maken van de groei van ons bedrijf. Doe mee en ontdek de kracht van
                            collectieve creativiteit!
                        </p>
                    </div>
                </div>
            </section>

            <section class="section_two container--grey">
                <div class="grey_container container--narrow">
                    <div class="read read_one">
                        <h3>Innovatie</h3>
                        <p>Bij WebKnight B.V. is innovatie meer dan een buzzword. Het is de motor die ons vooruit drijft.</p>
                        <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                    </div>
                    <div class="read read_two">
                        <h3>Creativiteit</h3>
                        <p>Creativiteit is de vonk die onze idee&euml;n tot leven brengt. Laat je inspireren en inspireer anderen!</p>
                        <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                    </div>
                    <div class="read read_three">
                        <h3>Realisaties</h3>
                        <p>Onze realisaties zijn het bewijs van onze inzet. Ze tonen aan hoe we uitdagingen omzetten in kansen.</p>
                        <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                    </div>
                    <div class="read read_three">
                        <h3>Bijdragen</h3>
                        <p>Elke bijdrage telt. Jouw idee&euml;n kunnen de koers van WebKnight B.V. veranderen.</p>
                        <a href="idee_overzicht.html" class="usp-button">lees verder</a>
                    </div>
                </div>
            </section>

            <section class="section_three">
                <div class="white_container container--narrow">
                    <div class="img_middle"><img src="../assets/images/idee_creation.webp" alt=""><noscript><img src="../assets/images/idee_creation.png" alt="Your Image (Fallback)"></noscript>
                    </div>
                    <div class="text_right">
                        <h3>Samen Innoveren bij WebKnight B.V.</h3>
                        <p>
                            Bij WebKnight B.V. geloven we in de kracht van samenwerking en gedeelde inzichten. Onze idee&euml;nbus is een weerspiegeling van deze overtuiging. Het is een platform waar we samen komen om te leren, te groeien
                            en te innoveren.<br>
                            <br>

                            <strong>De Kracht van idee&euml;n</strong>

                            Elk idee, hoe klein ook, heeft het potentieel om grote veranderingen teweeg te brengen. We moedigen je aan om je gedachten, idee&euml;n en inzichten te delen. Elk idee is waardevol en kan bijdragen aan onze
                            gezamenlijke groei.<br>
                            <br>

                            <strong>Een Gemeenschap van Innovators</strong>

                            We zijn meer dan alleen een bedrijf - we zijn een gemeenschap van innovators. Samen kunnen we aan het uitbreiden van onze mogelijkheden werken en een positieve impact te maken.<br>
                            <br>
                        </p>
                    </div>
                </div>
            </section>
        </main>
  

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        "src/assets/images/lightbulb.webp",
        "src/assets/images/lightbulb_off.webp",
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    changePicture() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
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
    top: 7rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    inline-size: 100%;
  }

  .header_container {
    position: relative;
  }
}
</style>
