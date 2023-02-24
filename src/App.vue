<template>
   <navbar
        :theme="theme"
        :change-theme="changeThemeMethod"
        :pages="pages" 
        :active-page="activePage" 
        :nav-link-click="(index) => activePage = index"  
    ></navbar>
   <page-viewer 
      :page="pages[activePage]"></page-viewer>

   <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>

import Navbar from './components/Navbar.vue'
import PageViewer from './components/PageViewer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PageViewer
  },
  data(){
    return {
      activePage:0,  
      theme: 'light',
      useDarknavbar:false,
      pages:[
          {
            title :"Hello , Home",
            description: "Welcome to Home example",
            link: {text:'Home',url:"index.html"} 
          },
          {
            title :"Hello , About",
            description: "Welcome to Aboput example",
            link:{text:'About',url:"about.html"}, 
          },
          {
            title :"Hello , Contact",
            description: "Welcome to Contact example",
            link:{text:'Contact',url:"contact.html"}
          },
      ]
    }
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
              changeThemeMethod(){
             
                let theme = 'light';
                if(this.theme == 'light'){
                  theme='dark';
                }

                this.theme=theme;

                console.log("-- change theme ")
                console.log(this.theme)
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
