<template>
    <div>
      <h2>Idee Details</h2>
      <div v-if="idee">
        <h3>Idee: {{ ideedetail.id }}</h3>
        <p><strong>Onderwerp: </strong>{{ idee.onderwerp }}</p>
        <p><strong>Idee: </strong>{{ idee.ideeArea }}</p>
        <p><strong>Afdeling: </strong>{{ idee.selectie }}</p>
      </div>
      <div v-else>
        <p>Dit idee kon niet worden gevonden.</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IdeeDetail',
  props: ['id'],
  data() {
    return {
      idee: null
    }
  },
  async created() {
    const response = await fetch(`http://localhost:3000/formulieren/${this.id}`);
    if (response.ok) {
      this.idee = await response.json();
    }
  }
}
</script>