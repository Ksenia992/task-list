<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>
      <form @submit.prevent="createTask">
        <div class="input-field">
          <textarea
            style="min-height:70px"
            v-model="description"
            id="description"
            class="materialize-textarea"
          ></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;"
            >{{ description.length }}/100</span
          >
        </div>
        <input type="text" ref="datepicker" />
        <button class="btn" ref="btn" type="submit">Update task</button>
      </form>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    },
  },
  data: () => ({
    description: "",
    date: null,
  }),
  mounted() {
    this.description = this.task.description
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(this.task.date),
      setDefaultDate: true,
    })
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    createTask() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        description: this.description,
        date: this.date.date,
      })
      this.$router.push("/tasks")
    },
    checkValue() {
      if (description.value.length > 100) {
        this.$refs.btn.disabled = true
      } else {
        this.$refs.btn.disabled = false
      }
    },
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
  },
}
</script>
