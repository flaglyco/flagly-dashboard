import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { registerAccount } from 'actions/accounts';

class Register extends Component {
  componentDidMount() {
      this.props.registerAccount('m.akif.tutuncu2@gmail.com', 'Mehmet Akif Tutuncu', 'Pass1234');
  }

  render() {
    const { isLoading, account, session, isError, error } = this.props;

    return(
      <Fragment>
        {isLoading && <p>Loading...</p> }
        {isError && <p>{error}</p> }
        {
          account &&
          <p>{account.id} - {session}</p>
        }
      </Fragment>
    )
  }
}

export default connect(
    (state) => ({
        isLoading: state.isLoading,
        account: state.account,
        session: state.session,
        isError: state.isError,
        error: state.error
    }), {
        registerAccount
    }
)(Register);
