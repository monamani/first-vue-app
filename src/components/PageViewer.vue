<template>
    <div class="container">
        <h1 class="emphasize">{{page.title}}</h1>
        <p>{{page.description}}</p>
    </div>
</template>

<script>
export default {
    props:['page'],
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