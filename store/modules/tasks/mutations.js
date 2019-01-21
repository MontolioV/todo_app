import Vue from 'vue';
import { REPLACE_TASK, DELETE_TASK } from './mutation-types';

export default {
  [REPLACE_TASK](state, task) {
    Vue.set(state.tasks, task.id, task);
  },
  [DELETE_TASK](state, id) {
    Vue.delete(state.tasks, id);
  },
};
