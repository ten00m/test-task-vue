<script setup lang="ts">
    import type {Account} from '../types/Account';
    import {NButton, type FormValidationStatus} from 'naive-ui';
    import { NInput } from 'naive-ui';
    import { NSelect } from 'naive-ui';
    import {typesOfAccount} from '../types/Account';
    import { ref } from 'vue';
    import  {validateLogin, validatePassword} from '../composables/validation';
    import { useAccountsStore } from '@/stores/AccountsStore';

    interface Props{
        account: Account
    }
    const props = defineProps<Props>();

    const accountsStore = useAccountsStore();

    const markStr = ref<string>(props.account.mark.map(e => e.text).join(';'))

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

    const validate = (acc: Account) => {
        isValid.value.login = validateLogin(acc.login);
        isValid.value.pass = validatePassword(acc.password);
    }

    const updateAccounts = (account: Account) => {
        account.isValid = validateLogin(account.login) && validatePassword(account.password)
        if(account.isValid){
            accountsStore.updateAccountsInLc()
        }
    }

    const updateMark = (acc: Account) => {
        acc.mark = markStr.value.split(';').map(e => { return {text: e}})
    }


</script>

<template>
    <tr>
        <td>
            <NInput 
                v-model:value="markStr"
                placeholder="Метка"
                :maxlength="50"
                @blur="() => {
                    updateMark(account)
                    updateAccounts(account)
                }"
            />
        </td>
        <td>
            <NSelect
                v-model:value="account.type"
                :options="typesOfAccount"
                v-on:update:value="() => {
                    account.type === 'Локальная' ? account.password = '' : account.password = null 
                    validate(account)
                    updateAccounts(account)
                }"
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
                    validate(account)
                    updateAccounts(account)
                }"
                
            />
        </td>
        <td
            v-if="account.type === 'Локальная'" 
        >
            <NInput
                v-model:value="account.password"
                placeholder="Пароль"
                type="password"
                show-password-on="click"
                :maxlength="100"
                :status="getInputStatus(isValid.pass)"
                @blur="() => {
                    validate(account)
                    updateAccounts(account)
                }"
            />
        </td>
        <td>
            <NButton
                @click="(e) => {accountsStore.deleteAcc(account)}"
            >
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