<template>
    <div class="container">
        <button class="text-start btn btn-secondary" @click.prevent="goToPagesList">Back to List</button>
        <hr>
        <h2> {{page.title}} <br>Props: {{index}} </h2>
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
                <button class="btn btn-primary me-2"
                 @click.prevent="submit">Update page</button>
                <button class="btn btn-danger me-2"
                 @click.prevent="deletePage">Delete page</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import  { useRouter } from 'vue-router';
import { inject } from 'vue';
 
const router = useRouter();// to navigate  // here the router (push,... )
const pages= inject('$pages');
const bus = inject('$bus');

const {index}=defineProps(['index']);
let page = pages.getSinglePage(index)

function submit(){
    pages.editPage(index,page);
    // and we need to refresh the menu
    // we will update bus from global to provid and then inject it
    bus.$emit('page-updated', {
        index,
        page
    });
    goToPagesList();
}
function deletePage(){
    pages.removePage(index);
    bus.$emit('page-deleted', {index});
    goToPagesList(); 
}

function goToPagesList() {
    router.push({path:'/pages'});
}
</script>