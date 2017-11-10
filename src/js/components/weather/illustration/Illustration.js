import React, { Component } from 'react';
import Rain from './rain/Rain'
import Biker from './biker/Biker'

import './Illustration.scss'

class Illustration extends Component {
    constructor(props) {
        super(props);
        
    }
    
   
    
    render() {
        return (
            <div className="illustration">
                <svg x="0px" y="0px" viewBox="0 0 500 300" >
                    <Biker intensity={this.props.tempIntensity || 0}/>
                    <Rain intensity={this.props.rainIntensity || 0}/>
                </svg>
            </div >
        );
    }
}

export default Illustration;