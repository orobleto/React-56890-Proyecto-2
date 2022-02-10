import React from "react";

export default class Usuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
        }
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{this.state.name}</h5>
                    <p class="card-text">{this.state.username} - {this.state.email}</p>
                </div>
            </div>
        );
    }

}
