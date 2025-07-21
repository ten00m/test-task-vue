<script setup lang="ts">
    import type {Account} from '../types/Account'
    import {NButton, type FormValidationStatus} from 'naive-ui'
    import { NInput } from 'naive-ui';
    import { NSelect } from 'naive-ui';
    import {typesOfAccount} from '../types/Account'
    import { ref } from 'vue';
    import  {validateLogin, validatePassword} from '../composables/validation'

    interface Props{
        account: Account
    }

    type IsValid = {
        pass: boolean;
        login: boolean
    }

    const isValid = ref<IsValid>({
        pass: false,
        login: false
    })

    const getInputStatus = (isValid: boolean): FormValidationStatus => {
        return isValid ? 'success' : 'error'
    }

    defineProps<Props>();

</script>

<template>
    <tr>
        <td>
            <NInput 
                v-model:value="account.mark" 
                placeholder="Метка"
                :maxlength="50"
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
                :maxlength="100"
                :status="getInputStatus(isValid.login)"
                @blur="() => {isValid.login = validateLogin(account.login)}"
            />
        </td>
        <td>
            <NInput 
                v-model:value="account.password"
                placeholder="Метка"
                type="password"
                show-password-on="click"
                :maxlength="100"
                :status="getInputStatus(isValid.pass)"
                @blur="() => {isValid.pass = validatePassword(account.password)}"
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