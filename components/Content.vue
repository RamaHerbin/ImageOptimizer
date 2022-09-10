<template>
    <a-layout-content class="content">
        <Upload/>
        {{image}}
    </a-layout-content>
</template>

<script setup lang="ts">
const image = await $fetch('/api/image');

</script>

<style scoped>
.content {
    background-color: var(--color-fill-1);
    width: 100%;
    height: 100%;
}
</style>