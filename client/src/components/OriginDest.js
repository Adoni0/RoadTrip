import React, { Component } from 'react'

export default class OriginDest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            origin: '',
            destination: ''
        }
        this.originRef = React.createRef();
        this.destinationRef = React.createRef();
    }

    componentDidMount() {
        this.originRef.current.focus;
    }

    clickHandler = () => {
        this.setState({
            origin: this.originRef.current.value,
            destination: this.destinationRef.current.value
        })
    }

    render() {
        return (
            <div>
                <input type='text'
                    ref={this.originRef}
                />
                <input type='text'
                    ref={this.destinationRef}
                />
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

