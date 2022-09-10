<template>
    <a-page-header
      :style="{ background: 'var(--color-bg-2)', padding: '28px' }"
      title="Image Optimizer ®"
      subtitle="An new web tool"
      :show-back="false"
    >
      <template #extra>
        <a-button type="dashed">{{time}}</a-button>

        <ThemeButton></ThemeButton>

      </template>
    </a-page-header>
</template>

<script setup lang="ts">

const time = await $fetch('/api/test');

</script>

<style scoped></style>
