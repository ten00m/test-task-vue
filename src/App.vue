<script setup lang="ts">
    import Header from './components/Header.vue'
    import AccountTable from './components/AccountsTable.vue'
    import type { Account } from './types/Account';
    import { ref } from 'vue';
    import { useAccountStore } from './stores/AccountsStore';

    const accountStore = useAccountStore()

    const columns = [
        'Метка',
        'Тип записи',
        'Логин',
        'Пароль',
        'Удалить'
    ]
    
</script>

<template>
    <main>
        <div class="accounts">
            <Header 
                :create-account-template="accountStore.addNewAccount" 
            />
            <AccountTable 
                :accounts="accountStore.accounts"
                :columns="columns"
            />
        </div>
    </main>
</template>

<style scoped>
    .accounts{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1100px;
        min-height: 0px;
        border: 2px solid gray;
        padding: 10px;
        border-radius: 10px;
        transition: height .5s;
    }
</style>
