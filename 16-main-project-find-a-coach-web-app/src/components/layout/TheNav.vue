<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/coaches">Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  border: 2px solid red;
}

ul {
  display: flex;
  list-style: none;
  justify-content: flex-end;
}

li {
  margin: 0 1rem;
}

a {
  padding: 0.7rem 1.2rem;
  background-color: red;
  text-decoration: none;
}
</style>