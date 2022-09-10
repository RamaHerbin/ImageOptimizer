<template>
  <div>
    <a-upload class="upload" draggable action="/">
      <template #upload-button>
        <div class="upload__inner">
          <div>
            Drag the file here or
            <span style="color: #3370ff"> Click to upload</span>
          </div>
        </div>
      </template>
    </a-upload>
  </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>

    .upload__inner {
        background-color: var(--color-fill-2);
        color: var(--color-text-5);
        border: 1px dashed var(--color-fill-4);
        border-radius: 2;
        line-height: 158px;
        text-align: center;
    }

</style>
