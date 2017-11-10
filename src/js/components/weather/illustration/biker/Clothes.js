import React from 'react';

export class ClothesBehind extends React.Component {
    constructor(props) {
        super();
    }

    renderClothes() {
        switch (this.props.intensity) {
            case 4:
                return (
                    <g id="hot_1_">
                        <polygon className="st2" points="223,195 233,205 216,216 208,205 202,202 199,191 			" />
                    </g>
                );
            case 3:
                return (
                    <g id="warm_1_">
                        <polygon className="st3" points="207,240 211,235 217,241 213,246 210,240 			" />
                        <polygon className="st4" points="223,195 237,209 216,216 208,205 202,202 199,191 			" />
                    </g>
                );
            case 2:
                return (
                    <g id="mild_1_">
                        <polygon className="st3" points="207,240 211,235 217,241 213,246 210,240 			" />
                        <polygon className="st5" points="224,196 238,209 241,214 241,219 217,243 210,236 219,217 212,208 200.7,201 199.5,189.5 			" />
                    </g>
                );
            case 1:
                return (
                    <g id="cool_1_">
                        <polygon className="st3" points="207,240 211,235 217,241 213,246 210,240 			" />
                        <polygon className="st5" points="224,196 238,209 241,214 241,219 217,243 210,236 219,217 212,208 200.7,201 199.5,189.5 			" />
                    </g>
                );
            default:
                return (
                    <g id="cold_1_">
                        <polygon className="st3" points="207,240 211,235 217,241 213,246 210,240 			" />
                        <polygon className="st5" points="224,196 238,209 241,214 241,219 217,243 210,236 219,217 212,208 200.7,201 199.5,189.5 			" />
                    </g>
                )
        }
    }

    render() {
        return (
            <g id="clothes-behind">
                {this.renderClothes()}
            </g>
        )
    }
}


export class ClothesFront extends React.Component {
    constructor(props) {
        super();

    }

    renderClothes() {
        switch (this.props.intensity) {
            case 4:
                return (
                    <g id="hot">
                        <polygon className="st2" points="201,189 199,191 201,202 210,209 216,219 233,213 223,194 			" />
                        <polygon className="st3" points="199.5,189.5 213.5,168.5 236.5,159.5 242.5,159.5 245.5,165.5 250.5,167.5 248.5,179.5 248.5,186.5 237.5,188.5 237.5,185.5 224.5,189.5 223.5,195.5 			" />
                    </g>
                );
            case 3:
                return (
                    <g id="warm">
                        <polygon className="st3" points="224,268 225,259 233,259 231,269 226,267 			" />
                        <polygon className="st10" points="199.5,189.5 213.5,168.5 236.5,159.5 242.5,159.5 245.5,165.5 250.5,167.5 248.5,179.5 248.5,194.5 237.5,195.5 237.5,185.5 224.5,189.5 223.5,195.5 			" />
                        <polygon className="st4" points="201,189 199,191 201,202 210,209 221,228 236,219 223,194 			" />
                    </g>
                );
            case 2:
                return (
                    <g id="mild">
                        <polygon className="st3" points="224,268 225,259 233,259 231,269 226,267 			" />
                        <polygon className="st3" points="199.5,189.5 213.5,168.5 236.5,159.5 242.5,159.5 245.5,165.5 250.5,167.5 248.5,179.5 248.5,186.5 237.5,188.5 237.5,185.5 224.5,189.5 223.5,195.5 			" />
                        <polygon className="st5" points="199,189 201,203 210.5,208.4 221,230 220,243 223,263 233,265 237,227 234,217 223,195 			" />
                    </g>
                );
            case 1:
                return (
                    <g id="cool">
                        <polygon className="st3" points="224,268 225,259 233,259 231,269 226,267 			" />
                        <polygon className="st5" points="199,189 201,203 210.5,208.4 221,230 220,243 223,263 233,265 237,227 234,217 223,195 			" />
                        <polygon className="st11" points="235,160 241,160 246,165 251,167 250,172 248,177 248,200 261,207 260,213 238,206 236,188 225,190 222.8,195.3 199,193 199,189 212,168 			" />
                    </g>
                );
            default:
                return (
                    <g id="cold">
                        <polygon className="st3" points="224,268 225,259 233,259 231,269 226,267 			" />
                        <polygon className="st5" points="199,189 201,203 210.5,208.4 221,230 220,243 223,263 233,265 237,227 234,217 223,195 			" />
                        <polygon className="st11" points="235,160 241,160 246,165 251,167 250,172 248,177 248,200 261,207 260,213 238,206 236,188 225,190 222.8,195.3 199,193 199,189 212,168 			" />
                        <polygon className="st12" points="250.7,168.6 259,169 266,166 269,161 270,158 264,159 253,158 247,153 238,150 232,152 226,150 222,151 218,151 220,152 218,152 220,153 219,154 220,154 218,155 220,155 218,156 219,156 218,157 222,158 219,158 224,159 229,159 231,160 237,160 242,162 245,162 248,165 			" />
                        <polygon className="st12" points="243,151 242,159 244,164 250.6,169 258.5,169 252,164 250,157 248.4,154.2 			" />
                        <polygon className="st13" points="253,158 259,156 264,150 256,149 247,153 			" />
                        <polygon className="st13" points="261,207 274,209 269,217 260,214 			" />
                    </g>
                );
        }
    }

    render() {
        return (
            <g id="clothes-front">
                {this.renderClothes()}
            </g>
        )
    }
}