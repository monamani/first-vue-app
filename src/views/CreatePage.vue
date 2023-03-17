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
                <div class="col">
                  <div class="mb-3">
                    <label for="" class="form-lavel">Link Url</label>
                     <input 
                     type="text" 
                     class="form-control" 
                     v-model="linkUrl" >
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
<script>
 
export default ({
  // declares events  names
    emits:[
      "pageCreated" 
    ],
  // popos to decalre functions used on the component called by parent/app
    // props:['pageCreated'], ==> when we will add event emit no need to pass the propos
    // we use computed  proporties return value use existing data 
    // doesnt make anything on the state 
    // this is like init state
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
        linkUrl :'',
        published:true
     }
    },
    methods:{
      resetForm(){
        this.pageTitle ='';
        this.pageContent ='';
        this.linkText='';
        this.linkUrl ='';
        this.published=true;
      },
      submitForm(){
       /*
       we pass it to computed part
       if(!this.pageTitle || !this.pageContent || !this.linkText || !this.linkUrl){
          alert(' Please fill the form')
          return;
        }*/
        this.$emit('pageCreated',{
          title: this.pageTitle,
          description:this.pageContent,
          link:{
            text: this.linkText,
            url: this.linkUrl
          },
          published : this.published
        }) ,
        this.resetForm()
      },
     
    },
    // This method to watch the change on the form on time of typing
    // help to set state and make a change
    watch : {
      pageTitle(newTitle,oldTitle){
        if(this.linkText == oldTitle){
          this.linkText=newTitle;
        }
      }
    }
})
</script>
