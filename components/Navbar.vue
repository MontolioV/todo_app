<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nuxt-link 
      :to="{name:'index'}"
      class="navbar-brand"
    >
      TODO list
    </nuxt-link>

    <div 
      id="navbarRouting"
      class="collapse navbar-collapse order-1"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link
            :to="{name:'tasks'}"
            class="nav-link"
          >
            Tasks
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
</style>
