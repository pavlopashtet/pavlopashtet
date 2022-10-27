import React from "react"

class NataliaComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Bobby",
            show: false
        }
    }
        handleClick()
        {
            this.setState({name: "Iryna"})
            this.setState({show:!this.state.show})

    }

    render(){
        return (
            <div>
                <h1>I want change!!!!!</h1>
                <button onClick={this.handleClick.bind(this)}> Click</button>
                {this.state.show && <h1>Then start studying </h1>}
            </div>
        );
    }

}
export default NataliaComponent