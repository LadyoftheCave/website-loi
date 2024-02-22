<template>
    <div>
      <h1>{{ idee.onderwerp }}</h1>
      <p>{{ idee.ideeArea }}</p>
      <!-- andere details hier -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        idee: null
      }
    },
    async created() {
      const id = this.$route.params.id;
      const response = await fetch(`http://localhost:3000/formulieren/${id}`);
      if (response.ok) {
        this.idee = await response.json();
      }
    }
  }
  </script>