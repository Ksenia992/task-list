import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    updateTask(state, { id, description, date }) {
      const tasks = state.tasks.concat()
      const index = tasks.findIndex((task) => task.id === id)
      const task = tasks[index]
      tasks[index] = { ...task, date, description }
      state.tasks = tasks
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit("addTask", task)
    },
    updateTask({ commit }, task) {
      commit("updateTask", task)
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    taskById: (state) => (id) => state.tasks.find((task) => task.id === id),
  },
})
