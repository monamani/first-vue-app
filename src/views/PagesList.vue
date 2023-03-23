<template>
  <div class="spacer40"></div>
  <hr>
  <div class="container text-start">
    <div class="row">
      <div class="col-md-4"> <p>Example of btn click with increment counter <b>{{data.counter}}</b></p></div>
      <div class="col-md-8"> <button @click.prevent="clickReactive" class="btn btn-primary">click here</button></div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-4">  <p>Let's add new page :</p></div>
      <div class="col-md-8"> <router-link to="/pages/create" class="btn btn-success">
    Add new page</router-link></div>
    </div>
  </div> 
  <hr>
  <h4 class="text-start">Pages</h4>
  <div class="spacer20"></div>
  <table class="table table-hover text-start">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link text</th>
        <th>Is published</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="(page,index) in $pages.getAllPages()" 
        :key="index" @click="goToPage(index)">
        <td>{{page.title}}</td>
        <td>{{page.link.text}}</td>
         <td>{{page.published ? 'yes':'no'}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
// SETUP for VS 3 will use setup iunstead of function setup with different params on vue2
// need to tell that value is reactive so will be change it on the page
import {ref, reactive,inject} from 'vue';
import {useRouter} from 'vue-router';
// With reactive object or data
const data = reactive({counter:0}) // will use reactive when it s object , data
const $pages = inject('$pages')
const router= useRouter();

function goToPage(index){
  router.push({path:`pages/${index}/edit`});
}

function clickReactive(){
  //counter++;
 // will change it to counter.value
  data.counter++;
 
}
// with ref example
let counter = ref(0); // {value:0}
function clickRef(){
  //counter++;
 // will change it to counter.value
  counter.value ++;
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
<style>
.spacer20{
  height: 20px;
}
.table.table-hover tr:hover{
  cursor: pointer;
}
</style>