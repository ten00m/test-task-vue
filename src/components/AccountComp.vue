<script setup lang="ts">
    import type {Account} from '../types/Account'
    import {NButton} from 'naive-ui'
    import { NInput } from 'naive-ui';
    import { NSelect } from 'naive-ui';
    import {typesOfAccount} from '../types/Account'

    interface Props{
        account: Account
    }

    defineProps<Props>();

</script>

<template>
    <tr>
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
</template>
<style scoped>
    td{
        text-align: center;
    }
</style>