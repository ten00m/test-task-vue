<script setup lang="ts">
    import {NButton} from 'naive-ui'
    import {NPageHeader} from 'naive-ui'
</script>
<template>
    <div class="accounts-header">
        <h1>Учетные записи</h1>
        <NButton>+</NButton>
    </div>
</template>
<style scoped>
    h1{
        font-size: 20px;
        width: 150px;
    }
    .accounts-header{
        display: flex;
        flex-direction: row;
        width: 200px;
        justify-content: space-between;
        align-items: end;
    }

</style>
