<template>
  <div id="app">
    <HeaderSite />
    <router-view />
    <FooterSite />
  </div>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue';
import FooterSite from './components/FooterSite.vue';


export default {
  name: 'App',
  components: {
    HeaderSite,
    FooterSite
  }
}
</script>

<style>
/* FONTS */

/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/opensans/v36/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* VARIABELEN */
:root {
  --kleur-zwart: black;
  --kleur-grijs: #cac6c7;
  --kleur-container: #eef0eb;
  --kleur-donkergrijs: #bcbcbc;
  --kleur-wit: white;
  --kleur-transparant: transparent;
  --kleur-oranje: #e9b34f;
  --kleur-oranje-menu: #f3d078;
  --kleur-interior: #f4d17e;
}

/* ALGEMEEN */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans";
  font-size: 16px;
}

p {
  line-height: 1.5rem;
  font-weight: 300;
}

.container--narrow {
  max-width: 63rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
}

.container--grey {
  background-color: var(--kleur-container);
}
/* EINDE ALGEMEEN */

/* HEADER */
header {
  position: relative;
}

header nav.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding-inline-end: 1.5rem;
  padding-block-start: 0.3rem;
}

section.hero-section h1.interior {
  color: var(--kleur-interior);
  text-shadow: 1px 1px 3px #fff;
  opacity: 0.8;
}

header nav.menu .logo {
  inline-size: 130px;
  block-size: 32px;
  margin-inline-start: 1rem;
  padding: 0.5rem;
  box-sizing: unset;
}

header nav.menu ul li {
  list-style: none;
}

header nav.menu ul li a {
  color: var(--kleur-zwart);
  text-decoration: none;
  font-weight: 600;
}

header .nav-menu .nav-link:hover {
  color: var(--kleur-oranje);
}

header button.hamburger .bar {
  display: block;
  inline-size: 1.5625rem;
  block-size: 0.19rem;
  margin: 0.31rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--kleur-zwart);
}

header button.hamburger {
  display: block;
  border: 0;
  background-color: var(--kleur-wit);
  cursor: pointer;
}
header button.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
header button.hamburger.active .bar:nth-child(1) {
  transform: translateY(0.5rem) rotate(45deg);
}
header button.hamburger.active .bar:nth-child(3) {
  transform: translateY(-0.5rem) rotate(-45deg);
}
header .nav-menu {
  position: absolute;
  left: -100%;
  top: 4rem;
  gap: 0;
  flex-direction: column;
  /* background-color: #262626; */
  inline-size: 100%;
  text-align: center;
  transition: 0.3s;
  text-transform: uppercase;
  font-size: 0.9rem;
  z-index: 1;
}
header .nav-menu .nav-item.active {
  margin: 1rem 0;
}
header .nav-menu.active {
  left: 0;
  background-color: var(--kleur-oranje-menu);
  margin-block-start: -0.3rem;
  padding: 1rem;
}

header picture img {
  inline-size: 100%;
}

.usps {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  left: 0;
  right: 0;
  text-align: center;
}

 .usps .usp {
  inline-size: 100%;
  block-size: auto;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 1rem #0000001c;
  padding: 0 1.5rem 0 1.5rem;
}

.usps .usp h3 {
  margin-block-end: 1rem;
}

.usps .usp button.usp_button,
 .usps .usp .usp_button,
 section.hero-section button,
main section.section_two .read .read_button,
main #myForm .submit_button button,
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

.hero-section a {
  font-size: 0.8rem;
}

.usps .usp a.usp-button,
main .idea_container a.usp-button,
main .section_two .read .usp-button {
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 0.6rem 1.25rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1rem 0 0.3rem 0;
  cursor: pointer;
  font-size: 0.8rem;
}

.usps button.usp_button:hover,
header section.hero-section button:hover,
section.section_two .read .read_button:hover,
.hero-section a:hover,
.usps .usp a.usp-button:hover,
main .section_two .read .usp-button:hover,
main #myForm .submit_button button:hover,
main .idea_container a.usp-button:hover {
  background: var(--kleur-oranje);
}

section.hero-section {
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
}

