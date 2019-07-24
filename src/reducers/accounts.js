import { types } from 'actions/accounts';

const initialState = {
  isLoading: false,
  account: null,
  session: null,
  isError: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        isLoading: true
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        account: action.account,
        session: action.session,
        isError: false
      };

    case types.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error
      };

    default:
      return state;
  }
}
