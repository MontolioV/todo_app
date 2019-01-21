export default {
  getTasks(state) {
    return state.tasks;
  },
  getNextID(state) {
    const keys = Object.keys(state.tasks);
    let lastId = keys.reduce((acc, cur) => (cur > acc ? cur : acc), 0);
    return ++lastId;
  },
};
