<template>
  <div id="app">
    <h4 class="bg-primary text-white text-center p-2 rounded-pill">
      {{ name }}'s To Do List
    </h4>

    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">
          Task  
        </div>
        <div class="col-2 font-weight-bold">
          Done
        </div>
      </div>
      <div class="row" v-for="t in filteredTasks" v-bind:key="t.action">
        <div class="col">
          {{ t.action }}
        </div>
        <div class="col-2 text-center">
          <input type="checkbox" name="" v-model="t.done" class="form-check-input">
          {{ t.done }}
        </div>
      </div>
      
      <div class="row bg-secondary py-2 mt02 text-white">
        <div class="col text-center">
          <input type="checkbox" v-model="hideCompleted" class="form-check-input" />
          <label class="form-check-label font-weight-bold">
            Hide completed tasks
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      name: 'Toby',
      tasks: [
        {action: 'Buy book', done: false},
        {action: 'Exercise Sql basic', done: false},
        {action: 'Write Some Vue Demo', done: true},
        {action: 'Call Toby', done: false},
      ],
      hideCompleted: true
    }
  },
  computed:{
    filteredTasks(){
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks
    }
  }
}
</script>
