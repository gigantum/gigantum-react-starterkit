import React, { Component } from 'react';

import TemperatureRange from './TermperatureRange';
import MaxChanceOfRain from './MaxChanceOfRain';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            sequence: [
                {
                    component: TemperatureRange,
                    buttonText: 'next'
                },
                {
                    component: MaxChanceOfRain,
                    buttonText: 'finish'
                },
                /*{ 
                    component: CommuteTime
                }*/
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    renderSequencedComponent() {
        switch (this.state.position) {
            case 0:
                return <TemperatureRange />
            case 1:
                return <MaxChanceOfRain />
            default:
                break;
        }
    }

    handleClick() {
        this.setState({ position: this.state.position + 1 })
    }

    render() {
        const { position, sequence } = this.state;
        return (
            <div>
                {this.renderSequencedComponent()}
                <button onClick={this.handleClick}>{sequence[position].buttonText}</ button>
            </div>
        );
    }
}

export default componentName;