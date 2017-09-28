import React, {Component} from 'react';
import logoImg from 'images/bicycle.svg';
import CommuteTime from 'js/components/CommuteTime';

export default class Header extends Component {
  displayName: 'Header';

  render () {
    const {title, subtitle} = this.props;

    return (
      <div className='app-header relative'>
        <h1 className='app-title text-center'>{title}</h1>
        <CommuteTime/>
      </div>
    );
  }
}
