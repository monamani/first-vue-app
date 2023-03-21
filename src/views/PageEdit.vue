<template>
    <div class="container">
        <hr>
        <h2>Edit Page {{props.index}}</h2>
    </div>
</template>

<script setup>
    // we will pass by props
    const props=defineProps(['index']);
</script>