export interface Account{
    key: number;
    mark: Mark[];
    type: TypeOfAccount;
    login: string;
    password: string | null;
    isValid: boolean
}

type Mark = {
    text: string
}

type options = {
    label: string;
    value: string;
    disabled?: boolean
}

export type TypeOfAccount = 'LDAP' | 'Локальная'

export const typesOfAccount: Array<options> = [
    {
        label: 'LDAP',
        value: 'LDAP'
    },
    {
        label: 'Локальная',
        value: 'Локальная'
    }
]