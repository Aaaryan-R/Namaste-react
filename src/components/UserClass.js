import { Component } from "react";

export class UserClass extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div className="user-class">
                <h3>Name : {this.props.name}</h3>
                <h3>Age : {this.props.age}</h3>
                <h3>Contact : {this.props.contact}</h3>
                <h5>Count : {this.state.count}</h5>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Update count</button>
            </div>
        );
    }
}