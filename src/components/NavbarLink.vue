<template>
<li>
    <router-link  
        :to="`/${index}`"
        active-class="active emphasize"
        class="nav-link"
        aria-current="page"
        :title= "`This link goes to ${page.link.text} page`"
    >  {{page.link.text}}</router-link>
</li>
</template>
<script>
export default {
    props: ['page','index']
}
</script>
 
<style scoped>
/** 
 All style will be applicable to the parent also 
 So to avoid that we add scoped
 */
  .emphasize{
    text-decoration: underline;
  }
</style>