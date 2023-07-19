<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- SCOPED SLOT -->
      <!-- Passing props to the component who uses this slot -->
      <!-- props from slots written in kebab-case will not be converted into camelCase 
        unlike props passed from component to component
      -->
      <slot :item="goal" another="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue!']
    };
  }
}
</script>

