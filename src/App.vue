<script setup lang="ts">
    import Header from './components/Header.vue'
</script>

<template>
    <main>
        <div class="accounts">
            <Header></Header>
        </div>
    </main>
</template>

<style scoped>
    .accounts{
        width: 500px;
        height: 200px;
        border: 2px solid gray;
        padding: 10px;
        border-radius: 10px;
    }
</style>
