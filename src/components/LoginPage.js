import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startGoogleLogin, startEmailLogin} from '../actions/auth';


class LogInPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: undefined
    };

    handleGoogleLogin = () => {
        this.props.startGoogleLogin();
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState( {email} );
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState( {password} );
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.email || !this.state.password) {
            this.setState( {error: 'Please provide your Email Address and Password '});
        } else {
            this.props.startEmailLogin(this.state.email, this.state.password).catch(( {message} ) => {
                this.setState( {error: message});
            });
        }
    };

    render() {
        return (
            <div className='box-layout'>
                <div className='box-layout__box'>
                    <h1 className='box-layout__title'>Expense Tracker</h1>
                    <p>Time to take control of your expenses.</p>
                    <form className='form' onSubmit={this.onSubmit}>
                        {this.state.error && <p className='form__error'>{this.state.error}</p>}
                        <input 
                            className='text-input input--grey-focus'
                            type='text'
                            placeholder='Email Address'
                            autoFocus
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <input 
                            className='text-input input--grey-focus'
                            type='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <div><button className='button button--email'>Sign in with Email</button></div>
                    </form>
                    <button className='button button--google' onClick={this.handleGoogleLogin}>Sign in with Google</button>
                    <p>Don't have an account? <Link to="/signup" className="input--grey-focus">Sign up!</Link></p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(LogInPage);