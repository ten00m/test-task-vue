import { defineStore } from 'pinia'
import type {Account} from '../types/Account'
import {ref} from 'vue'

export const useAccountsStore = defineStore('accountStore', () => {
    let accounts = ref<Array<Account>>([]);
    const accountsInLS = localStorage.getItem('accounts');

    if(accountsInLS){
        accounts.value = JSON.parse(accountsInLS);
    }

    const addNewAccount = () => {
        const newAccount: Account = {
            key: accounts.value.length,
            mark: '',
            type: 'Локальная',
            login: '',
            password: '',
            isValid: false,
        }
        accounts.value.push(newAccount);
    }

    const updateAccountsInLc = (acc: Account) => {
        const validatedAccs: Array<Account> = accounts.value.filter(acc => acc.isValid);
        localStorage.setItem('accounts', JSON.stringify(validatedAccs))
    }

    const changeIsValid = (acc: Account, isValid: boolean) => {
        accounts.value[acc.key].isValid = isValid
    }

    return {
        accounts, addNewAccount, updateAccountsInLc, changeIsValid
    }
})