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
      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col">
          {{ t.action }}
        </div>
        <div class="col-2">
          <input type="checkbox" name="" v-model="t.done" class="form-check-input">
          {{ t.done }}
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
      ]
    }
  }
}
</script>
