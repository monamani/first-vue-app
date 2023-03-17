<template>
<li>
    <router-link  
        :to="`/${index}`"
        :class="activeClasses"
        class="nav-link"
        aria-current="page"
        :title= "`This link goes to ${page.link.text} page`"
    >
     {{page.link.text}}</router-link>
</li>
</template>
<script>
export default {
    props: ['page','isActive','index'],
    computed:{
        activeClasses() {
            return {
                active : this.isActive,
                emphasize:this.isActive
            }
        }
    }
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