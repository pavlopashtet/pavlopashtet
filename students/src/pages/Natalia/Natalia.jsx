import React from "react";

class Natalia extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            show:false
        }
    }
    handleClick(){

        this.setState({show: !this.state.show})
    }
    render() {
        return(
            <div>
                <h1> I want change!!!</h1>
                {this.state.show &&<h1>Then start learning something</h1>}
                <button
                    onClick={this.handleClick.bind(this)}>
                    Click me
                </button>

            </div>
        )

    }
}

export default Natalia