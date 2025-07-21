export interface Account{
    key: number;
    marks: string;
    type: TypeOfAccount;
    login: string;
    password: string;
    delete: (account: Account) => void;
}

type TypeOfAccount = 'LDAP' | 'Локальная'