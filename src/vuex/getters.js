const getters = {
  doneTodos: state => state.todos.filter(item => item.done),
};

export default getters;
