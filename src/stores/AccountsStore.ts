import { defineStore } from 'pinia'
import type {Account} from '../types/Account'
import {ref} from 'vue'

export const useAccountStore = defineStore('accountStore', () => {
    let accounts = ref<Array<Account>>([]);
    const accountsInLS = localStorage.getItem('accounts');

    if(accountsInLS){
        accounts = JSON.parse(accountsInLS);
    }

    const addNewAccount = () => {
        const newAccount: Account = {
            key: accounts.value.length,
            mark: '',
            type: 'Локальная',
            login: '',
            password: '',
        }
        accounts.value.push(newAccount);
    }

    const updateAccount = (acc: Account) => {

    }

    return {
        accounts, addNewAccount
    }
})