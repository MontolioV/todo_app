<template>
  <div class="input-group mb-3">
    <input
      v-model="description"
      type="text"
      class="form-control"
      placeholder="Type your TODO here"
      aria-label="Type your TODO here"
      aria-describedby="button-addon2"
    >
    <div class="input-group-append">
      <b-button id="button-addon2" class="btn btn-outline-secondary" type="button" @click="addTODO">
        Add
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodoConstructor',
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
        openTimestamp: new Date(),
        open: true,
      };
      this.addTask(newTask);
    },
  },
};
</script>

<style scoped>
</style>
