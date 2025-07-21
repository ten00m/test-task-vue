<script setup lang="ts">
    import {NButton} from 'naive-ui'
    import {NPageHeader} from 'naive-ui'
    import type { MaybeArray } from 'naive-ui/es/_utils';

    interface Props {
        createAccountTemplate: MaybeArray<(e: MouseEvent) => void> | undefined
    }

    const props = defineProps<Props>()

</script>
<template>
    <div class="accounts-header">
        <h1>Учетные записи</h1>
        <NButton
            v-on:click="createAccountTemplate"
        >+</NButton>
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
        align-self: baseline;
        width: 200px;
        justify-content: space-between;
        align-items: end;
    }

</style>
