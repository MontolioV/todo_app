<template>
  <div class="d-flex flex-wrap">
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      class="item"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    tasks: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>
