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
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link
            :to="{name:'new-tasks'}"
            class="nav-link"
          >
            New tasks
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            :to="{name:'tasks'}"
            class="nav-link"
          >
            All tasks
          </nuxt-link>
        </li>
      </ul>
    </div>

    <form class="form-inline my-2 my-lg-0" @submit.prevent>
      <input
        v-model="searchStr"
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        @keyup.enter="searchRouting"
      >
    </form>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchStr: '',
    };
  },
  methods: {
    searchRouting() {
      this.$router.push({ path: 'tasks', query: { search: this.searchStr } });
    },
  },
};
</script>

<style scoped>
</style>
