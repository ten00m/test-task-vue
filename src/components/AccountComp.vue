<script setup lang="ts">
    import type {Account} from '../types/Account'
    import {NButton, type FormValidationStatus} from 'naive-ui'
    import { NInput } from 'naive-ui';
    import { NSelect } from 'naive-ui';
    import {typesOfAccount} from '../types/Account'
    import { ref } from 'vue';
    import  {validateLogin, validatePassword} from '../composables/validation'
    import { useAccountsStore } from '@/stores/AccountsStore';
    interface Props{
        account: Account
    }

    defineProps<Props>();

    const accountsStore = useAccountsStore();

    type IsValid = {
        pass: boolean;
        login: boolean
    }

    const isValid = ref<IsValid>({
        pass: true,
        login: true
    })

    const getInputStatus = (isValid: boolean): FormValidationStatus => {
        return isValid ? 'success' : 'error'
    }

    const updateAccounts = (account: Account) => {
        account.isValid = validateLogin(account.login) && validatePassword(account.password)
        if(account.isValid){
            accountsStore.updateAccountsInLc(account)
        }
    }

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
        <td
            :colspan="account.type === 'Локальная' ? 1 : 2" 
        >
            <NInput 
                v-model:value="account.login" 
                placeholder="Логин"
                :maxlength="100"
                :status="getInputStatus(isValid.login)"
                @blur="() => {
                    isValid.login = validateLogin(account.login)
                    updateAccounts(account)
                }"
                
            />
        </td>
        <td
            v-if="account.type === 'Локальная'" 
        >
            <NInput
                v-model:value="account.password"
                placeholder="Метка"
                type="password"
                show-password-on="click"
                :maxlength="100"
                :status="getInputStatus(isValid.pass)"
                @blur="() => {
                    isValid.pass = validatePassword(account.password);
                    updateAccounts(account)
                }"
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