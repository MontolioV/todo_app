<template>
  <TaskList v-if="allTasks" :tasks="tasks" />
  <TaskList v-else :tasks="tasks" :task-filter-cb="searchTasksFunk" />
</template>

<script>
import TaskList from '~/components/TaskList';
import { mapGetters } from 'vuex';

export default {
  name: 'Tasks',
  components: {
    TaskList,
  },
  computed: {
    ...mapGetters({
      tasks: 'Tasks/getTasks',
    }),
    allTasks() {
      return !this.$route.query.search;
    },
    searchTasksFunk() {
      const searchString = this.$route.query.search;
      return task => {
        return task.description.includes(searchString);
      };
    },
  },
};
</script>

<style scoped>
</style>
