import React from 'react';
export default class Post extends React.Component {
    render() {
        let confirm;
        if (this.state.showConfirm) {
            return (
                <p>
                    <a href="" onClick={this._confirmDelete}>Yes </a> - <a href="" onClick={this._toggleConfirmMessage}>
                    No</a>
                </p>
            );
        } else {
            confirm = <a href="" onClick={this._toggleConfirmMessage}>{this.props.children}</a>;
        }
        return (
            <span>
        {confirm}
        </span>
        );
    }

    _toggleConfirmMessage(i) {
        i.preventDefault();
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    }

    _confirmDelete(i) {
        i.preventDefault();
        this.props.onConfirm();
        this.setState({
            showConfirm: false
        });
    }

    constructor() {
        super();
        this.state = {
            showConfirm: false
        };
        this._toggleConfirmMessage = this._toggleConfirmMessage.bind(this);
        this._confirmDelete = this._confirmDelete.bind(this);
    }
}
Post.propTypes = {
    onConfirm: React.PropTypes.func.isRequired
};