<template>
  <section class="d-flex flex-column">
    <Todo-constructor />
    <TodoList :tasks="tasks" />
  </section>
</template>

<script>
import TodoList from '~/components/TodoList';
import TodoConstructor from '~/components/TodoConstructor';
import { mapGetters } from 'vuex';

export default {
  name: 'Tasks',
  components: {
    TodoList,
    TodoConstructor,
  },
  computed: {
    ...mapGetters({
      tasks: 'Tasks/getTasks',
    }),
  },
};
</script>

<style scoped>
</style>
