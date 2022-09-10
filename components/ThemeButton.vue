<template>
    <div>
        <a-button type="text" @click="changeTheme">
            <div v-if="darkMode">
                <icon-sun-fill />
            </div>
            <div v-else>
                <icon-moon-fill />
            </div>
            
        </a-button>
    </div>
</template>

<script setup lang="ts">

let darkMode = isDarkMode();

const changeTheme = (e) => {
    console.log('e :>> ', e);
    console.log('darkMode.value :>> ', darkMode.value);
    darkMode.value = !darkMode.value;
    darkMode.value ? document.body.setAttribute('arco-theme', 'dark') : document.body.removeAttribute('arco-theme');

}

</script>

<style scoped>

</style>