<template>
<li>
    <a  class="nav-link"
          :class="activeClasses"
          aria-current="page"
          :href="page.link.url"
          :title= "`This link goes to ${page.link.text} page`"
           @click.prevent="$bus.$emit('navbarLinkActived',index)"
    >
     {{page.link.text}}</a>
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