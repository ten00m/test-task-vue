

export const validateLogin = (login: string): boolean => {
    return login.length > 0;
}

export const validatePassword = (pass: string | null): boolean => {
    return pass?.length ? true : false;
}
