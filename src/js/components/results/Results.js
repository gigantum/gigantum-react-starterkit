import React, {Component} from 'react';

import noBikeImg from 'images/bicycle.svg';
import noMetroImg from 'images/metro.svg';
import bikeImg from 'images/bicycle_go.svg';
import metroImg from 'images/metro_go.svg';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  displayName: 'Results';

  render () {

    return (
      <div className="results">
        <h2 className="subsection-title"> Based on your preferences, you should:</h2>
          <div className="logos">
            <img className={this.props.bikeClass} src={this.props.bikeSrc} alt="app-logo" />
            <img className={this.props.metroClass}  src={this.props.metroSrc} alt="app-logo" />
          </div>
          <div className="caption">
            <h3 className="transport">{this.props.transport}</h3>
            <h3 className="caveat">{this.props.caveat}</h3>
          </div>
      </div>
  )}
}
