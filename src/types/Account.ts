export interface Account{
    key: number;
    mark: string[];
    type: TypeOfAccount;
    login: string;
    password: string | null;
    isValid: boolean
}

export type TypeOfAccount = 'LDAP' | 'Локальная'

type options = {
    label: string;
    value: string;
    disabled?: boolean
}
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