import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEmailSignup } from '../actions/auth';
import { history } from '../routers/AppRouter';


class EmailSingupPage extends React.Component {
    state = {
        email: '',
        password1: '',
        password2: '',
        error: ''
    };

    validatePasswordAndCreateAccount = () => {
        const regexTest = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/;
        
        if(!this.state.email || !this.state.password1) {
            this.setState( {error: 'Please provide both an Email Address and a Password'} );
        } else if (this.state.password1 !== this.state.password2) {
            this.setState( {error: 'Passwords do not match'} );
        } else if (this.state.password1.length < 8) {
            this.setState( {error: 'The minimum lenght for your password is 8 characters'} );
        } else if (!this.state.password1.match(regexTest)) {
            this.setState( {error: 'Make sure your password contains at least one uppercase letterm one lowercase letter and 1 number all with no spaces'} );
        } else if (this.state.password1.match(regexTest)) {
            this.props.startEmailSignup(this.state.email, this.state.password1).then(() => {
                history.push('/dashboard');
            }).catch(() => {
                this.setState( {error: 'This email is already in use' } );
                
            });
        } else {
            this.setState( {error: ''} )
        }
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState( {email} );
    };
    onPassword1Change = (e) => {
        const password1 = e.target.value;
        this.setState( {password1} );
    };
    onPassword2Change = (e) => {
        const password2 = e.target.value;
        this.setState( {password2} );
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.validatePasswordAndCreateAccount();
    };

    render() {
        return (
            <div className='box-layout'>
                <div className='box-layout__box'>
                    <h1 className='box-layout__title'>Singup for Expensify!</h1>
                    <p>Enter your email address and pick a strong password</p>
                    <div>
                        <form className='form' onSubmit={this.onSubmit}>
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                            <input
                                className='text-input input--grey-focus'
                                type='text'
                                placeholder='Email address'
                                autoFocus
                                value={this.state.email}
                                onChange={this.onEmailChange}
                            />
                            <input 
                                type='password'
                                className="text-input input--grey-focus text-input--small-bottom-margin"
                                placeholder='Password'
                                value={this.state.password1}
                                onChange={this.onPassword1Change}
                            />
                            <input 
                                type='password'
                                className='text-input input--grey-focus'
                                placeholder='Confirm your password'
                                value={this.state.password2}
                                onChange={this.onPassword2Change}
                            />
                            <div><button className='button'>Sign Up</button></div>
                        </form>
                        <p>Already have an Account? <Link to="/">Log in!</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEmailSignup: (email, password) => dispatch(startEmailSignup(email, password))
});

export default connect(undefined, mapDispatchToProps)(EmailSingupPage);