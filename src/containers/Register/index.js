import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

import {registerAccount} from 'actions/accounts';

class Register extends Component {
    componentDidMount() {
        let session = window.localStorage.getItem('flagly-dashboard-session');

        if (!session) {
            this.props.registerAccount('m.akif.tutuncu10@gmail.com', 'Mehmet Akif Tutuncu', 'Pass1234');
        } else {
            console.log('Already logged in');
        }
    }

    render() {
        const {isLoading, account, session, isError, error} = this.props;

        return (
            <Fragment>
                {isLoading && <p>Loading...</p>}
                {isError && <p>{error}</p>}
                {
                    account &&
                    <p>{account.id} - {session}</p>
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
        isLoading: state.accounts.isLoading,
        isError: state.accounts.isError,
        account: state.accounts.account,
        session: state.accounts.session,
        error: state.accounts.error
});

const mapDispatchToProps = {
    registerAccount
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
