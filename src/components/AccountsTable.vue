<script setup lang="ts">
    import type {Account} from '../types/Account'
    import AccountComp from './AccountComp.vue'


    defineProps({
        accounts: Array<Account>,
        columns: Array<string>
    })

    const columns = [
        'Метка',
        'Тип записи',
        'Логин',
        'Пароль',
        'Удалить'
    ]

</script>

<template>
    <table>
        <thead>
        <tr>
            <th v-for="column in columns">
                {{ column }}
            </th>
        </tr>
        </thead>
        <tbody>
            <AccountComp
                v-for="account in accounts"
                :account="account"
            />
        </tbody>
    </table>
</template>

<style scoped>
    table{
        width: 100%;
        margin-top: 20px;
    }
</style>