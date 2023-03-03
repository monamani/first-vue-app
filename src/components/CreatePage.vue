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
                     v-model="linkText">
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="" class="form-lavel">Link Url</label>
                     <input 
                     type="text" 
                     class="form-control" 
                     v-model="linkUrl">
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
                 <input type="checkbox" class="form-check-input">
                 <label for="gridCheck1" class="form-check-label">Published</label>
            </div>
  
           
            <div class="mb-3">
                <button class="btn btn-primary"
                :disabled="isFormInvalid"
                 @click.prevent="submitForm">Create Page</button>
            </div>
        </form>
    </div>
</template>
<script>
 
export default ({
    props:['pageCreated'],
    computed:{
      isFormInvalid(){
        return !this.pageTitle || !this.pageContent || !this.linkText || !this.linkUrl;
      }
    },
    data(){
        // set element - init state
        return {
            pageTitle :'',
            pageContent :'',
            linkText:'',
            linkUrl :''
        }
    },
    methods:{
      submitForm(){
       /*
       we pass it to computed part
       if(!this.pageTitle || !this.pageContent || !this.linkText || !this.linkUrl){
          alert(' Please fill the form')
          return;
        }*/
        this.pageCreated({
          pageTitle: this.pageTitle,
          pageContent:this.pageContent,
          link:{
            text: this.linkText,
            url: this.linkUrl
          }
        })
      },
     
    }
})
</script>
