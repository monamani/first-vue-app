<template>
    <div class="container">
        <hr>
        <h2>Edit {{page.title}} <br>Props: {{props.index}} Form Route {{route.params.index}}</h2>
        <hr>
       <form action="" class="text-start">
            <div class="mb-3">
                <label for="" class="form-lavel">
                    Page Title
                </label>
                <!--With vue for 2 way binding [between form and data] and to set the 
                value of input we use v-model -->
                <input 
                type="text" 
                class="form-control" 
                v-model="page.title">
            </div>
            <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="" class="form-lavel">Link Title</label>
                     <input 
                     type="text" 
                     class="form-control" 
                     v-model="page.link.text" disabled>
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="" class="form-lavel">Link Url</label>
                     <input 
                     type="text" 
                     class="form-control" 
                     v-model="page.link.url" >
                  </div>
                </div>
            </div>
             <div class="mb-3">
                <label for="" class="form-lavel">
                    Content
                </label>
                <textarea 
                type="text"
                 class="form-control" 
                 v-model="page.description"
                 rows="5"></textarea>
            </div>
            <div class="form-check mb-3">
                 <input type="checkbox" class="form-check-input" v-model="page.published">
                 <label for="gridCheck1" class="form-check-label" >Published</label>
            </div>
  
           
            <div class="mb-3">
                <button class="btn btn-primary"
                 @click.prevent="submitForm">Update page</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject } from 'vue';
// Method 2 using the route params and remove "prpos true from routes"
const route  = useRoute(); 
//Method 1 we will pass by props
const props=defineProps(['index']);
const pages= inject('$pages');
let page = pages.getSinglePage(props.index)

function submitForm(){
    pages.editPage(props.index,page);
}
</script>