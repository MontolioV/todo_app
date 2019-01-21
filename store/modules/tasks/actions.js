import { REPLACE_TASK, DELETE_TASK } from './mutation-types';

export default {
  addTask({ commit }, task) {
    commit(REPLACE_TASK, task);
  },

  editTask({ commit }, task) {
    commit(REPLACE_TASK, task);
  },

  deleteTask({ commit }, id) {
    commit(DELETE_TASK, id);
  },
};
