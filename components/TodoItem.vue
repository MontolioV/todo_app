<template>
  <div class="card" :class="{ open: task.open }">
    <div class="card-body">
      <h5 v-if="task.open" class="card-title">
        Open task
      </h5>
      <h5 v-else class="card-title">
        Closed task
      </h5>

      <p class="card-text">
        {{ dateTimeInterval }}
      </p>
      <p class="card-text">
        {{ task.description }}
      </p>
      <div
        v-if="task.open"
        class="d-flex"
      >
        <b-button
          class="btn btn-success"
          @click="closeTask"
        >
          Close task
        </b-button>

        <b-button
          class="btn btn-danger"
          @click="deleteTask(task.id)"
        >
          Remove task
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dateTimeInterval() {
      const format = 'DD.MM.YYYY HH:mm';
      const start = moment(this.task.openTimestamp).format(format);
      const end = this.task.closeTimestamp
        ? moment(this.task.closeTimestamp).format(format)
        : null;
      return end ? `${start} -> ${end}` : start;
    },
  },
  methods: {
    ...mapActions({
      editTask: 'Tasks/editTask',
      deleteTask: 'Tasks/deleteTask',
    }),
    closeTask() {
      this.task.open = false;
      this.task.closeTimestamp = new Date();
      this.editTask(this.task);
      // Trigger recompute
      this.task = { ...this.task };
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 300px;
}
.card.open {
  .card-title {
    color: dodgerblue;
  }
}
</style>