header section.hero-section h1 {
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

 section.hero-section p {
  margin-bottom: 1.5rem;
}
/* EINDE HEADER */

/* MAIN */
main section.section_one {
  display: flex;
  padding: 0 1.5rem 0 1.5rem;
  justify-content: center;
}

main .img_middle img {
  inline-size: 100%;
  margin: 2rem 0 2rem 0;
  cursor: pointer;
}

main section.section_three .img_middle img {
  inline-size: 100%;
  margin: 2rem 0 0 0;
}

main section.section_three {
  margin-bottom: 2rem;
}

main section.section_two {
  inline-size: 100%;
}

main section.section_two .grey_container,
main section.section_three .white_container {
  inline-size: 100%;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  padding: 0 1.5rem 0 1.5rem;
  justify-content: center;
}

main section.section_two .grey_container {
  padding: 2rem 1.5rem 2rem 1.5rem;
  text-align: center;
}

main section.container-center .kopjes {
  text-align: center;
}
main section.container-center .kopjes img {
  inline-size: 100%;
  margin-block-start: 3rem;
}

main section.section_one.section_idee_one img {
  inline-size: 100%;
  margin-block-start: 3rem;
}

main section.section_one.section_idee_one .container--narrow {
  margin-block-end: 0;
}

main section.section_two.section_idee_two {
  display: flex;
  justify-content: center;
  padding: 0 1.5rem 0 1.5rem;
}

main section.section_two.section_idee_two .datum {
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-block-end: 1rem;
}
main section.section_two.section_idee_two .datum .datum_blok {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

main section.section_two.section_idee_two .datum .datum_blok p {
  margin-inline-start: 1rem;
  font-size: 0.8rem;
}

main .section_one.section_idee_one .text_left {
  text-align: center;
}

main article.idee_box {
  cursor: pointer;
}

main .text_left img.idee_flow {
  float: right;
  clear: right;
  margin-top: 3rem;
  margin-right: -3rem;
  clip-path: polygon(
    -3.5% 38.62%,
    11.33% 14.73%,
    29.66% 5.46%,
    107.61% -0.78%,
    102.75% 101.48%,
    87.28% 100.7%,
    58.02% 96.25%
  );
  shape-outside: polygon(
    -15.91% 36.32%,
    39.46% 16.63%,
    144.86% 7.64%,
    176.06% 92.6%,
    137.34% 99.21%,
    67.79% 97.43%,
    65.94% 74.2%,
    12.38% 61.98%
  );
  box-sizing: border-box;
}

main .text_right img {
  float: left;
  clear: left;
  margin-top: 3rem;
  clip-path: polygon(
    -8.76% -3.6%,
    58.1% 2.12%,
    91.29% 10.9%,
    103.57% 33.96%,
    105.33% 52.78%,
    55.24% 67.98%,
    45.11% 93.72%,
    38.75% 104.22%,
    -6.03% 102.12%
  );
  shape-outside: polygon(
    -11.11% 27.22%,
    -2.98% 6.03%,
    58.71% 11.36%,
    103.04% 27.67%,
    104.17% 49.78%,
    58.95% 71.91%,
    56.6% 89%,
    33.42% 98.99%,
    -10.87% 101.31%
  );
  box-sizing: border-box;
}

section.section_idee_one .text_left p {
  margin-bottom: 2rem;
}

main section.section_three.section_three_idea .text_right {
  padding: 0;
}
main section.section_three.section_three_idea .read.read_one {
  text-align: center;
}
main section.section_three.section_three_idea .img_middle img {
  margin: 0;
}

main #resultaten {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
}

main #resultaten a {
  text-decoration: none;
  color: #00060c;
  font-weight: bold;
  margin-block-end: 0.3rem;
}

main #resultaten a:hover {
  color: var(--kleur-oranje);
}

main #resultaten.idee_overzicht div {
  background-color: var(--kleur-oranje);
  padding: 0.62rem;
  border-radius: 0.3rem;
  margin-block-end: 2rem;
}

main #resultaten.idee_overzicht .resultaat {
  background-color: transparent;
}

main #resultaten.idee_overzicht div p {
  text-align: left;
}

main .resultaat img {
  inline-size: 100%;
}

main .grey_container .read img {
  inline-size: 100%;
}

/* EINDE MAIN */

/* FOOTER */

footer .grey_container {
  padding: 2rem 0 2rem 0;
}

footer .widget {
  text-align: center;
  margin-bottom: 2rem;
}

footer .widget img {
  inline-size: 40px;
  margin-top: 0.3rem;
}

footer .widget ul li {
  list-style-type: none;
}

footer .widget ul li a {
  color: black;
  text-decoration: none;
}
footer .widget ul li a:hover {
  color: white;
}

footer.section_footer {
  display: flex;
  justify-content: center;
  background-color: var(--kleur-oranje);
}

footer.section_footer p {
  font-weight: 400;
}
/* EINDE FOOTER */

/* UPLOADEN */
form {
  background-color: #fff;
  padding: 1.25rem;
  border-radius: 0.3rem;
  /* box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.1); */
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

input[type="text"],
textarea,
select {
  inline-size: 100%;
  padding: 0.62rem;
  margin-bottom: 0.94rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  block-size: 2.5rem;
}

select#selectie {
  background-color: var(--kleur-oranje);
}

