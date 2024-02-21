<template>
  <header>
    <nav>
      <router-link to="/">
        <img
          src="../assets/images/7067281.png"
          alt="Ideeenbus Logo"
          class="logo"
        />
      </router-link>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/uploaden" class="nav-link">Uploaden</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ideeen" class="nav-link">Ideeën</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ideeenbus" class="nav-link">Over Ideeënbus</router-link>
        </li>
      </ul>
      <button class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>

  
</template>

<script>
export default {
  name: "HeaderSite",
  methods: {
    toggleMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  }
};
</script>

<style scoped>

header {
  position: relative;
}
header .logo {
  inline-size: 130px;
  block-size: 32px;
  margin-inline-start: 1rem;
  padding: 0.5rem;
  box-sizing: unset;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding-inline-end: 1.5rem;
  padding-block-start: 0.3rem;
}


header picture img {
  inline-size: 100%;
}



.hamburger
{
  display: block;
  border: 0;
  background-color: var(--kleur-wit);
  cursor: pointer;
}

.hamburger .bar
{
  display: block;
  inline-size: 1.5625rem;
  block-size: 0.19rem;
  margin: 0.31rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: var(--kleur-zwart);
}

header li {
  list-style: none;
}



header picture img {
  inline-size: 100%;
}

header nav.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding-inline-end: 1.5rem;
  padding-block-start: 0.3rem;
}

@media (min-width: 768px) {
  header .nav-link
{
  color: black;
  text-decoration: none;
  font-weight: 600;
  text-transform:uppercase;

}







.hamburger
{
  display: none;
  border: 0;
  background-color: var(--kleur-wit);
  cursor: pointer;
}

header .nav-menu
{
    display: flex;
    position: static;
    background-color: transparent;
    inline-size: auto;
    text-align: left;
    flex-direction: row;
    gap: 2rem;
  }

}



</style>
