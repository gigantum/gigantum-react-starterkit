import React, { Component } from 'react';

import { ClothesBehind, ClothesFront } from './Clothes';

class Biker extends Component {
    render() {
        return (
            <g id="biker">
                <g id="person-behind">
                    <polygon className="st7" points="222,195 240,213 240,218 211,247 206,242 213,232 217,221 225,216 208.3,205.8 202,203 199,190 		" />
                    <polygon className="st1" points="203.5,246.4 208.1,254.1 215.1,258 215.8,251.8 209.7,239.5 203.5,239.5 		" />
                </g>
                <ClothesBehind intensity={this.props.intensity}/>
                <g id="bike_1_">
                    <g>
                        <line className="st6" x1="230" y1="278" x2="208" y2="249" />
                        <g>
                            <circle className="st6" cx="274" cy="260" r="30" />
                            <circle className="st6" cx="174.5" cy="260.5" r="30" />
                            <line className="st6" x1="208.5" y1="205" x2="208.5" y2="214" />
                            <path className="st6" d="M269.5,215.5c0,0,9-3,8-10s-10-8-10-8h-12v16l18,49" />
                            <line className="st6" x1="218.5" y1="204.5" x2="199.5" y2="204.5" />
                            <path className="st6" d="M208.5,213.5L172,260.3c-1,1.3-0.1,3.2,1.6,3.2h43.9c0.6,0,1.2-0.3,1.6-0.8l35.2-47.6 c0.5-0.7,0-1.6-0.8-1.6H208.5"/>
				<line className="st6" x1="208.5" y1="213.5" x2="218.5" y2="263.5" />
                        </g>
                    </g>
                </g>
                <g id="person-front">
                    <g>
                        <polygon className="st7" points="199,192.3 214.8,168.5 236.6,160.3 249.8,163 249.8,170.4 242.9,183.9 224.4,188.6 219.1,196.9   "/>
                        <polygon className="st7" points="240.9,161.2 247.3,155.8 255.9,163 250.6,165.8 			" />
                        <path className="st7" d="M270,152.3c0,6.8-3.7,14.3-9.5,14.3c-5.8,0-13.5-5.5-13.5-12.3s5.7-12.3,11.5-12.3
                            C264.3,142,270,145.5,270,152.3z"/>
			<path className="st7" d="M231,271c1-2,5-43,5-43l-3-11l-11-22l-23-5l3,13l9,4l13,23l-3,12l4,16l-1,13H231z" />
                        <polygon className="st7" points="268.6,216.1 239.1,205 236.4,172.8 243.9,166.4 246.8,171.3 247.9,200.2 261.4,208.4 273.3,209.4 "/>
                    </g>
                    <polygon className="st8" points="244,151 248,153 256,149 273,151 275,146 269,140 263,136 254,136 248,138 243,140 242,149 		" />
                    <polygon className="st9" points="225.5,276 234,278.9 241.8,277.3 238.4,272.1 225.7,266.7 221,270.7 		" />
                </g>
                <ClothesFront intensity={this.props.intensity}/>
            </g>
        );
    }
}

export default Biker;