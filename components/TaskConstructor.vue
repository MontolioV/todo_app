<template>
  <form @submit.prevent>
    <div class="input-group mb-3">
      <input
        v-model="description"
        type="text"
        class="form-control"
        placeholder="Type your TODO here"
        aria-label="Type your TODO here"
        aria-describedby="button-addon2"
        @keyup.enter="addTODO"
      >
      <div class="input-group-append">
        <button class="btn btn-secondary" type="button" @click="addTODO">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TaskConstructor',
  data() {
    return {
      description: '',
    };
  },
  computed: {
    ...mapGetters({
      nextId: 'Tasks/getNextID',
    }),
  },

  methods: {
    ...mapActions({ addTask: 'Tasks/addTask' }),
    addTODO() {
      const id = this.nextId;
      const newTask = {
        id,
        description: this.description,
        openTimestamp: new Date().getTime(),
        open: true,
      };
      this.addTask(newTask);
    },
  },
};
</script>

<style scoped>
</style>
