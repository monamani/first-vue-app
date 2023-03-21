<template>
    <navbar></navbar>
    <router-view></router-view>
    <!-- Here instead of :page-created we will make it as event ==> need to add emit on the component-->
    <!--create-page @page-created="pageCreated">
    </create-page>
    <page-viewer 
     v-if="pages.length>0"
      :page="pages[activePage]"></page-viewer-->
  
   <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>

import Navbar from './components/Navbar.vue'
 // To load data , need to check if it s already loaded or not 
// we can use if() :  v-if="pages.length>0" on page-viewer on the app or inititalize the object on the props comonent page
export default {
  name: 'App',
  components: {
    Navbar,
  
  },
  // now like set State 
  computed : {
    navBarClasses(){
      return {
          'navbar-light': !this.useDarknavbar,
          'bg-light': !this.useDarknavbar,
          'navbar-dark': this.useDarknavbar,
          'bg-dark': this.useDarknavbar,
      }
    }
  }, 
  methods:{
    pageCreated(pageObj){
      console.log(pageObj)
      this.pages.push(pageObj)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#app img {
  margin-top:50px;
}

</style>
