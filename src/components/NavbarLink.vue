<template>
      <a 
            class="nav-link"
               :href="page.link.url" 
               :title= "`This link goes to ${page.link.text} page`"
               @click.prevent="navLinkClick(index)" >
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