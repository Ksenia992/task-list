<template>
  <nav class="teal accent-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Lists</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link 
        tag="li" 
        to="/" 
        exact 
        active-class="active"
        >
          <a href="#">Create task</a>
        </router-link>
        <router-link 
        tag="li" 
        to="/tasks" 
        active-class="active"
        >
          <a href="#">Tasks</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
 nav {
   padding:0 36px;
 }
</style>
