<template>
  <div class="container">
    <p>{{data.counter}}</p>
    <button @click.prevent="clickReactive">click here</button>
  </div>
</template>

<script setup>
// SETUP for VS 3 will use setup iunstead of function setup with different params on vue2
// need to tell that value is reactive so will be change it on the page
import {ref, reactive} from 'vue';
// With reactive object or data
const data = reactive({counter:0}) // will use reactive when it s object , data
function clickReactive(){
  //counter++;
 // will change it to counter.value
  data.counter++;
  console.log(counter)
}

// with ref example
let counter = ref(0); // {value:0}
function clickRef(){
  //counter++;
 // will change it to counter.value
  counter.value++;
  console.log(counter)
}
// THis is one solution for click btn 
  // export default {
  //   data(){
  //     return {
  //       counter: 1
  //     }
  //   },
  //  methods:{
  //   click(){
  //       this.counter++;
  //   }
  // },
  // }
</script>