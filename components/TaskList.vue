<template>
  <div class="d-flex flex-column">
    <Task
      v-for="task in tasksArray"
      :key="task.id"
      :task="task"
      class="item"
    />
  </div>
</template>

<script>
import Task from './Task';

export default {
  name: 'TaskList',
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Object,
      default: function() {
        return {};
      },
    },
    limit: {
      type: Number,
      default: 0,
    },
    taskFilterCb: {
      type: Function,
      default: () => true,
    },
    taskSortCb: {
      type: Function,
      default: (task1, task2) => {
        let diff = task2.openTimestamp - task1.openTimestamp;
        if (diff > 0) {
          diff = 1;
        } else if (diff < 0) {
          diff = -1;
        }
        return diff;
      },
    },
  },
  computed: {
    tasksArray() {
      const result = Object.keys(this.tasks)
        .map(value => this.tasks[value])
        .filter(this.taskFilterCb)
        .sort(this.taskSortCb);
      if (this.limit > 0) {
        return result.slice(0, this.limit);
      }
      return result;
    },
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>
