<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>
      <form @submit.prevent="createTask">
        <div class="input-field">
          <input id="title" v-model="title" type="text" class="validate" required />
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div class="input-field">
          <textarea v-model="description" @input="checkValue" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;"
            >{{ description.length }}/100</span
          >
        </div>
        <input type="text" ref="datepicker">
        <button class="btn" ref="btn" type="submit">Create task</button>
      </form>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "create",
  data: () => ({
    description:'',
    title:'',
    date:null
  }),
  mounted () {
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date (),
      setDefaultDate:true
    })
  },
  methods: {
    createTask () {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        date:this.date.date
      }
      this.$store.dispatch('addTask', task)
      this.$router.push('/tasks')
    },
    checkValue () {
      if (description.value.length > 100) {
        this.$refs.btn.disabled=true
      } else { this.$refs.btn.disabled=false }
    }
  },
  destroyed() {
    if(this.date && this.date.destroy) {
      this.date.destroy()
    }
  }
}
</script>
