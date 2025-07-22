import { defineStore } from 'pinia'
import type {Account} from '../types/Account'
import {ref} from 'vue'

export const useAccountStore = defineStore('accountStore', () => {
    const accounts = ref<Array<Account>>([]);
    const addAccount = () => {
        const newAccount: Account = {
            key: accounts.value.length,
            mark: '',
            type: 'Локальная',
            login: '',
            password: '',
        }
        accounts.value.push(newAccount);
    }

    return {
        accounts, addAccount
    }
})