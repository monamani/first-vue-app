<template>
    <nav :class="[`navbar-${theme}` , `bg-${theme}` , 'navbar' , 'navbar-expand-lg']">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Vue</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">   
          <li v-for="(page,index) in pages" :key="index" 
          :class="{active:activePage == index}"  
          class="nav-item"> 
               <navbar-link
                 :page="page"
                 :isActive="activePage === index "
               >
               </navbar-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0"
                  @click.prevent="changeTheme">Change theme - Method</button>

         </form>
      </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
    props:['pages','activePage','navLinkClick','theme','changeTheme'], 
}
</script>