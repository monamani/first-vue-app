<template>
    <div v-if="page" class="container">
      <p>We are on the inex : {{$route.params.index}}</p>
        <h1 class="emphasize">{{page.title}}</h1>
        <p>{{page.description}}</p>
    </div>
</template>

<script>
 
export default {
    props: ["index"],
    created(){
      this.page = this.$pages.getSinglePage(this.index)
      console.log("Index NUmber"+this.$route.params.index)
     // this.page = this.$pages.getSinglePage(this.$route.params.index)

      // first way
    // we add it to notice the change so we can upload the new content when we click on link 
    // and get values
     /* this.$watch(() => this.$route.params,(newParams, oldParms) => {
        this.page = this.$pages.getSinglePage(newParams.index);
      })*/
    },
    data(){
      return {
        page: null
      }
    },
    watch:{
      index(newIndex,oldIndex){
        this.page=this.$pages.getSinglePage(newIndex)
      }
    }

    //  props:['page'],
    // Second Method to fix undefined object while data is loadingg
    // else will use the first Method with if
  /* props :{
     page : {
       type: Object,
       default(rawProps){
         return {
           pageTitle :"test load",
           content:"tess"
         };
       }
     }
   }*/
}
</script>
<style>
/**
 * Here all classes are global to all the project
 */
  .emphasize{
    color:blue;
  }
</style>