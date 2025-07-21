

export const validateLogin = (login: string): boolean => {
    return login.length > 0;
}

export const validatePassword = (pass: string): boolean => {
    return pass.length > 0;
}
