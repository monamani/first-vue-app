<template>
    <div class="container">
        <hr>
        <h2>Edit Page {{props.index}} {{route.params.index}}</h2>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// Method 2 using the route params and remove "prpos true from routes"
const route  =useRoute(); 
//Method 1 we will pass by props
const props=defineProps(['index']);
</script>