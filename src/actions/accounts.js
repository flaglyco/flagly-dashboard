import api from 'helpers/api';

export const types = {
    REGISTER_START: 'ACCOUNTS/REGISTER_START',
    REGISTER_SUCCESS: 'ACCOUNTS/REGISTER_SUCCESS',
    REGISTER_ERROR: 'ACCOUNTS/REGISTER_ERROR'
};

export const registerAccount = (email, name, password) => dispatch => {
    dispatch({
        type: types.REGISTER_START
    });

    return api.registerAccount(email, name, password)
        .then(result => {
            if (result.code >= 400) {
                dispatch({
                    type: types.REGISTER_ERROR,
                    error: result.message
                })
            } else {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                    account: result.account,
                    session: result.session
                })
            }
        })
        .catch(e => {
            dispatch({
                type: types.REGISTER_ERROR,
                error: e
            })
        })
};
