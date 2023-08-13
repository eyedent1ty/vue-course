<template>
  <section>
    <base-card>
      <h3>{{ fullName }}</h3>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="coachContactLink">Contact</base-button>
      </header>
    </base-card>
    <router-view></router-view>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      const { firstName, lastName } = this.selectedCoach;
      return `${firstName} ${lastName}`;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    coachContactLink() {
      return `/coaches/${this.id}/contact`;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/findCoach'](this.id);
  }
};
</script>
