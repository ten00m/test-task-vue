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
            mark: [],
            type: 'Локальная',
            login: '',
            password: '',
            isValid: false,
        }
        accounts.value.push(newAccount);
    }

    const updateAccountsInLc = (): void => {
        const validatedAccs: Array<Account> = accounts.value.filter(acc => acc.isValid);
        console.log(validatedAccs[0].mark)
        localStorage.setItem('accounts', JSON.stringify(validatedAccs))
    }

    const deleteAcc =  (acc: Account): void => {
        accounts.value = [...accounts.value.slice(0, acc.key), ...accounts.value.slice(acc.key + 1)]
        updateAccountsInLc()
    }

    return {
        accounts, addNewAccount, updateAccountsInLc, deleteAcc
    }
})