input[type="submit"] {
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

input[type="submit"]:hover {
  background-color: var(--kleur-oranje);
}

section.uploaden_section .container--narrow .introtext {
  text-align: center;
  margin-block-end: 2rem;
}

section.uploaden_section form .submit_button {
  display: flex;
  justify-content: center;
}

/* IDEEBOX */
main .idee_box__btn {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 0.62rem 2.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0 0 1.5rem 0;
  cursor: pointer;
  border-radius: 1rem;
}
main .idee_box__btn:hover {
  cursor: pointer;
}

main .idee_box {
  display: flex;
  flex-direction: column;
  border: 1px solid #cacaca;
  box-shadow: 3px 3px 0.62rem #d5d0d0;
}

.container-center {
  inline-size: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.idee_overzicht {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;
}

.idee_box__top {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
}
.idee_box__date {
}
.idee_box__image {
}
.idee_box__image img {
  block-size: auto;
  inline-size: 100%;
}
.idee_box__tekst {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 1rem 2rem 1rem;
  text-align: center;
}
.idee_box__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}
/* EINDE IDEE BOX */

/* MEDIA QUERIES */

@media (min-width: 388px) {
  header section.hero-section h1 {
    font-size: 3.5rem;
  }
}
@media (min-width: 600px) {
  .usps {
    text-align: left;
  }

  main section.section_two .grey_container {
    text-align: left;
  }
}

@media (min-width: 768px) {
  header button.hamburger {
    display: none;
  }

  header .nav-menu {
    display: flex;
    position: static;
    background-color: transparent;
    inline-size: auto;
    text-align: left;
    flex-direction: row;
    gap: 2rem;
  }

  header .nav-menu ul {
    display: flex;
  }

  header .nav-menu.active {
    left: 0;
    position: static;
    background-color: transparent;
    inline-size: auto;
    text-align: left;
  }

  header section.hero-section {
    position: absolute;
    top: 8rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    inline-size: 100%;
  }

  header section.hero-section.uploaden {
    top: 9rem;
  }
 header section.hero-section p {
    margin-bottom: 1.5rem;
  }

  main .idee_box {
    flex-basis: calc(33.3333% - 4rem);
  }

  header section.hero-section h1 {
    font-size: 5rem;
  }
}

@media (min-width: 900px) {
  section.section_idee_one .text_left p {
    margin-bottom: 2rem;
  }
  .container--narrow {
    max-width: 63rem;
    margin-block-start: 3rem;
    margin-block-end: 3rem;
  }

  .idea_container.container--narrow {
    width: 63rem;
    text-align: center;
  }

  /* main {
    display: flex;
    justify-content: center;
  } */

  .img_middle img {
    inline-size: 18rem;
    margin: 0;
  }

  main .section_one {
    gap: 3rem;
  }

  main .section_one .text_left,
  main .section_one .img_middle,
  main .section_one .text_right {
    flex: 1;
  }

  main section.section_two {
    inline-size: 100%;
    /* display: flex;
    justify-content: center; */
  }

  main section.section_three {
    display: flex;
    justify-content: center;
  }

  main section.section_one .white_container,
  main section.section_three .white_container {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    gap: 3rem;
  }

  main section.section_two.container--grey {
    background-color: var(--kleur-container);
    display: flex;
    justify-content: center;
  }

  main section.section_two .grey_container {
    inline-size: 100%;
    display: flex;
    gap: 3rem;
    flex-direction: row;
    padding: 0;
    justify-content: center;
  }

  main section.section_three .img_middle,
  main section.section_three .text_right {
    flex: 1;
  }

  main section.section_three .img_middle img {
    object-fit: cover;
    inline-size: 100%;
  }

  main section.section_one .img_middle {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main section.section_three .text_right {
    padding: 0 0.94rem;
    box-sizing: border-box;
  }

  main .img_middle img,
  main section.section_three .img_middle img {
    inline-size: 100%;
    margin: 0;
  }

  main section.section_three {
    margin-bottom: 0;
  }

  footer .grey_container.container--narrow {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    inline-size: 100%;
  }

  footer .widget.widget_one {
    flex: 4;
  }

  footer .widget.widget_two,
  footer .widget.widget_three,
  footer .widget.widget_four {
    flex: 1;
  }

  footer .widget {
    text-align: left;
    margin-bottom: 0;
  }

  /* UPLOADEN */

  section.uploaden_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section.uploaden_section .container--narrow {
    inline-size: 63rem;
  }

  form {
    padding: 0;
  }

  #resultaten {
    display: flex;
    flex-direction: column; /* Zorg ervoor dat de items onder elkaar worden weergegeven */
    gap: 10px;
    inline-size: 63rem; /* Voeg wat ruimte tussen de items toe */
  }
}

@media (min-width: 1016px) {
  .usps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    inline-size: 100%;
  }

   .usps .usp {
    inline-size: 18rem;
    block-size: auto;
    background-color: white;
    box-shadow: 0.5rem 0.5rem 1rem #0000001c;
    padding: 1.5rem;
  }

  .usps .usp h3 {
    margin-block-end: 1rem;
  }
}
/* EINDE MEDIA QUERIES */

/* EINDE ALGEMEEN */</style>