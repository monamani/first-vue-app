<template>
      <a  class="nav-link"
          :class="activeClasses"
          aria-current="page"
          :href="page.link.text"
          :title= "`This link goes to ${page.link.text} page`"
         >
          {{page.link.text}}</a>
</template>
<script>
export default {
    props: ['page','isActive'],
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