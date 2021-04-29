<template>
  <div>
    <h1>Tasks</h1>
    <hr />

    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>№</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Open task</th>
          <th>Delete task</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) of tasks" :key="task.id">
          <td>{{ index + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td>
            <div>{{ task.description }}</div>
          </td>
          <td>
            <router-link tag="button" class="btn" :to="'tasks/' + task.id">
              Open task
            </router-link>
          </td>
          <td>
            <button class="btn delete" @click="delTask(index)">
              Delete task
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No tasks yet</p>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
  },
  methods: {
    delTask(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.delete {
  background: #ff0000;
}
</style>
