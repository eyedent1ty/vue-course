<template>
  <the-header></the-header>
  <badge-list></badge-list>
  <user-info
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
  ></user-info>
  <course-goals>
    <template #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.another }}</p>
    </template>
  </course-goals>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  // Vue automatically convert these components into kebab case
  // Local component
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>