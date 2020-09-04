import * as t from '../../types/auth/login'

export const setLoginInfo = (info) => ({
    type: t.SET_INRO,
    payload: info
});