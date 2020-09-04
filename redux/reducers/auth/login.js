import * as t from '../../types/auth/login'

const initialState = {
    isLoged: false,
    name: null
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case t.SET_INRO: {
            // some think
            const isLoged = true;
            return {...state, isLoged}
        }
        case t.SET_INRO2: {
            // some think
            return {...state, name: action.payload}
        }
        default: return {...state}
    }
}