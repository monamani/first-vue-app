<template>
    <div v-if="page" class="container">
      <p>We are on the inex : {{$route.params.index}}</p>
        <h1 class="emphasize">{{page.title}}</h1>
        <p>{{page.description}}</p>
    </div>
</template>

<script>
export default {
    created(){
      console.log("Index NUmber"+this.$route.params.index)
      this.page = this.$pages.getSinglePage(this.$route.params.index)
    },
    
    data(){
      return {
        page: null
      }
    },
    watch:{

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