<template>
  <div class="container">
    <p>{{counter}}</p>
    <button @click.prevent="click">click here</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        counter: 1
      }
    },
   methods:{
    click(){
        this.counter++;
    }
  },
  }
</script>