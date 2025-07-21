<script setup lang="ts">
    import type {Account} from '../types/Account'
    import {NButton} from 'naive-ui'
    import { NInput } from 'naive-ui';
    import { NSelect } from 'naive-ui';
    import {typesOfAccount} from '../types/Account'

    defineProps({
        accounts: Array<Account>
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
            <tr v-for="account in accounts">
                <td>
                    <NInput 
                        v-model:value="account.mark" 
                        placeholder="Метка"
                    />
                </td>
                <td>
                    <NSelect
                        v-model:value="account.type"
                        :options="typesOfAccount"
                    />
                </td>
                <td>
                    <NInput 
                        v-model:value="account.login" 
                        placeholder="Логин"
                        :maxlength="50"
                    />
                </td>
                <td>
                    <NInput 
                        v-model:value="account.password"
                        placeholder="Метка"
                        type="password"
                        show-password-on="click"
                        :maxlength="50"
                    />
                </td>
                <td>
                    <NButton>
                        del
                    </NButton>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table{
        width: 100%;
        margin-top: 20px;
    }
    td{
        text-align: center;
    }
    .n-select{
        border-radius: 20px;
        width: 200px;
        margin: auto;
    }
</style>