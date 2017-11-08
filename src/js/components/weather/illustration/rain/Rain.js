import React, { Component } from 'react';

class Rain extends Component {
    render() {
        const { intensity } = this.props;
        return (
            <g>
                {intensity > 0 ? <g id="rain-1">
                    <line className="st14" x1="133.7" y1="-0.5" x2="85.2" y2="59.5" />
                    <line className="st14" x1="560.7" y1="-0.5" x2="534.8" y2="31.5" />
                    <line className="st14" x1="449.7" y1="-0.5" x2="262.7" y2="230.5" />
                    <line className="st14" x1="397.7" y1="-0.5" x2="327.3" y2="86.5" />
                </g> : <div />}
                {intensity > 1 ? <g id="rain-2">
                    <line className="st14" x1="125.7" y1="-0.5" x2="-61.3" y2="230.5" />
                    <line className="st14" x1="230.7" y1="-0.5" x2="103.6" y2="156.5" />
                    <line className="st14" x1="203.7" y1="-0.5" x2="28.8" y2="215.5" />
                    <line className="st14" x1="526.7" y1="-0.5" x2="373.7" y2="188.5" />
                </g> : <div />}
                { intensity > 2 ? <g id="rain-3">
                    <line className="st14" x1="585.7" y1="4.5" x2="402.7" y2="230.5" />
                    <line className="st14" x1="573.7" y1="-0.5" x2="367.3" y2="254.5" />
                    <line className="st14" x1="495.7" y1="-0.5" x2="329.7" y2="204.5" />
                    <line className="st14" x1="307.7" y1="-0.5" x2="166.8" y2="173.5" />
                    <line className="st14" x1="149.7" y1="-0.5" x2="-43" y2="237.5" />
                </g> : <div /> }
                {intensity > 3 ? <g id="rain-4">
                    <line className="st14" x1="321.7" y1="-0.5" x2="180.8" y2="173.5" />
                    <line className="st14" x1="361.7" y1="-0.5" x2="174.7" y2="230.5" />
                    <line className="st14" x1="293.7" y1="-0.5" x2="127.7" y2="204.5" />
                    <line className="st14" x1="291.7" y1="230.5" x2="478.7" y2="-0.5" />
                </g> : <div />}
                {intensity > 4 ? <g id="rain-5">
                    <line className="st14" x1="188.7" y1="-0.5" x2="47.8" y2="173.5" />
                    <line className="st14" x1="215.7" y1="-0.5" x2="94.3" y2="149.5" />
                    <line className="st14" x1="547.7" y1="-0.5" x2="355" y2="237.5" />
                    <line className="st14" x1="422.7" y1="-0.5" x2="256.7" y2="204.5" />
                    <line className="st14" x1="441.7" y1="-0.5" x2="320.3" y2="149.5" />
                    <line className="st14" x1="509.7" y1="-0.5" x2="312.2" y2="243.5" />
                </g> : <div />}
                {intensity > 5 ? <g id="rain-6">
                    <line className="st14" x1="380.7" y1="-0.5" x2="244.7" y2="167.5" />
                    <line className="st14" x1="341.7" y1="-0.5" x2="166.8" y2="215.5" />
                    <line className="st14" x1="274.7" y1="-0.5" x2="168.7" y2="130.5" />
                    <line className="st14" x1="241.7" y1="-0.5" x2="75.7" y2="204.5" />
                    <line className="st14" x1="116.7" y1="-0.5" x2="-49.3" y2="204.5" />
                    <line className="st14" x1="269.2" y1="243.5" x2="466.7" y2="-0.5" />
                    <line className="st14" x1="164.7" y1="-0.5" x2="-1.3" y2="204.5" />
                </g> : <div />}
            </g>
        );
    }
}

export default Rain;