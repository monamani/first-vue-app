<template>
    <nav :class="[`navbar-${theme}` , `bg-${theme}` , 'navbar' , 'navbar-expand-lg']">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Vue</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">   
               <navbar-link 
                  v-for="(page,index) in publishedPages" 
                  :key="index" 
                  class="nav-item"
                 :page="page"
                 :index="index"
                 :isActive="activePage === index "
               >
               </navbar-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0"
                  @click.prevent="changeTheme()">Change theme</button>
         </form>
      </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
    components: {
       NavbarLink
    },
    created(){
      this.getThemeSettings();
    },
    computed:{
      publishedPages(){
        // on the menu we will show only the published menus
        return this.pages.filter(p=>p.published);
      }

    },
    props:['pages','activePage'],
    data(){
      // when init state
      return{
        theme:'light'
      }
    },
    methods: {
      // change theme method
      changeTheme(){
        let theme = 'light';
        if(this.theme == 'light'){
          theme='dark';
        }
        this.theme=theme;
        this.storeThemeStetting();
      },
      // local storage for settings
      storeThemeStetting(){
        localStorage.setItem('theme',this.theme)
      },
      getThemeSettings(){
        let theme = localStorage.getItem('theme')
        if(theme){
          this.theme=theme
        }
      }
    }
}
</script>