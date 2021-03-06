import React from 'react';
export default class Login extends React.Component {
    render() {
        return <div>
            <form className="login" onSubmit={this._submit.bind(this)}>
                <input type="text" placeholder="username" name="login"/>
                <input type="password" placeholder="password" name="password"/>
                <input className="submit-button" type="submit" value="Log-in"/>
            </form>
        </div>;
    }

    _handleSubmit(i) {
        i.preventDefault();
        const entry = {};
        const inputs = [].slice.call(i.target.getElementsByTagName('input'));
        inputs.forEach(input => {
            if (input.type === 'submit') {
                return false;
            }
            entry[input.name] = input.value;
        });
        this.props._handleSubmit(entry);
    }
}
export default Login;