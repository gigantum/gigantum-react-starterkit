//Vendor
import React, {Component} from 'react';
//Components
import Header from 'js/components/Header';

export default class App extends Component {
  displayName: 'App';

  render () {
    return (
        <div className='root'>
          <Header />
        </div>

    );
  }

}
