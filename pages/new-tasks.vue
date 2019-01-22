<template>
  <section class="d-flex flex-column">
    <Todo-constructor class="constructor align-self-center" />
    <div class="d-flex">
      <TaskList
        :tasks="tasks"
        :task-filter-cb="openTasksFunk"
        :limit="3"
        style="width: 50%"
      />
      <TaskList
        :tasks="tasks"
        :task-filter-cb="closedTasksFunk"
        :task-sort-cb="compareCloseTSFunk"
        :limit="4"
        style="width: 50%"
      />
    </div>
  </section>
</template>

<script>
import TaskList from '~/components/TaskList';
import TodoConstructor from '~/components/TaskConstructor';
import { mapGetters } from 'vuex';

export default {
  components: {
    TaskList,
    TodoConstructor,
  },
  computed: {
    ...mapGetters({
      tasks: 'Tasks/getTasks',
    }),
    openTasksFunk() {
      return task => {
        return task.open;
      };
    },
    closedTasksFunk() {
      return task => {
        return !task.open;
      };
    },
    compareCloseTSFunk() {
      return (task1, task2) => {
        let diff = task2.closeTimestamp - task1.closeTimestamp;
        if (diff > 0) {
          diff = 1;
        } else if (diff < 0) {
          diff = -1;
        }
        return diff;
      };
    },
  },
};
</script>

<style scoped>
.constructor {
  width: 400px;
  margin: 20px;
}
</style>
