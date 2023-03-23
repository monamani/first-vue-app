<template>
    <div class="container mb-3 text-start">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-lavel">
                    Page Title
                </label>
                <!--With vue for 2 way binding [between form and data] and to set the 
                value of input we use v-model -->
                <input 
                type="text" 
                class="form-control" 
                v-model="pageTitle">
            </div>
            <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="" class="form-lavel">Link Title</label>
                     <input 
                     type="text" 
                     class="form-control" 
                     v-model="linkText" disabled>
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
                 v-model="pageContent"
                 rows="5"></textarea>
            </div>
            <div class="form-check mb-3">
                 <input type="checkbox" class="form-check-input" v-model="published">
                 <label for="gridCheck1" class="form-check-label" >Published</label>
            </div>
  
           
            <div class="mb-3">
                <button class="btn btn-primary"
                :disabled="isFormInvalid"
                 @click.prevent="submitForm">Create Page</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {inject,ref,computed,watch} from 'vue';
import {useRouter} from 'vue-router';

const bus = inject('$bus');
const pages = inject('$pages');
const router = useRouter();

let pageTitle = ref('');
let pageContent = ref('');
let linkText= ref('');
let linkUrl = ref('');
let published= ref(true);

function submitForm(){
  let newPage = {
      title: pageTitle.value,
      description: pageContent.value,
      link:{
            text:linkText.value
       },
       published : published.value
    };
    pages.addPage(newPage);
    bus.$emit('page-created',newPage);
    router.push({path:'/pages'});
}

const isFormInvalid = computed(()=> !pageTitle || !pageContent || !linkText || !linkUrl);

// the value to watch should be created by ref ou reactive

watch(pageTitle,(newTitle,oldTitle) =>{
        if(linkText.value == oldTitle){
            linkText.value=newTitle;
        }
      });
</script> 
 